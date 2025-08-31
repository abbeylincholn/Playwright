import {test, expect} from '@playwright/test';

test('Special Locators', async ({page})=>{
    await page.goto("https://rahulshettyacademy.com/angularpractice/")
    await page.getByLabel("Check me out if you Love IceCreams!").click();
    await page.getByLabel("Employed").check();
    await page.getByLabel("Gender").selectOption("Female");
    await page.getByPlaceholder("Password").fill("ind");
    await page.getByRole("button", {name: "Submit"}).click();
    await page.getByText("Success! The Form has been submitted successfully!").isVisible();
    await page.getByRole("link", {name: "Shop"}).click();

    await page.locator("app-card").filter({hasText: "iphone X"}).getByRole("button").click();
    await page.locator("app-card").filter({hasText: "Blackberry"}).getByRole("button", {name: "Add"}).click();



    // const dropdown = page.locator(".ui-menu-item-wrapper");
    // await dropdown.nth(1).click();
    // await expect(page.locator("#autocomplete")).toHaveValue("India");
    // await page.getByText("Submit").click();
    // await expect(page.locator(".alert-success")).toContainText("Success! The Form has been submitted successfully!.");


})