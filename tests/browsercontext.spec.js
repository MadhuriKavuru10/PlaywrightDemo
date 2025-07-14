const { test, expect, chromium } = require("@playwright/test");

test("Verify Application Title and Browser Contexts", async ()  => {
  // Launch browser manually since 'browser' is not part of test context
  const browser = await chromium.launch({ headless: false });

  const context = await browser.newContext();
  const page = await context.newPage();

  // First tab
  await page.goto("https://www.google.com/");
  const url = await page.url();
  const title = await page.title();
  console.log("Page 1 - URL: " + url);
  console.log("Page 1 - Title: " + title);
  await expect(page).toHaveTitle("Google");

  // Second context and tab
  const context2 = await browser.newContext();
  const page2 = await context2.newPage();
  await page2.goto("https://www.google.com/");
  const url2 = await page2.url();
  const title2 = await page2.title();
  console.log("Page 2 - URL: " + url2);
  console.log("Page 2 - Title: " + title2);
  await expect(page2).toHaveTitle("Google");

  // New tab in context2
  const newTab = await context2.newPage();
  await newTab.goto("https://www.google.com/");
  const url3 = await newTab.url();
  const title3 = await newTab.title();
  console.log("Page 3 (New Tab) - URL: " + url3);
  console.log("Page 3 (New Tab) - Title: " + title3);
  await expect(newTab).toHaveTitle("Google");

  await browser.close();
});