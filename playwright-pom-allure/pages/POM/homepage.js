const {expect}= require('@playwright/test')

class HomePage
{

    constructor (page){

        this.page =page
        this.cartoption = "//button[normalize-space()='Cart']"
        this.menu = "//img[@alt='menu']"
        this.logoutoption ="//button[normalize-space()='Sign out']"

    }

 async logoutFromApplication ()

 {
  await this.page.click (this.menu)
  await this.page.click (this.logoutoption)

 }

 async verifyCart ()
 {
   await expect(this.page.locator(this.cartoption)).toBeVisible ()

 }

}

module.exports = HomePage;