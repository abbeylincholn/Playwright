
const { test, expect } = require('@playwright/test');      
const {POManager} = require('../pageobjects/POManager');



test('Client App login PO', async ({ page }) => {
 
      const poManager = new POManager(page);

       const productName = 'ZARA COAT 3';         
       const username = "anshika@gmail.com";
       const password = "Iamking@000";

      const loginPage = poManager.getLoginPage();
      await loginPage.goTo();
      await loginPage.validLogin(username, password);   
      
      const dashBoardPage = poManager.getDashBoardPage();
      await dashBoardPage.searchProduct_AddCart(productName);
      await dashBoardPage.goToCartPage();
      
      const cartPage = poManager.getCartPage();
      await cartPage.VerifyProductIsDisplayed(productName);
      await cartPage.Checkout();

      const ordersReviewPage = poManager.getOrdersReviewPage();
      await ordersReviewPage.searchCountryAndSelect("ind","India");
      await ordersReviewPage.VerifyEmailId(username);
      const orderId = await ordersReviewPage.SubmitAndGetOrderId();      
      console.log(orderId);       
 
      await dashBoardPage.goToOrdersPage();
      const ordersHistoryPage = poManager.getOrdersHistoryPage();
      await ordersHistoryPage.searchOrderAndSelect(orderId);
      expect(orderId.includes(await ordersHistoryPage.getOrderId())).toBeTruthy();

      

    })
