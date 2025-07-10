//const {test,expect} = require ('@playwright/test')
import {test,expect} from '@playwright/test'
test ('Locators', async ({page})=> {

   await page.goto ('https://www.demoblaze.com/index.html');

   //await page.locator ('id=login2').click () 

   await page.click ('id=login2')

   //provide usernames different methods

  // await page.locator ('#loginusername').fill ("Madhu")
  // await page.type ('#loginusername')
   await page.type ("input [id = 'loginusername']", 'Madhuk')

   await page.type ("input [id = 'loginpassword']", 'test123')

   // click on login

   await page.click ('//*[@id="logInModal"]/div/div/div[3]/button[2]')

  // Verify logout link is present
  const logoutlink = page.locator ('//*[@id="logout2"]')

  await expect (logoutlink).toBeVisible ();

 await  page.close()

}
)