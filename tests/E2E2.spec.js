const { test, expect } = require('@playwright/test');

test('@Web Client App login', async ({ page }) => {
  const productName = 'ZARA COAT 3';

  await page.goto('https://rahulshettyacademy.com/client');
  await page.fill('#userEmail', 'anshika@gmail.com');
  await page.fill('#userPassword', 'Iamking@000');
  await page.click("[value='Login']");

  // Wait for product grid
  await page.waitForLoadState('networkidle');

  const products = page.locator('.card-body');
  const targetCard = products.filter({ hasText: productName });

  // ✅ Click Add To Cart
  await targetCard.getByRole('button', { name: /add to cart/i }).click();

  // ✅ Wait for toast to appear then disappear
  const toast = page.locator('#toast-container');
  await toast.waitFor({ state: 'visible' });
  await toast.waitFor({ state: 'hidden' });
   console.log(await toast.textContent()); 

  // ✅ Wait for spinner to disappear
  const spinner = page.locator('.ng-animating');
  await spinner.waitFor({ state: 'hidden' });   // or 'detached' if removed from DOM


  // ✅ Continue to cart
  await page.click("[routerlink*='cart']");
  await expect(page.locator('.cartSection h3')).toContainText(productName);
});
