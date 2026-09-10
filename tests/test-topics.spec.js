import { test, expect } from '@playwright/test';

test.describe('Topic index', () => {
  test('renders one bubble per topic, linked to its page', async ({ page }) => {
    await page.goto('/topics');

    await expect(page.locator('.bubble')).toHaveCount(7);
    await expect(page.locator('.bubble[href="/topics/ai-infra"]')).toBeVisible();

    const agentsBubble = page.locator('.bubble[href="/topics/ai-agents"]');
    await expect(agentsBubble).toBeVisible();
    await expect(agentsBubble.locator('.bubble-label')).toHaveText('AI 智能体');
  });

  test('mirrors the bubbles in a text fallback list', async ({ page }) => {
    await page.goto('/topics');

    const fallbackLinks = page.locator('.topics-fallback a');
    await expect(fallbackLinks).toHaveCount(7);
    await expect(fallbackLinks.filter({ hasText: 'AI 智能体' })).toHaveAttribute('href', '/topics/ai-agents');
  });
});

test.describe('Topic page', () => {
  test('renders the topic title and its posts', async ({ page }) => {
    await page.goto('/topics/ai-agents');

    await expect(page.locator('.topic-title')).toHaveText('AI 智能体');
    await expect(page.locator('.post-card')).not.toHaveCount(0);
    await expect(page.locator('.post-title a').first()).toHaveAttribute('href', /^\/blog\//);
  });

  test('post category badges link to topic pages', async ({ page }) => {
    await page.goto('/topics/ai-agents');

    const firstBadge = page.locator('.post-category').first();
    await expect(firstBadge).toHaveAttribute('href', /^\/topics\//);
  });

  test('unknown topic slugs return 404', async ({ request }) => {
    const response = await request.get('/topics/not-a-topic');
    expect(response.status()).toBe(404);
  });
});

test.describe('Topic RSS feeds', () => {
  test('topic feed is valid XML and filtered to the topic', async ({ request }) => {
    const response = await request.get('/topics/ai-agents/rss.xml');
    expect(response.ok()).toBeTruthy();
    expect(response.headers()['content-type']).toContain('application/xml');

    const body = await response.text();
    expect(body).toContain('<?xml version="1.0"');
    expect(body).toContain('<rss version="2.0">');
    expect(body).toContain('<title>Agent Economy - AI 智能体</title>');
    expect(body).toMatch(/<item>/);
    expect(body).toContain('<link>https://agenteconomy.cn/blog/');
  });

  test('topic feed carries fewer posts than the full feed', async ({ request }) => {
    const [topicFeed, fullFeed] = await Promise.all([
      request.get('/topics/ai-agents/rss.xml'),
      request.get('/rss.xml'),
    ]);

    const countItems = (body) => (body.match(/<item>/g) || []).length;

    const topicCount = countItems(await topicFeed.text());
    const fullCount = countItems(await fullFeed.text());

    expect(topicCount).toBeGreaterThan(0);
    expect(topicCount).toBeLessThan(fullCount);
  });
});
