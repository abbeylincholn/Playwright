// Login UI -> .json
//test, cart, order, order details, order history


const { test, expect } = require('@playwright/test');     
let webContext;

test.beforeAll(async ({ browser }) => {
  const context = await browser.newContext();
  const page = await context.newPage();
  try {
    await page.goto('https://rahulshettyacademy.com/client');
    await page.locator('#userEmail').fill('anshika@gmail.com');
    await page.locator('#userPassword').fill('Iamking@000');
    await page.locator("[value='Login']").click();
    await page.waitForLoadState('networkidle');
    await context.storageState({ path: 'state.json' });
    webContext = await browser.newContext({ storageState: 'state.json' });



  } finally {
    await context.close();
  }
});



test('Client App login', async () => {
 
       const productName = 'ZARA COAT 3';   
       const username = "anshika@gmail.com";

       const page = await webContext.newPage(); 
       await page.goto('https://rahulshettyacademy.com/client');
       const products = page.locator(".card-body");             
       await page.locator(".card-body b").first().waitFor();
       const titles = await page.locator(".card-body b").allTextContents();
      // console.log(titles); 
     
       const count = await products.count();
       for (let i = 0; i < count; ++i) {
        
         if (await products.nth(i).locator("b").textContent() === productName) {
            await products.nth(i).locator("text= Add To Cart").click();
          /*  const text = await products.nth(i).locator("text= Add To Cart").textContent();
            console.log(text); */
           break;
         }
       }
      
      
        
      await page.locator("[routerlink*='cart']").click();
      await page.locator("div li").first().waitFor();
      const bool = await page.locator("h3:has-text('Zara Coat 3')").isVisible();
      expect(bool).toBeTruthy();

      await page.locator("[type*='button']").nth(1).click();
      await page.locator("[placeholder*='Country']").pressSequentially("ind", { delay: 100 });
      const dropdown = page.locator(".ta-results");
      await dropdown.waitFor();
      const optionsCount = await dropdown.locator("button").count();
      for (let i = 0; i < optionsCount; ++i) {
        const text = await dropdown.locator("button").nth(i).textContent();
        if (text === " India") {
          await dropdown.locator("button").nth(i).click();
          break;
        } 
      }

      //await expect(page.locator(".user__name [type='text']").first()).toHaveText(email);  //or
      await expect(page.locator(".user__name label")).toHaveText(username);
      await page.locator(".action__submit").click();
      await expect(page.locator(".hero-primary")).toHaveText(" Thankyou for the order. ");
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

      await page.pause();
    })


    

    test('@API Test Case 2', async () => {
 
       const productName = 'ZARA COAT 3';   
       const username = "anshika@gmail.com";

       const page = await webContext.newPage(); 
       await page.goto('https://rahulshettyacademy.com/client');
       const products = page.locator(".card-body");             
       await page.locator(".card-body b").first().waitFor();
       const titles = await page.locator(".card-body b").allTextContents();
       console.log(titles); 
       await page.pause();

    })