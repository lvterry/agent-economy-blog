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

  test('RSS contains all posts from data', async ({ request }) => {
    const response = await request.get('/rss.xml');
    const body = await response.text();

    expect(body).toContain('Google launches TorchTPU');
    expect(body).toContain('Anthropic Introduces Model Context Protocol');
    expect(body).toContain('/blog/anthropic-model-context-protocol');
    expect(body).toContain('Agent Economy');
    expect(body).toMatch(/<item>/g);
    expect((body.match(/<item>/g) || []).length).toBeGreaterThan(50);
  });

  test('RSS items have bilingual content', async ({ request }) => {
    const response = await request.get('/rss.xml');
    const body = await response.text();

    expect(body).toContain('All your agents are going async');
    expect(body).toContain('AI Agents 全面走向异步化');
    expect(body).toContain('OpenAI launches GPT-5.5');
    expect(body).toContain('OpenAI 发布 GPT-5.5');
  });
});
