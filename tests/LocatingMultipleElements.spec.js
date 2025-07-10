
//Imports the Playwright test framework's test and expect utilities.
const { test, expect } = require('@playwright/test');

//Defines a test case named 'LocateMultipleElements'. The page object represents a browser tab.
//Navigates to the DemoBlaze homepage.
test('LocateMultipleElements', async ({ page }) => {
  await page.goto('https://www.demoblaze.com/index.html');

  // Wait for the product titles to be loaded dynamically
  //Waits until the product title links are present in the DOM (up to 10 seconds).
  await page.waitForSelector('#tbodyid .card-title a', { timeout: 10000 });

  // Get all product elements using CSS selector
  //Uses $$ (alias for page.querySelectorAll) to get all matching elements that represent product names.
  const products = await page.$$('#tbodyid .card-title a');
 //Logs how many products were found.
  console.log(`Found ${products.length} products:`);

//Iterates over all found product elements.
//Extracts and logs the trimmed text content (i.e., product name) of each one.
  for (const product of products) {
    const productName = await product.textContent();
    console.log(productName.trim());
  }
});