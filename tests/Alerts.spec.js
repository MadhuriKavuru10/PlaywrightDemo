const { test, expect } = require('@playwright/test');

// JS Alert
test("Verify JS Alert", async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/javascript_alerts');

  // Listener must be added before the action
  page.on('dialog', async (dialog) => {
    expect(dialog.type()).toBe("alert");
    expect(dialog.message()).toContain("I am a JS Alert");
    await dialog.accept();
  });

  await page.click("text=Click for JS Alert");

  // Optional: verify result text
  const result = await page.locator("#result").textContent();
  expect(result).toContain("You successfully clicked an alert");
});

// JS Confirm
test("Verify JS Confirm", async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/javascript_alerts');

  page.on('dialog', async (dialog) => {
    expect(dialog.type()).toBe("confirm");
    expect(dialog.message()).toContain("I am a JS Confirm");
    await dialog.dismiss(); // Change to .accept() if you want to accept
  });

  await page.click("text=Click for JS Confirm");

  const result = await page.locator("#result").textContent();
  expect(result).toContain("You clicked: Cancel"); // or "You clicked: Ok" if accepted
});

// JS Prompt
test("Verify JS Prompt", async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/javascript_alerts');

  page.on('dialog', async (dialog) => {
    expect(dialog.type()).toBe("prompt");
    expect(dialog.message()).toContain("I am a JS prompt");
    await dialog.accept("Playwright Test");
  });

  await page.click("text=Click for JS Prompt");

  const result = await page.locator("#result").textContent();
  expect(result).toContain("You entered: Playwright Test");
});