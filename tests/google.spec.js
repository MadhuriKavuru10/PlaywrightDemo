const { test, expect } = require("@playwright/test")
test("Verify Application Title", async function ({ page, browser }) {
   await page.goto("https://www.google.com/")

   const url = await page.url()

   console.log("Title is " + url)

   const title = await page.title()

   console.log("Title is " + title)

   await expect(page).toHaveTitle("Google")

   // browser context

   const context2 = await browser.newContext();

   const page2 = await context2.newPage();

   await page2.goto("https://www.google.com/")

   const url2= await page2.url()

   console.log("Title is " + url)

   const title2 = await page2.title()

   console.log("Title is " + title)

   await expect(page2).toHaveTitle("Google")

   //new tab

    const newTab = await context2.newPage();

    const url3 = await newTab.url()

   console.log("Title is " + url3)

   const title3 = await newTab.title()

   console.log("Title is " + title)

   await expect(newTab).toHaveTitle("Google")
}) 