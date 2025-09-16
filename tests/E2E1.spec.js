
const { test, expect } = require('@playwright/test');     
const { emit } = require('process');
const { escape } = require('querystring');
  
// Rewrite E2E
     
    test('@Web Client App login', async ({ page }) => {
 
       const productName = 'ZARA COAT 3';   
       const products = page.locator(".card-body");
       const username = "anshika@gmail.com";
       const password = "Iamking@000";
          

       await page.goto("https://rahulshettyacademy.com/client");
       await page.getByPlaceholder("email@example.com").fill(username);
       await page.getByPlaceholder("enter your passsword").fill(password);
       await page.getByRole('button', {name: "Login"}).click();   

       await page.waitForLoadState('networkidle');   
       await page.locator(".card-body b").first().waitFor();
     
      await page.locator(".card-body").filter({ hasText: productName }).getByRole('button', { name: 'Add To Cart' }).click();
     

      await page.getByRole("listitem").getByRole('button', {name: "Cart"}).click();  

      await page.locator("div li").first().waitFor();

      await expect(page.getByText("ZARA COAT 3")).toBeVisible();

      await page.getByRole("button", {name: "Checkout"}).click();

      await page.getByPlaceholder("Select Country").pressSequentially("ind", { delay: 100 });
      
      await page.getByRole("button", {name: "india"}).nth(1).click();

      await page.getByText("PLACE ORDER").click();

      await expect(page.getByText("Thankyou for the order. ")).toBeVisible(); 
            
      const orderId = await page.locator(".em-spacer-1 .ng-star-inserted").textContent();
      console.log(orderId);

      await page.locator("button[routerlink*='myorders']").click();    
      await page.locator("tbody").waitFor(); 
      const rows = page.locator("tbody tr");
      for (let i = 0; i < await rows.count(); ++i) {
        const rowOrderId = await rows.nth(i).locator("th").textContent();
        if (orderId.includes(rowOrderId)) {
          await rows.nth(i).locator("button").first().click();
          break;
        }
      }      
      const orderIdDetails = await page.locator(".col-text").textContent();
      expect(orderId.includes(orderIdDetails)).toBeTruthy();
      console.log(orderIdDetails);

    })
