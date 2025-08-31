import {test, expect} from '@playwright/test';

test('Special Locators', async ({page})=>{
    await page.goto("https://rahulshettyacademy.com/angularpractice/")
    await page.getByLabel("Check me out if you Love IceCreams!").click();
    await page.getByLabel("Employed").check();
    await page.getByLabel("Gender").selectOption("Female");
    // await page.getByPlaceholder("Type to search").fill("ind");
    // const dropdown = page.locator(".ui-menu-item-wrapper");
    // await dropdown.nth(1).click();
    // await expect(page.locator("#autocomplete")).toHaveValue("India");
    // await page.getByText("Submit").click();
    // await expect(page.locator(".alert-success")).toContainText("Success! The Form has been submitted successfully!.");


})