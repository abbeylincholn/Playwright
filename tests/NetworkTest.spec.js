
const { test, expect, request } = require('@playwright/test');     
const { APIUtils } = require('./utils/APIUtils');


const loginPayload = {userEmail: "anshika@gmail.com", userPassword: "Iamking@000"};
const orderPayload = {orders: [{country: "Cuba", productOrderedId: "68b59b5cf669d6cb0aabdf72"}]};
const fakePayLoadOrders = {data: [], message: "No Orders"};

let response;

test.beforeAll( async () => {
    // API context
   const apiContext =  await request.newContext();
   const apiUtils = new APIUtils(apiContext, loginPayload);
   response = await apiUtils.createOrder(orderPayload);
})

  
     
test('Place An Order', async ({ page }) => {
 

      await page.addInitScript( value => {
        window.localStorage.setItem('token', value);
       }, response.token);   // this function and the parameter 'value' are passed to the browser context, this will bypass the login page,  also to order summary page               
      
      await page.goto("https://rahulshettyacademy.com/client");   
      await page.route("https://rahulshettyacademy.com/api/ecom/order/get-orders-for-customer/*", 
            async route => { // mock the response   // intercepting the response - API response -> { playwright fake response } -> browser -> render data on frontend          
              const response = await page.request.fetch(route.request());
              let body = JSON.stringify(fakePayLoadOrders);
              route.fulfill({
                response,
                body,
              });
            }
          );

      await page.locator("button[routerlink*='myorders']").click();    
      await page.waitForResponse("https://rahulshettyacademy.com/api/ecom/order/get-orders-for-customer/*")
    
      console.log(await page.locator(".mt-4").textContent());
   
    })

