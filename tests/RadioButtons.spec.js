const {test, expect}= require ('@playwright/test')

test ('handle radiobutton', async ({page})=>{

await page.goto ('https://testautomationpractice.blogspot.com/')

await page.locator ("//input[@value = 'female']").check ();

await expect (await page.locator ("//input[@value = 'female']")).toBeChecked ();
await expect (await page.locator ("//input[@value = 'female']").isChecked()).toBeTruthy ();

//await page.check ("//input[@value = 'female']").check ();

await expect (await page.locator ("//input[@value = 'male']").isChecked()).toBeFalsy;


   await page.waitForTimeout (10000);
}

)