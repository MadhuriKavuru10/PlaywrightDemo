
import { Page, Locator, FrameLocator } from '@playwright/test';

export class TestAutomationPage {
  readonly page: Page;
  readonly firstName: Locator;
  readonly lastName: Locator;
  readonly genderMale: Locator;
  readonly mondayCheckbox: Locator;
  readonly saturdayCheckbox: Locator;
  readonly countryDropdown: Locator;
  readonly colorsDropdown: Locator;
  readonly datePicker: Locator;
  readonly alertButton: Locator;
  readonly iframe: FrameLocator;

  constructor(page: Page) {
    this.page = page;
    this.firstName = page.locator('input[name="firstname"]');
    this.lastName = page.locator('input[name="lastname"]');
    this.genderMale = page.locator('input[value="male"]');
    this.mondayCheckbox = page.locator('input[value="monday"]');
    this.saturdayCheckbox = page.locator('input[value="saturday"]');
    this.countryDropdown = page.locator('#country');
    this.colorsDropdown = page.locator('#colors');
    this.datePicker = page.locator('#datepicker');
    this.alertButton = page.locator('button[onclick="myFunction()"]');
    this.iframe = page.frameLocator('iframe[name="frame-one1434677811"]');
  }

  async fillForm() {
    await this.firstName.fill('John');
    await this.lastName.fill('Doe');
    await this.genderMale.check();
    await this.mondayCheckbox.check();
    await this.saturdayCheckbox.check();
    await this.countryDropdown.selectOption('India');
    await this.colorsDropdown.selectOption(['Blue', 'Red', 'Yellow']);
    await this.datePicker.fill('06/30/2025');
  }

  async handleAlert() {
    this.page.once('dialog', async dialog => {
      console.log('Alert Message:', dialog.message());
      await dialog.accept();
    });
    await this.alertButton.click();
  }

  async interactWithIframe() {
    await this.iframe.locator('input[name="RESULT_TextField-1"]').fill('Iframe First Name');
    await this.iframe.locator('input[name="RESULT_TextField-2"]').fill('Iframe Last Name');
    await this.iframe.locator('input[name="RESULT_TextField-3"]').fill('1234567890');
    await this.iframe.locator('input[type="submit"]').click();
  }
}
