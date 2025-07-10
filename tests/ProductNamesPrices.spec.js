const {test,expect} = require ('@playwright/test');

test ('Extract and Click Products', async({page})=> {

    await page.goto ('https://www.demoblaze.com/index.html');

    await page.waitForSelector('#tbodyid .card');

      // Get all product cards
  const productCards = await page.$$('#tbodyid .card');
   console.log(`Found ${productCards.length} products:\n`);

    for (const card of productCards) {
    const name = await card.$eval('.card-title a', el => el.textContent.trim());
    const price = await card.$eval('.card-block .card-text', el => el.textContent.trim());

    console.log(`Product: ${name} | Price: ${price}`);
    }
// Optional: click on the first product
  if (productCards.length > 0) {
    const firstProduct = await productCards[0].$('a');
    await firstProduct.click();
    await page.waitForLoadState('load');
    console.log('\nNavigated to the first product detail page.');
  
  }
  
}
);
