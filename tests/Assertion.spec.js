const {test, expect} =require ('@playwright/test')

test ('Assertions', async ({page})=>{

    await page.goto ('https://demo.nopcommerce.com/register')

   await expect (page).toHaveURL ('https://demo.nopcommerce.com/register')
   const maleRadioButton = await page.locator ('#gender-male')
   await maleRadioButton.click () //select radio button male
   await expect (maleRadioButton).toBeChecked

   //checkbox available

   const newsLetterCheckbox = await page.locator ('#Newsletter')
await expect (newsLetterCheckbox).toBeChecked ()


})