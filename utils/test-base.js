const base = require('@playwright/test');  // page, browser, test are fixtures provided by playwright but here we are creating our own custom fixture

exports.customtest = base.test.extend({
    // Define shared fixtures here

    testDataForOrder: {
        username: "anshika@gmail.com",
        password: "Iamking@000",
        productName: "ZARA COAT 3"
    },
});