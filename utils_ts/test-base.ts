// page, browser, test are fixtures provided by playwright but here we are creating our own custom fixture

import { test as baseTest } from '@playwright/test';

interface TestDataForOrder {
    username: string;
    password: string;
    productName: string;
};
export const customTest = baseTest.extend<{ testDataForOrder: TestDataForOrder }>({
    // Define shared fixtures here
    testDataForOrder: {
        "username": "abbey@gmail.com",
        "password": "Iamking@000",
        "productName": "ZARA COAT 3"
    },
});