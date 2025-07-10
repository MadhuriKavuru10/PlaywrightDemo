//Imports test and expect from the Playwright Test framework.
const {test, expect} =require ('@playwright/test')

//Defines a test block called "Handle dropdowns" and injects the page object for browser interaction.
test ('Handle dropdowns', async ({page})=>{

    //Navigates to the test site that contains a sample form with a multi-select dropdown.
 await page.goto ('https://testautomationpractice.blogspot.com/')

 //Select multiple options selection with ID #colors
 //selectOption accepts an array of values (these must match the value or label of <option> elements).
 await page.selectOption ('#colors', ['Blue', 'Red', 'Yellow', 'White'])

 //assertions
 //const options = await page.locator ('#colors option')

//Grabs all <option> elements inside the #colors dropdown using $$ (querySelectorAll).
 const options = await page.$$ ('#colors option')

// await expect (options).toHaveCount (7);
//Logs the number of options found in the dropdown.
 console.log ("Number of options: ", options.length)
 //Adds a 5-second delay so you can visually verify the selections (useful during test debugging).
 await page.waitForTimeout (5000);

})