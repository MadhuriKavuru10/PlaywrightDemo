const {test, expect}=require('@playwright/test')

test("Verify JS Confirm", async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/javascript_alerts');

  //dialog event listener
  page.on('dialog', async (dialog) => {
    expect(dialog.type()).toBe("confirm");
    expect(dialog.message()).toContain("I am a JS Confirm");
    await dialog.accept(); // Change to .accept() if you want to accept
  });

  //await page.click("text=Click for JS Confirm");

  const result = await page.locator("#result").textContent();
  expect(result).toContain("You clicked: Ok"); // or "You clicked: Ok" if accepted
  });