import { test, expect } from '@playwright/test';

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

test.describe('Reading progress bar', () => {
  test('is present on article pages', async ({ page }) => {
    await page.goto('/blog/openai-workspace-agents-chatgpt');
    const rp = page.locator('#reading-progress');
    await expect(rp).toHaveCount(1);
  });

  test('width is 0% at top of article', async ({ page }) => {
    await page.goto('/blog/openai-workspace-agents-chatgpt');
    const rp = page.locator('#reading-progress');
    const width = await rp.evaluate(el => el.style.width);
    expect(width).toBe('0%');
  });

  test('width increases after scrolling', async ({ page }) => {
    await page.goto('/blog/openai-workspace-agents-chatgpt');
    const rp = page.locator('#reading-progress');
    const widthBefore = await rp.evaluate(el => el.style.width);
    expect(widthBefore).toBe('0%');

    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight / 2));
    await page.waitForTimeout(150);

    const widthAfter = await rp.evaluate(el => el.style.width);
    expect(parseFloat(widthAfter)).toBeGreaterThan(0);
  });

  test('is absent on non-article pages', async ({ page }) => {
    await page.goto('/');
    const rp = page.locator('#reading-progress');
    await expect(rp).toHaveCount(0);
  });
});

test.describe('RSS feed', () => {
  test('RSS feed is accessible and valid XML', async ({ request }) => {
    const response = await request.get('/rss.xml');
    expect(response.ok()).toBeTruthy();
    expect(response.headers()['content-type']).toContain('application/xml');

    const body = await response.text();
    expect(body).toContain('<?xml version="1.0"');
    expect(body).toContain('<rss version="2.0">');
    expect(body).toContain('<channel>');
    expect(body).toContain('<title>Agent Economy</title>');
  });

  test('RSS contains posts', async ({ request }) => {
    const response = await request.get('/rss.xml');
    const body = await response.text();

    expect(body).toContain('Agent Economy');
    expect(body).toMatch(/<item>/g);
    expect((body.match(/<item>/g) || []).length).toBeGreaterThan(40);
  });

  test('English RSS feed exists', async ({ request }) => {
    const response = await request.get('/en/rss.xml');
    expect(response.ok()).toBeTruthy();
    expect(response.headers()['content-type']).toContain('application/xml');

    const body = await response.text();
    expect(body).toContain('<?xml version="1.0"');
    expect(body).toContain('<rss version="2.0">');
    expect(body).toContain('<title>Agent Economy</title>');
    expect(body).toMatch(/<item>/g);
    expect((body.match(/<item>/g) || []).length).toBeGreaterThan(40);
  });
});

test.describe('Language switching', () => {
  test('Chinese site is at root', async ({ page }) => {
    await page.goto('/');
    const html = await page.evaluate(() => document.documentElement.lang);
    expect(html).toBe('zh');
  });

  test('English site is at /en/', async ({ page }) => {
    await page.goto('/en/');
    const html = await page.evaluate(() => document.documentElement.lang);
    expect(html).toBe('en');
  });

  test('language switch link navigates to other locale', async ({ page }) => {
    await page.goto('/');
    const switchLink = page.locator('.lang-switch');
    await expect(switchLink).toBeVisible();
    await expect(switchLink).toHaveText('EN');

    await switchLink.click();
    await page.waitForLoadState('networkidle');
    expect(page.url()).toContain('/en/');
  });

  test('English post cards and archive links stay under /en', async ({ page }) => {
    await page.goto('/en/');

    const firstPost = page.locator('.post-title a').first();
    await expect(firstPost).toHaveAttribute('href', /^\/en\/blog\//);

    const archiveLink = page.locator('.view-all-btn');
    await expect(archiveLink).toHaveAttribute('href', '/en/archive');
  });
});

test.describe('Category filtering', () => {
  test('English All filter restores visible posts', async ({ page }) => {
    await page.goto('/en/');

    const initialVisible = await page.locator('.post-card:visible').count();
    expect(initialVisible).toBeGreaterThan(0);

    await page.locator('#category-filter .filter-pill', { hasText: 'AI Models' }).click();
    const filteredVisible = await page.locator('.post-card:visible').count();
    expect(filteredVisible).toBeLessThanOrEqual(initialVisible);

    await page.locator('#category-filter .filter-pill', { hasText: 'All' }).click();
    await expect(page.locator('.post-card:visible')).toHaveCount(initialVisible);
  });
});
