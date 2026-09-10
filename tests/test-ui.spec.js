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
