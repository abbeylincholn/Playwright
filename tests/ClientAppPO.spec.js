
const { test, expect } = require('@playwright/test');
const { customtest } = require('../utils/test-base');

const { POManager } = require('../pageobjects/POManager');
const dataset = JSON.parse(JSON.stringify(require('../utils/placeorderTestData.json')));   // json -> string -> js object

for (const data of dataset)   // Loop through the data sets
{
  test(`Client App login PO for ${data.productName}` , async ({ page }) => {

    const poManager = new POManager(page);

    const loginPage = poManager.getLoginPage();
    await loginPage.goTo();
    await loginPage.validLogin(data.username, data.password);

    const dashBoardPage = poManager.getDashBoardPage();
    await dashBoardPage.searchProduct_AddCart(data.productName);
    await dashBoardPage.goToCartPage();

    const cartPage = poManager.getCartPage();
    await cartPage.VerifyProductIsDisplayed(data.productName);
    await cartPage.Checkout();

    const ordersReviewPage = poManager.getOrdersReviewPage();
    await ordersReviewPage.searchCountryAndSelect("ind", "India");
    await ordersReviewPage.VerifyEmailId(data.username);
    const orderId = await ordersReviewPage.SubmitAndGetOrderId();
    console.log(orderId);

    await dashBoardPage.navigateToOrders();
    const ordersHistoryPage = poManager.getOrdersHistoryPage();
    await ordersHistoryPage.searchOrderAndSelect(orderId);
    expect(orderId.includes(await ordersHistoryPage.getOrderId())).toBeTruthy();

  });
}

customtest.only(`Client App PO Custom`, async ({ page,testDataForOrder }) => {

    const poManager = new POManager(page);

    const loginPage = poManager.getLoginPage();
    await loginPage.goTo();
    await loginPage.validLogin(testDataForOrder.username, testDataForOrder.password);

    const dashBoardPage = poManager.getDashBoardPage();
    await dashBoardPage.searchProduct_AddCart(testDataForOrder.productName);
    await dashBoardPage.goToCartPage();

    const cartPage = poManager.getCartPage();
    await cartPage.VerifyProductIsDisplayed(testDataForOrder.productName);
    await cartPage.Checkout();    

  });