const {test, expect} = require ('@playwright/test')

test ('Auto suggest dropdown', async ({page})=>{

await page.goto ('https://www.redbus.in')

// FROM City
const fromInput = page.locator('input#src, input[aria-label="Source"]');
await fromInput.click();
await fromInput.fill('Hyderabad');
await page.waitForSelector('.autoFill li');
await page.locator('.autoFill li:text("Hyderabad")').click();

// TO City
const toInput = page.locator('input#dest, input[aria-label="Destination"]');
await toInput.click();
await toInput.fill('Bangalore');
await page.waitForSelector('.autoFill li');
await page.locator('.autoFill li:text("Bangalore")').click();

})