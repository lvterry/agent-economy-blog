import { test, expect } from '@playwright/test';

test.describe('Topic pages', () => {
  test('Chinese topic index renders topic cards', async ({ page }) => {
    await page.goto('/topics');

    await expect(page.locator('.topics-title')).toHaveText('主题');
    await expect(page.locator('.topic-card')).toHaveCount(7);
    await expect(page.locator('.topic-card[href="/topics/ai-agents"]')).toBeVisible();
  });

  test('English topic index renders localized topic cards', async ({ page }) => {
    await page.goto('/en/topics');

    await expect(page.locator('.topics-title')).toHaveText('Topics');
    await expect(page.locator('.topic-card')).toHaveCount(7);
    await expect(page.locator('.topic-card[href="/en/topics/ai-agents"]')).toBeVisible();
  });

  test('Chinese AI agents topic renders posts and localized links', async ({ page }) => {
    await page.goto('/topics/ai-agents');

    await expect(page.locator('.topic-title')).toHaveText('AI 智能体');
    await expect(page.locator('.topic-stats a[href="/topics/ai-agents/rss.xml"]')).toBeVisible();
    await expect(page.locator('.post-card')).not.toHaveCount(0);
    await expect(page.locator('.post-title a').first()).toHaveAttribute('href', /^\/blog\//);
  });

  test('English AI agents topic renders posts and localized links', async ({ page }) => {
    await page.goto('/en/topics/ai-agents');

    await expect(page.locator('.topic-title')).toHaveText('AI Agents');
    await expect(page.locator('.topic-stats a[href="/en/topics/ai-agents/rss.xml"]')).toBeVisible();
    await expect(page.locator('.post-card')).not.toHaveCount(0);
    await expect(page.locator('.post-title a').first()).toHaveAttribute('href', /^\/en\/blog\//);
  });

  test('post category badges link to topic pages', async ({ page }) => {
    await page.goto('/');

    const firstBadge = page.locator('.post-category').first();
    await expect(firstBadge).toHaveAttribute('href', /^\/topics\//);
  });

  test('category filter pills expose topic URLs without replacing filtering', async ({ page }) => {
    await page.goto('/');

    const aiAgentsPill = page.locator('#category-filter .filter-pill', { hasText: 'AI 智能体' });
    await expect(aiAgentsPill).toHaveAttribute('data-topic-url', '/topics/ai-agents');

    const initialVisible = await page.locator('.post-card:visible').count();
    await aiAgentsPill.click();
    const filteredVisible = await page.locator('.post-card:visible').count();
    expect(filteredVisible).toBeGreaterThan(0);
    expect(filteredVisible).toBeLessThanOrEqual(initialVisible);
  });

  test('unknown topic slugs return 404', async ({ request }) => {
    const response = await request.get('/topics/not-a-topic');
    expect(response.status()).toBe(404);
  });
});

test.describe('Topic RSS feeds', () => {
  test('Chinese topic RSS is valid XML and topic filtered', async ({ request }) => {
    const response = await request.get('/topics/ai-agents/rss.xml');
    expect(response.ok()).toBeTruthy();
    expect(response.headers()['content-type']).toContain('application/xml');

    const body = await response.text();
    expect(body).toContain('<?xml version="1.0"');
    expect(body).toContain('<rss version="2.0">');
    expect(body).toContain('<title>Agent Economy - AI 智能体</title>');
    expect(body).toMatch(/<item>/);
  });

  test('English topic RSS is valid XML and uses English links', async ({ request }) => {
    const response = await request.get('/en/topics/ai-agents/rss.xml');
    expect(response.ok()).toBeTruthy();
    expect(response.headers()['content-type']).toContain('application/xml');

    const body = await response.text();
    expect(body).toContain('<?xml version="1.0"');
    expect(body).toContain('<rss version="2.0">');
    expect(body).toContain('<title>Agent Economy - AI Agents</title>');
    expect(body).toContain('/en/blog/');
  });
});
