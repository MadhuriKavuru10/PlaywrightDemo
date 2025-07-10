const { test, expect } = require('@playwright/test');

test('Validate first 100 articles are sorted from newest to oldest', async ({ page }) => {
  await page.goto('https://news.ycombinator.com/newest');

  // Extract up to 100 timestamps from the first page
  const times = await page.$$eval('.age > a', links =>
    links.map(link => new Date(link.title || link.getAttribute('title')))
  );

  // Ensure we have at least 100 entries
  expect(times.length).toBeGreaterThanOrEqual(100);

  const first100 = times.slice(0, 100);
  const isSorted = first100.every((t, i, arr) => i === 0 || arr[i - 1] >= t);

  expect(isSorted).toBe(true);
});