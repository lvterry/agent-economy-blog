import { test, expect } from '@playwright/test';

test.describe('Search functionality', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await page.waitForSelector('#header-search-btn');
  });

  test('search button should be visible in header', async ({ page }) => {
    const searchBtn = page.locator('#header-search-btn');
    await expect(searchBtn).toBeVisible();
  });

  test('clicking search button opens popup', async ({ page }) => {
    const searchBtn = page.locator('#header-search-btn');
    const overlay = page.locator('#search-popup-overlay');

    await expect(overlay).not.toBeVisible();
    await searchBtn.click();
    await expect(overlay).toBeVisible();

    const searchInput = page.locator('#search-input');
    await expect(searchInput).toBeVisible();
    await expect(searchInput).toHaveAttribute('placeholder', '搜索文章...');
  });

  test('Ctrl+K opens popup and focuses input', async ({ page }) => {
    const overlay = page.locator('#search-popup-overlay');
    await expect(overlay).not.toBeVisible();

    await page.keyboard.press('Control+k');
    await expect(overlay).toBeVisible();

    const searchInput = page.locator('#search-input');
    const activeId = await page.evaluate(() => document.activeElement?.id);
    expect(activeId).toBe('search-input');
  });

  test('search should find articles by title', async ({ page }) => {
    await page.locator('#header-search-btn').click();
    const searchInput = page.locator('#search-input');

    await searchInput.fill('OpenAI');
    await page.waitForTimeout(400);

    const resultItems = page.locator('.search-result-item');
    const count = await resultItems.count();
    expect(count).toBeGreaterThan(0);

    const firstTitle = await resultItems.first().locator('.search-result-title').textContent();
    expect(firstTitle).toMatch(/OpenAI/i);
  });

  test('search should find articles by keyword', async ({ page }) => {
    await page.locator('#header-search-btn').click();
    const searchInput = page.locator('#search-input');

    await searchInput.fill('Claude');
    await page.waitForTimeout(400);

    const resultItems = page.locator('.search-result-item');
    const count = await resultItems.count();
    expect(count).toBeGreaterThan(0);
  });

  test('clear button should reset search', async ({ page }) => {
    await page.locator('#header-search-btn').click();
    const searchInput = page.locator('#search-input');

    await searchInput.fill('Claude');
    await page.waitForTimeout(300);

    const clearBtn = page.locator('#search-clear');
    await clearBtn.click();
    await page.waitForTimeout(300);

    await expect(searchInput).toHaveValue('');
    await expect(page.locator('#search-results')).not.toBeVisible();
  });

  test('search with no results should show empty message', async ({ page }) => {
    await page.locator('#header-search-btn').click();
    const searchInput = page.locator('#search-input');

    await searchInput.fill('xyzabc123nonexistent');
    await page.waitForTimeout(600);

    const noResults = page.locator('.search-no-results');
    await expect(noResults).toBeVisible();
  });

  test('Escape closes the popup', async ({ page }) => {
    await page.locator('#header-search-btn').click();
    const overlay = page.locator('#search-popup-overlay');
    await expect(overlay).toBeVisible();

    await page.keyboard.press('Escape');
    await page.waitForTimeout(300);
    await expect(overlay).not.toBeVisible();
  });

  test('clicking backdrop closes the popup', async ({ page }) => {
    await page.locator('#header-search-btn').click();
    const overlay = page.locator('#search-popup-overlay');
    await expect(overlay).toBeVisible();

    await page.locator('.search-popup-backdrop').click();
    await page.waitForTimeout(300);
    await expect(overlay).not.toBeVisible();
  });

  test('search should be case insensitive', async ({ page }) => {
    await page.locator('#header-search-btn').click();
    const searchInput = page.locator('#search-input');

    await searchInput.fill('openai');
    await page.waitForTimeout(400);

    const resultItems = page.locator('.search-result-item');
    const count = await resultItems.count();
    expect(count).toBeGreaterThan(0);
  });

  test('search results should display stats when articles found', async ({ page }) => {
    await page.locator('#header-search-btn').click();
    const searchInput = page.locator('#search-input');

    await searchInput.fill('AI');
    await page.waitForTimeout(400);

    const stats = page.locator('.search-popup-stats .stats-text');
    const statsText = await stats.textContent();
    expect(statsText).toMatch(/\d+/);
  });

  test('search results should have proper styling with date and source', async ({ page }) => {
    await page.locator('#header-search-btn').click();
    const searchInput = page.locator('#search-input');

    await searchInput.fill('OpenAI');
    await page.waitForTimeout(400);

    const firstResult = page.locator('.search-result-item').first();
    await expect(firstResult.locator('.search-result-title')).toBeVisible();
    await expect(firstResult.locator('.search-result-excerpt')).toBeVisible();
    await expect(firstResult.locator('.search-result-date')).toBeVisible();
    await expect(firstResult.locator('.search-result-source')).toBeVisible();
  });

  test('search highlights matching text', async ({ page }) => {
    await page.locator('#header-search-btn').click();
    const searchInput = page.locator('#search-input');

    await searchInput.fill('OpenAI');
    await page.waitForTimeout(400);

    const highlights = page.locator('.search-highlight');
    const count = await highlights.count();
    expect(count).toBeGreaterThan(0);
  });

  test('search works on blog index page', async ({ page }) => {
    await page.goto('/blog');
    await page.waitForSelector('#header-search-btn');

    const searchBtn = page.locator('#header-search-btn');
    await searchBtn.click();

    const searchInput = page.locator('#search-input');
    await expect(searchInput).toBeVisible();

    await searchInput.fill('Agent');
    await page.waitForTimeout(400);

    const resultItems = page.locator('.search-result-item');
    const count = await resultItems.count();
    expect(count).toBeGreaterThan(0);
  });

  test('search works on about page', async ({ page }) => {
    await page.goto('/about');
    await page.waitForSelector('#header-search-btn');

    const searchBtn = page.locator('#header-search-btn');
    await searchBtn.click();

    const searchInput = page.locator('#search-input');
    await expect(searchInput).toBeVisible();

    await searchInput.fill('AI');
    await page.waitForTimeout(400);

    const resultItems = page.locator('.search-result-item');
    const count = await resultItems.count();
    expect(count).toBeGreaterThan(0);
  });

  test('English search uses English placeholder', async ({ page }) => {
    await page.goto('/en/');
    await page.waitForSelector('#header-search-btn');

    await page.locator('#header-search-btn').click();
    const searchInput = page.locator('#search-input');
    await expect(searchInput).toHaveAttribute('placeholder', 'Search articles...');
  });
});

test.describe('Search popup responsive design', () => {
  test('popup adapts to mobile viewport', async ({ browser }) => {
    const context = await browser.newContext({
      viewport: { width: 375, height: 667 },
      isMobile: true,
    });
    const page = await context.newPage();
    await page.goto('/');
    await page.waitForSelector('#header-search-btn');

    await page.locator('#header-search-btn').click();
    const overlay = page.locator('#search-popup-overlay');
    await expect(overlay).toBeVisible();

    const panel = page.locator('.search-popup-panel');
    const panelBox = await panel.boundingBox();
    expect(panelBox).not.toBeNull();
    if (panelBox) {
      expect(panelBox.width).toBeLessThanOrEqual(375);
    }

    const searchInput = page.locator('#search-input');
    await searchInput.fill('AI');
    await page.waitForTimeout(400);

    const resultItems = page.locator('.search-result-item');
    const count = await resultItems.count();
    expect(count).toBeGreaterThan(0);

    await context.close();
  });
});
