/** When to use the API (good):

Preconditions / data seeding: create an order, user, or session quickly so you can jump straight to the page you want to verify (e.g., Orders History).

Speed & stability: bypass slow/flaky UI steps (login, add-to-cart) when those steps are tested elsewhere.

Read-only UI checks: you just need to view/verify something in the UI (e.g., order appears in the list, details show the right country you sent in the payload).

Precise scenarios: you need a very specific backend state that’s tedious to build via clicks.

(That’s exactly what he demoed: log in via API → get token → create order via API with headers Authorization: Bearer <token> and Content-Type: application/json → store orderId → inject token into localStorage → open the app → go straight to My Orders and verify the order.)

When not to use the API:

You’re validating the UI flow itself: e.g., “Can a user create an order from the website?” Then you must click through login → add to cart → checkout in the browser.

Client-side behavior/validation: field errors, form logic, UX, accessibility, cross-browser quirks.

Critical path E2E: at least one UI test should cover the true end-to-end user journey without seeding, to catch wiring issues between pages.

Quick rule of thumb

Test objective = verify backend data shows correctly in the UI? Seed via API.

Test objective = verify the UI can create that data? Do it through the UI, no API shortcuts.
 **/

const { test, expect, request } = require('@playwright/test');     
const { log } = require('console');
const { emit } = require('process');


const loginPayload = {userEmail: "anshika@gmail.com", userPassword: "Iamking@000"};
const orderPayload = {orders: [{country: "Cuba", productOrderedId: "68b59b5cf669d6cb0aabdf72"}]};

let token;
let orderId;

test.beforeAll( async () => {

    // Login API call
   const apiContext =  await request.newContext();
   const loginResponse = await apiContext.post("https://rahulshettyacademy.com/api/ecom/auth/login", 
    {
        data: loginPayload
    });
    expect(loginResponse.ok()).toBeTruthy();
    const loginResponseJson = await loginResponse.json();
    console.log(loginResponseJson);
    token = loginResponseJson.token;    
    console.log(token);
    expect(loginResponseJson.message).toBe("Login Successfully");

    // Create Order API call
    const orderResponse = await apiContext.post("https://rahulshettyacademy.com/api/ecom/order/create-order", 
    {
        data: orderPayload,
        headers: {
            'Authorization': token,
            'Content-Type': 'application/json'
        }
    });
   
    const orderResponseJson = await orderResponse.json();
    orderId = orderResponseJson.orders[0];

    console.log(orderResponseJson);   
    console.log(orderResponseJson.orders[0]);

    expect(orderResponse.ok()).toBeTruthy();
    expect(orderResponseJson.message).toBe("Order Placed Successfully");


});


test.beforeEach( () => {
    
});
  
     
test('Place An Order', async ({ page }) => {
 
       page.addInitScript( value => {
        window.localStorage.setItem('token', value);
       }, token);   // this function and the parameter 'value' are passed to the browser context, this will bypass the login page,  also to order summary page               
      
       await page.goto("https://rahulshettyacademy.com/client");   
    

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
      await page.pause();
      expect(orderId.includes(orderIdDetails)).toBeTruthy();
      console.log(orderIdDetails);

    })

    // Verify if order is created in the order history page
    // Precondition - create order - API

