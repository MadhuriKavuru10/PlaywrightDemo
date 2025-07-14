const {test, expect} =require('@playwright/test')

test ('Verify Alert dialog box', async ({page})=> {

    await page.goto ('https://the-internet.herokuapp.com/javascript_alerts')

    page.on ('dialog', async (dialog)=>{
    expect  (dialog.type()).toBe ("alert");
    expect (dialog.message()).toContain ("I am a JS Alert");
    await dialog.accept ();

    });

await page.click ("text =Click for JS Alert");

const result = await page.locator ("#result").textContent ();
expect (result).toContain ("You successfully clicked an alert");

});