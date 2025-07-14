const {expect} =require('@playwright/test')

class LoginPage
{

    constructor (page)
    {

        this.page=page

        this.username ="#email1"
        this.header ="//h2[normalize-space()='Sign In']"
        this.password ="//input[@placeholder='Enter Password']"
        this.loginButton ="//button[text()='Sign in']"

    }
    async loginToApplication()

    {
      await this.page.fill (this.username, "madhurikavuru@gmail.com")

      await this.page.fill (this.password, "Sanjana21#")

      await this.page.click (this.loginButton)
      //await this.page.pause()

    }
  async verifySignIn () {

    await expect(this.page.locator (this.header)).toBeVisible ()
  }


}

module.exports =LoginPage;