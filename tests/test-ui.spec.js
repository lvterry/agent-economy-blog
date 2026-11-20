import { test, expect } from '@playwright/test';

test.describe('Site header', () => {
  test('shows the wordmark logo and links home', async ({ page }) => {
    await page.goto('/');

    const brand = page.locator('.site-brand');
    await expect(brand).toHaveAttribute('href', '/');
    await expect(brand).toHaveAttribute('aria-label', '智能体经济观察首页');
    await expect(page.locator('.site-brand-image--light')).toBeVisible();
    await expect(page.locator('.site-brand-image--dark')).toBeHidden();
  });

  test('swaps to the light-on-dark wordmark in dark mode', async ({ page }) => {
    await page.goto('/');

    await page.evaluate(() => window.toggleTheme());

    await expect(page.locator('html')).toHaveAttribute('data-theme', 'dark');
    await expect(page.locator('.site-brand-image--dark')).toBeVisible();
    await expect(page.locator('.site-brand-image--light')).toBeHidden();
  });

  test('page is declared zh without a locale prefix', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('html')).toHaveAttribute('lang', 'zh');
  });
});

test.describe('Home feed', () => {
  test('opens with the newest 30 posts, each linking into /blog', async ({ page }) => {
    await page.goto('/');

    const items = page.locator('.feed-item');
    await expect(items).toHaveCount(30);
    await expect(items.first().locator('.feed-link')).toHaveAttribute('href', /^\/blog\/[a-z0-9-]+$/);

    const dates = await page
      .locator('.feed-time')
      .evaluateAll(els => els.map(el => el.getAttribute('datetime')));
    expect(dates).toEqual([...dates].sort().reverse());
  });

  test('load more appends the next 30 posts in order', async ({ page, request }) => {
    const allPosts = await (await request.get('/posts.json')).json();

    await page.goto('/');
    await page.locator('#feed-more-btn').click();
    await expect(page.locator('.feed-item')).toHaveCount(60);

    const titles = await page.locator('.feed-title').evaluateAll(els => els.map(el => el.textContent));
    expect(titles).toEqual(allPosts.slice(0, 60).map(post => post.title));
  });

  test('keeps loading until the whole archive is on the page', async ({ page }) => {
    await page.goto('/');

    const button = page.locator('#feed-more-btn');
    const items = page.locator('.feed-item');
    const total = Number(await button.getAttribute('data-total'));

    for (let i = 0; i < 20; i++) {
      if (!(await button.isVisible())) break;
      const before = await items.count();
      await button.click();
      await expect(items).not.toHaveCount(before);
    }

    await expect(button).toBeHidden();
    await expect(items).toHaveCount(total);
  });
});

// Counts, slugs and expectations all come from /posts.json, so adding posts
// never makes these stale.
async function fetchPosts(request) {
  return (await request.get('/posts.json')).json();
}

function countByCategory(allPosts) {
  return allPosts.reduce((counts, post) => {
    counts[post.category] = (counts[post.category] || 0) + 1;
    return counts;
  }, {});
}

test.describe('Home category nav', () => {
  test.describe('wide viewport', () => {
    // Explicit: the default 1280 only clears the 1240 breakpoint by 40px.
    test.use({ viewport: { width: 1440, height: 900 } });

    test('lists every category with counts and marks 全部 pressed', async ({ page, request }) => {
      const allPosts = await fetchPosts(request);
      const counts = countByCategory(allPosts);

      await page.goto('/');

      const nav = page.locator('#cat-nav');
      await expect(nav).toBeVisible();

      const buttons = nav.locator('.cat-nav-btn');
      await expect(buttons).toHaveCount(Object.keys(counts).length + 1);

      const shownCounts = await nav.locator('.cat-nav-count')
        .evaluateAll(els => els.map(el => Number(el.textContent.replace(/\D/g, ''))));
      expect(shownCounts[0]).toBe(allPosts.length);
      expect(shownCounts.slice(1).reduce((a, b) => a + b, 0)).toBe(allPosts.length);

      await expect(nav.locator('[aria-pressed="true"]')).toHaveCount(1);
      await expect(buttons.first()).toHaveAttribute('aria-pressed', 'true');
    });

    test('appears on /blog too, which shares the component', async ({ page }) => {
      await page.goto('/blog');
      await expect(page.locator('#cat-nav')).toBeVisible();
    });

    test('keeps the feed flush with the header and adds no horizontal overflow', async ({ page }) => {
      await page.goto('/');

      // Comparing left edges is scrollbar-agnostic: both boxes are centred.
      const feed = await page.locator('.feed-list').boundingBox();
      const logo = await page.locator('.site-logo').boundingBox();
      expect(feed).not.toBeNull();
      expect(logo).not.toBeNull();
      expect(Math.abs(feed.x - logo.x)).toBeLessThanOrEqual(1);

      const overflow = await page.evaluate(
        () => document.documentElement.scrollWidth - document.documentElement.clientWidth);
      expect(overflow).toBeLessThanOrEqual(1);
    });

    test('filters the feed and keeps paging inside the filter', async ({ page, request }) => {
      const allPosts = await fetchPosts(request);
      const counts = countByCategory(allPosts);
      const [slug] = Object.entries(counts).sort((a, b) => b[1] - a[1])[0];
      const expected = allPosts.filter(post => post.category === slug);
      expect(expected.length).toBeGreaterThan(30);

      await page.goto('/');
      await page.locator(`.cat-nav-btn[data-category="${slug}"]`).click();

      // Asserted first: the item count is already 30 from SSR, so counting
      // items alone would also pass against the unfiltered feed.
      await expect(page.locator('#feed-progress'))
        .toHaveText(`显示最新 30 篇，共 ${expected.length} 篇文章`);
      await expect(page.locator(`.cat-nav-btn[data-category="${slug}"]`))
        .toHaveAttribute('aria-pressed', 'true');

      const titles = () => page.locator('.feed-title')
        .evaluateAll(els => els.map(el => el.textContent));
      expect(await titles()).toEqual(expected.slice(0, 30).map(post => post.title));

      await page.locator('#feed-more-btn').click();
      await expect(page.locator('.feed-item')).toHaveCount(60);
      expect(await titles()).toEqual(expected.slice(0, 60).map(post => post.title));
    });

    test('revives load more after a filter exhausts it', async ({ page, request }) => {
      const allPosts = await fetchPosts(request);
      const counts = countByCategory(allPosts);
      const [smallest, smallestCount] = Object.entries(counts).sort((a, b) => a[1] - b[1])[0];

      await page.goto('/');
      const button = page.locator('#feed-more-btn');
      const items = page.locator('.feed-item');

      await page.locator(`.cat-nav-btn[data-category="${smallest}"]`).click();
      await expect(page.locator('#feed-progress')).toContainText(`共 ${smallestCount} 篇文章`);

      for (let i = 0; i < 20 && (await button.isVisible()); i++) {
        const before = await items.count();
        await button.click();
        await expect(items).not.toHaveCount(before);
      }

      await expect(button).toBeHidden();
      await expect(items).toHaveCount(smallestCount);

      await page.locator('.cat-nav-btn[data-category=""]').click();
      await expect(items).toHaveCount(30);
      await expect(button).toBeVisible();
      await button.click();
      await expect(items).toHaveCount(60);
    });

    test('records the filter in the URL and restores it on reload', async ({ page, request }) => {
      const allPosts = await fetchPosts(request);
      const counts = countByCategory(allPosts);
      const slug = allPosts[0].category;

      await page.goto('/');
      await page.locator(`.cat-nav-btn[data-category="${slug}"]`).click();
      await expect(page).toHaveURL(new RegExp(`\\?category=${slug}$`));

      await page.reload();

      await expect(page.locator(`.cat-nav-btn[data-category="${slug}"]`))
        .toHaveAttribute('aria-pressed', 'true');
      await expect(page.locator('#feed-progress'))
        .toHaveText(`显示最新 ${Math.min(30, counts[slug])} 篇，共 ${counts[slug]} 篇文章`);
    });

    test('back button returns to the unfiltered feed', async ({ page, request }) => {
      const allPosts = await fetchPosts(request);
      const slug = allPosts[0].category;

      await page.goto('/');
      await page.locator(`.cat-nav-btn[data-category="${slug}"]`).click();
      await expect(page).toHaveURL(new RegExp(`category=${slug}$`));

      await page.goBack();

      await expect(page.locator('.cat-nav-btn[data-category=""]'))
        .toHaveAttribute('aria-pressed', 'true');
      await expect(page.locator('#feed-progress'))
        .toHaveText(`显示最新 30 篇，共 ${allPosts.length} 篇文章`);
    });
  });

  test.describe('narrow viewport', () => {
    test.use({ viewport: { width: 390, height: 844 } });

    test('renders no category nav', async ({ page }) => {
      await page.goto('/');
      await expect(page.locator('#cat-nav')).toBeHidden();
      await expect(page.locator('.cat-nav-btn:visible')).toHaveCount(0);
      await expect(page.locator('.feed-item')).toHaveCount(30);
    });

    test('drops a category URL it has no control for', async ({ page, request }) => {
      const allPosts = await fetchPosts(request);
      const slug = allPosts[0].category;

      await page.goto(`/?category=${slug}`);

      await expect(page).not.toHaveURL(/category=/);
      await expect(page.locator('#feed-progress'))
        .toHaveText(`显示最新 30 篇，共 ${allPosts.length} 篇文章`);
    });
  });

  test.describe('below the wide breakpoint', () => {
    test.use({ viewport: { width: 1024, height: 768 } });

    test('keeps the single-column feed with no nav', async ({ page }) => {
      await page.goto('/');

      await expect(page.locator('#cat-nav')).toBeHidden();

      const feed = await page.locator('.feed-list').boundingBox();
      const logo = await page.locator('.site-logo').boundingBox();
      expect(feed).not.toBeNull();
      expect(logo).not.toBeNull();
      expect(Math.abs(feed.x - logo.x)).toBeLessThanOrEqual(1);
    });
  });

  test.describe('without JavaScript', () => {
    test.use({ viewport: { width: 1440, height: 900 }, javaScriptEnabled: false });

    test('hides the nav but still server-renders the first page', async ({ page }) => {
      await page.goto('/');
      await expect(page.locator('#cat-nav')).toBeHidden();
      await expect(page.locator('.feed-item')).toHaveCount(30);
    });
  });
});

test.describe('Archive page', () => {
  test('groups posts by month with timeline anchors', async ({ page }) => {
    await page.goto('/archive');

    expect(await page.locator('.month-section').count()).toBeGreaterThan(0);

    const firstMonth = page.locator('.month-section').first();
    await expect(firstMonth.locator('.month-title')).toBeVisible();
    await expect(firstMonth.locator('.post-card').first()).toBeVisible();
    await expect(page.locator('.timeline-link').first()).toHaveAttribute('href', /^#\d{4}-\d{2}$/);
  });
});

test.describe('Back to top button', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('button is hidden initially', async ({ page }) => {
    const btt = page.locator('#back-to-top');
    await expect(btt).not.toHaveClass(/back-to-top-btn--visible/);
    await expect(btt).toHaveCSS('opacity', '0');
  });

  test('button appears after scrolling down', async ({ page }) => {
    const btt = page.locator('#back-to-top');
    await expect(btt).not.toHaveClass(/back-to-top-btn--visible/);

    await page.evaluate(() => window.scrollTo(0, 800));
    await page.waitForTimeout(100);

    await expect(btt).toHaveClass(/back-to-top-btn--visible/);
    await expect(btt).toBeVisible();
  });

  test('clicking button scrolls to top', async ({ page }) => {
    const btt = page.locator('#back-to-top');

    await page.evaluate(() => window.scrollTo(0, 1200));
    await page.waitForTimeout(100);
    await expect(btt).toHaveClass(/back-to-top-btn--visible/);

    await btt.click();
    await page.waitForTimeout(600);

    const scrollY = await page.evaluate(() => window.scrollY);
    expect(scrollY).toBe(0);

    await expect(btt).not.toHaveClass(/back-to-top-btn--visible/);
  });
});

test.describe('Companies filter', () => {
  test('category buttons filter the company cards', async ({ page }) => {
    await page.goto('/companies');

    const cards = page.locator('.company-card');
    const total = await cards.count();
    expect(total).toBeGreaterThan(0);

    await page.locator('.filter-btn', { hasText: '模型提供商' }).click();

    const filtered = await page.locator('.company-card:visible').count();
    expect(filtered).toBeGreaterThan(0);
    expect(filtered).toBeLessThan(total);

    await page.locator('.filter-btn', { hasText: '全部' }).click();
    await expect(page.locator('.company-card:visible')).toHaveCount(total);
  });
});

test.describe('Models timeline', () => {
  test('renders a vertical timeline with labs across the top, a Today line, and one dot per release', async ({ page }) => {
    await page.goto('/models');

    const labs = await page.locator('.lab-header .lab-name').allTextContents();
    expect(labs).toEqual(['OpenAI', 'Anthropic', 'Google', 'xAI', 'Meta', 'GLM', 'Kimi', 'DeepSeek']);

    await expect(page.locator('.today-label')).toBeVisible();
    await expect(page.locator('.today-label')).toHaveText('Today');
    const todayLine = page.locator('.today-line');
    await expect(todayLine).toBeAttached();
    const todayCoords = await todayLine.evaluate((el) => ({
      x1: Number(el.getAttribute('x1')),
      x2: Number(el.getAttribute('x2')),
      y1: Number(el.getAttribute('y1')),
      y2: Number(el.getAttribute('y2')),
    }));
    expect(todayCoords.y1).toBe(todayCoords.y2);
    expect(todayCoords.x2).toBeGreaterThan(todayCoords.x1);

    // Vertical orientation: height exceeds width, and newer months sit above older months.
    const plotBox = await page.locator('svg.plot').boundingBox();
    expect(plotBox).not.toBeNull();
    expect(plotBox.height).toBeGreaterThan(plotBox.width);

    // Google Nov 2026 has 3 separate releases spread vertically inside the same month.
    const googleNovDots = page.locator('.lab-col').nth(2).locator('.release[data-row="0"]');
    await expect(googleNovDots).toHaveCount(3);
    const ys = await googleNovDots.evaluateAll((els) => els.map((el) => Number(el.dataset.cy)));
    expect(ys[0]).toBeLessThan(ys[1]);
    expect(ys[1]).toBeLessThan(ys[2]);

    // OpenAI Nov 2026 has 1 GA (solid) and 1 limited (dotted) release as separate dots.
    const openaiNovDots = page.locator('.lab-col').nth(0).locator('.release[data-row="0"]');
    await expect(openaiNovDots).toHaveCount(2);
    const limitedClasses = await openaiNovDots.evaluateAll((els) =>
      els.map((el) => el.classList.contains('is-limited')),
    );
    expect(limitedClasses.sort()).toEqual([false, true]);

    const gaDash = await page.locator('.release:not(.is-limited) .mark').first()
      .evaluate((el) => getComputedStyle(el).strokeDasharray);
    const limitedDash = await page.locator('.release.is-limited .mark').first()
      .evaluate((el) => getComputedStyle(el).strokeDasharray);
    expect(gaDash).toBe('none');
    expect(limitedDash).not.toBe('none');
    await expect(page.locator('.gap-arc')).toHaveCount(0);
  });

  test('runs newest at the top and oldest at the bottom', async ({ page }) => {
    await page.goto('/models');

    // Reading down the chart must always go back in time, across every column
    // and inside each month band: up is later, down is earlier.
    const ordered = await page.locator('.release').evaluateAll((els) =>
      els
        .map((el) => ({ date: el.getAttribute('data-date'), cy: Number(el.getAttribute('data-cy')) }))
        .sort((a, b) => a.cy - b.cy)
        .map((dot) => dot.date));
    expect(ordered.length).toBeGreaterThan(90);
    expect(ordered).toEqual([...ordered].sort().reverse());

    // Concretely: Muse Ember (Nov 4) came before Gemini 4 Carbon (Nov 12),
    // so Ember has to sit lower on the chart.
    const emberY = Number(await page.locator('.release[aria-label*="Muse Ember"]').getAttribute('data-cy'));
    const carbonY = Number(
      await page.locator('.release[aria-label*="2026年11月12日，Gemini 4 Carbon"]').getAttribute('data-cy'),
    );
    expect(emberY).toBeGreaterThan(carbonY);

    // Same-date releases from different labs share one row.
    const sep22 = await page
      .locator('.release[data-date="2026-09-22"]')
      .evaluateAll((els) => els.map((el) => el.getAttribute('data-cy')));
    expect(sep22.length).toBe(2);
    expect(new Set(sep22).size).toBe(1);
  });

  test('stays legible when one lab ships several times in a month', async ({ page }) => {
    await page.goto('/models');

    // Every month occupies identical vertical space, so the time scale can't skew.
    const heights = await page
      .locator('[data-month-row]')
      .evaluateAll((els) => [...new Set(els.map((el) => el.dataset.height))]);
    expect(heights).toHaveLength(1);

    // Google shipped three times in November; every dot keeps its own row.
    const googleNov = page.locator('.lab-col').nth(2).locator('.release[data-row="0"]');
    await expect(googleNov).toHaveCount(3);
    const ys = await googleNov.evaluateAll((els) => els.map((el) => Number(el.dataset.cy)));
    expect(new Set(ys).size).toBe(3);

    // No two dots in a column may come closer than a dot's own diameter.
    const gaps = await page.locator('.lab-col').evaluateAll((cols) =>
      cols.flatMap((col) => {
        const sorted = [...col.querySelectorAll('.release')]
          .map((el) => Number(el.getAttribute('data-cy')))
          .sort((a, b) => a - b);
        return sorted.slice(1).map((y, i) => y - sorted[i]);
      }));
    expect(Math.min(...gaps)).toBeGreaterThan(11);
  });

  test('shows callout on hover and supports vertical keyboard navigation', async ({ page }) => {
    await page.goto('/models');

    const firstLimited = page.locator('.release.is-limited').first();
    await firstLimited.hover();
    await expect(page.locator('[data-callout]')).toHaveClass(/is-open/);
    await expect(page.locator('[data-callout-text]')).toContainText('GPT-6 Cyber');
    await expect(page.locator('.month-axis-label[data-month-row="0"]')).toHaveClass(/is-active/);

    // ArrowDown walks down the column, which is back in time.
    const { start, expected } = await page.evaluate(() => {
      const col = document.querySelectorAll('.lab-col')[0];
      const sorted = [...col.querySelectorAll('.release')].sort(
        (a, b) => Number(a.dataset.cy) - Number(b.dataset.cy),
      );
      sorted[0].focus();
      return {
        start: sorted[0].getAttribute('data-cy'),
        expected: sorted[1].getAttribute('data-cy'),
      };
    });
    await page.keyboard.press('ArrowDown');
    const focused = await page.evaluate(() => document.activeElement?.getAttribute('data-cy'));
    expect(focused).toBe(expected);
    expect(Number(focused)).toBeGreaterThan(Number(start));
  });
});

test.describe('RSS feed', () => {
  test('feed is accessible and valid XML', async ({ request }) => {
    const response = await request.get('/rss.xml');
    expect(response.ok()).toBeTruthy();
    expect(response.headers()['content-type']).toContain('application/xml');

    const body = await response.text();
    expect(body).toContain('<?xml version="1.0"');
    expect(body).toContain('<rss version="2.0">');
    expect(body).toContain('<channel>');
    expect(body).toContain('<title>Agent Economy</title>');
  });

  test('feed contains every post', async ({ request }) => {
    const response = await request.get('/rss.xml');
    const body = await response.text();

    expect(body).toMatch(/<item>/g);
    expect((body.match(/<item>/g) || []).length).toBeGreaterThan(40);
  });

  test('post links use public article URLs', async ({ request }) => {
    const response = await request.get('/rss.xml');
    const body = await response.text();

    expect(body).not.toMatch(/<link>[^<]+\.md<\/link>/);
    expect(body).toContain('<link>https://agenteconomy.cn/blog/google-anthropic-40-billion-bet/</link>');
  });

  test('feed dates reflect real publish times', async ({ request }) => {
    const response = await request.get('/rss.xml');
    const body = await response.text();

    const pubDates = [...body.matchAll(/<pubDate>([^<]+)<\/pubDate>/g)].map(m => new Date(m[1]));
    expect(pubDates.length).toBeGreaterThan(40);
    expect(pubDates.every(d => !Number.isNaN(d.getTime()))).toBe(true);

    // An empty feed renders an epoch lastBuildDate, so this catches the regression
    // where feed items stopped being collected at all.
    const lastBuild = body.match(/<lastBuildDate>([^<]+)<\/lastBuildDate>/)?.[1];
    expect(lastBuild).toBeTruthy();
    expect(Date.now() - new Date(lastBuild).getTime()).toBeLessThan(365 * 24 * 60 * 60 * 1000);
  });
});
