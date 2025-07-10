const {test, expect} =require ('@playwright/test')

test ('Multi Select Animals', async ({page})=>{



await page.goto ('https://testautomationpractice.blogspot.com/')

await page.selectOption ('#animals',  ['cat','Deer' , 'Dog', 'Zebra'])

const options = await page.$$ ('#animals option')

console.log ("No of Animals selected: ", options.length)
await page.waitForTimeout (5000);

})