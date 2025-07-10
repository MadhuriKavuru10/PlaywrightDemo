const {test, expect} = require ('@playwright/test')

test ('Select a Country', async ({page})=>{

await page.goto ('https://testautomationpractice.blogspot.com/')

const Selected = await page.selectOption ('#country', 'India')

const option = await page.$$ ('#country option')
//const options = await page.$$ ('#animals option')

console.log ('Country Selected is: ', Selected );

//console.log ('Page URL is: ', PageURL);

 await page.waitForTimeout(7000);


})