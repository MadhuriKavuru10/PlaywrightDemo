/*
page.getByRole() to locate by explicit and implicit accessibility attributes.
page.getByText() to locate by text content.
page.getByLabel() to locate a form control by associated label's text.
page.getByPlaceholder() to locate an input by placeholder.
page.getByAltText() to locate an element, usually image, by its text alternative.
page.getByTitle() to locate an element by its title attribute.
page.getByTestId() to locate an element based on its data-testid attribute (other attributes can be configured).
*/

const {test, expect} = require ('@playwright/test')

test ('Built-inlocators', async ({page})=> {

    await page.goto ('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

//page.getByAltText() to locate an element, usually image, by its text alternative.
   const logo= await page.getByAltText ('company-branding')
   await expect.soft (logo).toBeVisible ();

   console.log (logo);
  // page.getByPlaceholder() to locate an input by placeholder.
      const placehold = await page.getByPlaceholder ('Username').fill ('Admin')
      const placeholdpw = await page.getByPlaceholder ('Password').fill ('admin123')
      
//page.getByRole() to locate by explicit and implicit accessibility attributes.
      await page.getByRole('button', { name: 'Login' }).click();
      //await page.waitForURL('**/dashboard'); // adjust if needed

  // Wait for navigation and locate the logged-in username
  const nameLocator = await page.locator('//p[@class="oxd-userdropdown-name"]');
  await expect.soft(nameLocator).toBeVisible();

  const name = await nameLocator.textContent();
  console.log(`Logged-in user: ${name}`);


}
)