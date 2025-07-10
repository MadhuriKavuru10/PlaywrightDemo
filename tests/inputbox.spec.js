  const {test, expect} = require ('@playwright/test')

  test ('handle inputbox', async ({page})=>{

     page.goto ('https://testautomationpractice.blogspot.com/')

     //inputbox -firstname

     await expect (await page.locator ("//input [@id = 'name']")).toBeVisible ();
     await expect (await page.locator ("//input [@id = 'name']")).toBeEmpty ();
     await expect (await page.locator ("//input [@id = 'name']")).toBeEnabled ();

     await page.locator ("//input [@id = 'name']").fill ("Madhu")

     //page.fill ("//input [@id = 'name']").fill ("Madhu")


     await page.waitForTimeout (10000);
  })