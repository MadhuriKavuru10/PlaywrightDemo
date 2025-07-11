const {test, expect} =require ('@playwright/test')

test ("Verify file upload", async({page})=>{

    await page.goto ('https://the-internet.herokuapp.com/upload')

    //await page.click('#file-upload');

    await page.locator ("#file-upload").setInputFiles ("C:\\Users\\skavu\\Downloads\\MKtest.txt");

    await page.locator ("#file-submit").click ()

    expect (await page.locator("//h3")).toHaveText ("File Uploaded!")

    await page.waitForTimeout (3000)


})