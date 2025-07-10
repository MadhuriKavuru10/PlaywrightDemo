//https://www.youtube.com/watch?v=ePy0Xl-JpRg&list=PLUDwpEzHYYLsw33jpra65LIvX1nKWpp7-&index=3

const {test, expect} = require ('@playwright/test');

test('Home Page', async({page})=>{
await page.goto ('https://www.demoblaze.com/index.html');

const PageTitle =page.title ()
console.log ('Page Title is: ', PageTitle);

await expect (page).toHaveTitle ('STORE');

const PageURL = page.url ();
console.log ('Page URL is: ', PageURL);

await expect (page).toHaveURL ('https://www.demoblaze.com/index.html')

await page.close();

}
)
