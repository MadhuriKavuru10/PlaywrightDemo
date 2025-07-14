const { test, expect } = require("@playwright/test");
const LoginPage = require("C:/Users/skavu/OneDrive - University of Maryland/Desktop/PlayWrightYouTube/playwright-pom-allure/pages/POM/loginpage.js");
const HomePage =  require ("C:/Users/skavu/OneDrive - University of Maryland/Desktop/PlayWrightYouTube/playwright-pom-allure/pages/POM/homepage.js");
//const HomePage = require("../pages/POM/homepage");

test('Login To Application using POM', async ({ page }) => 
    
    {
  await page.goto('https://freelance-learn-automation.vercel.app/login');

  const loginPage = new LoginPage(page); //reusble class

   await loginPage.loginToApplication (); //calling 'LoginPage' re-usable js script

   const homePage =new HomePage(page); //calling 'HomePage' re-usable js script

   await homePage.verifyCart () //calling 'verifyCart' method from HomePage
   
   
   await homePage.logoutFromApplication() //calling 'logoutFromApplication' method from HomePage

    await expect(page).not.toHaveURL(/.*login/, { timeout: 5000 }); // confirms you navigated away 
    await page.screenshot({ path: 'after-login.png', fullPage: true }); //assert to make sure back to login screen

    await loginPage.verifySignIn () //ensure we see 'SignIn' text on login page

     

}
);