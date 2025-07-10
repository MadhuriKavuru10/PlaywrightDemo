import { test, expect } from '@playwright/test';

test('Locators', async ({ page }) => {
  await page.goto('https://demoblaze.com');

  // Open login modal
  await page.click('#login2');

  // Wait for modal
  await page.waitForSelector('#loginusername');

  // Fill credentials
  await page.fill('#loginusername', 'Madhuk');
  await page.fill('#loginpassword', 'test123');

  // Click login button
  await page.click('#logInModal .btn-primary');

  // Wait for user to be logged in (check welcome message)
  const userGreeting = await page.waitForSelector('#nameofuser', { timeout: 5000 });

  // Optional assertion
  //await expect(userGreeting).toBeVisible();
});