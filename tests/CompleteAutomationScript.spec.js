//Here’s a complete Playwright automation script for https://testautomationpractice.blogspot.com/, covering:

// Text inputs
// Radio buttons
// Checkboxes
// Dropdowns (single & multi-select)
// Alert handling
// Iframe interaction
// Form submission simulation

//✅ Playwright Automation Script

const { test, expect } = require('@playwright/test');

test('Complete automation on testautomationpractice.blogspot.com', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/');

  // 1. Text input
  await page.fill('input[name="firstname"]', 'John');
  await page.fill('input[name="lastname"]', 'Doe');

  // 2. Radio button (Gender)
  await page.check('input[value="male"]');

  // 3. Checkbox (Days of the week)
  await page.check('input[value="monday"]');
  await page.check('input[value="saturday"]');

  // 4. Single select dropdown (Country)
  await page.selectOption('#country', 'India');

  // 5. Multi-select dropdown (Colors)
  await page.selectOption('#colors', ['Blue', 'Red', 'Yellow']);

  // 6. Date picker
  await page.fill('#datepicker', '06/30/2025');

  // 7. Alert handling (Click alert button and accept alert)
  page.once('dialog', async dialog => {
    console.log('Alert message:', dialog.message());
    await dialog.accept();
  });
  await page.click('button[onclick="myFunction()"]');

  // 8. Iframe interaction
  const iframe = page.frameLocator('iframe[name="frame-one1434677811"]');
  await iframe.locator('input[name="RESULT_TextField-1"]').fill('Iframe First Name');
  await iframe.locator('input[name="RESULT_TextField-2"]').fill('Iframe Last Name');
  await iframe.locator('input[name="RESULT_TextField-3"]').fill('1234567890');
  await iframe.locator('input[type="submit"]').click();

  // 9. Take screenshot (optional)
  await page.screenshot({ path: 'form-filled.png' });

  // 10. Final wait (for observation if headed)
  await page.waitForTimeout(6000);
});
