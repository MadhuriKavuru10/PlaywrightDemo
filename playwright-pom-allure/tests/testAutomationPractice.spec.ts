
import { test, expect } from '@playwright/test';
import { TestAutomationPage } from '../pages/TestAutomationPage';

test('Automate https://testautomationpractice.blogspot.com/', async ({ page }) => {
  const automationPage = new TestAutomationPage(page);

  await page.goto('https://testautomationpractice.blogspot.com/');
  await automationPage.fillForm();
  await automationPage.handleAlert();
  await automationPage.interactWithIframe();

  // Assertion example
  await expect(page.locator('input[name="firstname"]')).toHaveValue('John');

  // Screenshot
  await page.screenshot({ path: 'screenshots/final-form.png' });

  // Optional: wait for observation
  await page.waitForTimeout(2000);
});
