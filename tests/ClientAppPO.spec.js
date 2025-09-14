
const { test, expect } = require('@playwright/test');      
const {POManager} = require('../pageobjects/POManager');
// json -> string -> js object
const dataset = JSON.parse(JSON.stringify(require("../utils/placeorderTestData.json")));  // Convert JSON file data to object and catch in variable



test('Client App login PO', async ({ page }) => {
 
      const poManager = new POManager(page);    

      const loginPage = poManager.getLoginPage();
      await loginPage.goTo();
      await loginPage.validLogin(dataset.username, dataset.password);   
      
      const dashBoardPage = poManager.getDashBoardPage();    
      await dashBoardPage.searchProduct_AddCart(dataset.productName);  
      await dashBoardPage.goToCartPage();
      
      const cartPage = poManager.getCartPage();
      await cartPage.VerifyProductIsDisplayed(dataset.productName);
      await cartPage.Checkout();

      const ordersReviewPage = poManager.getOrdersReviewPage();
      await ordersReviewPage.searchCountryAndSelect("ind","India");
      await ordersReviewPage.VerifyEmailId(dataset.username);
      const orderId = await ordersReviewPage.SubmitAndGetOrderId();      
      console.log(orderId);       
 
      await dashBoardPage.navigateToOrders();
      const ordersHistoryPage = poManager.getOrdersHistoryPage();
      await ordersHistoryPage.searchOrderAndSelect(orderId);
      expect(orderId.includes(await ordersHistoryPage.getOrderId())).toBeTruthy();
      

    })
