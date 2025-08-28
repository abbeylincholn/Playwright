
const { test, expect } = require('@playwright/test');       
     
    test('@Web Client App login', async ({ page }) => {
       //js file- Login js, DashboardPage
       const email = "anshika@gmail.com";
       const productName = 'zara coat 3';
       const products = page.locator(".card-body");
       await page.goto("https://rahulshettyacademy.com/client");
       await page.locator("#userEmail").fill(email);
       await page.locator("#userPassword").type("Iamking@000");
       await page.locator("[value='Login']").click();
      // await page.waitForLoadState('networkidle');
       await page.locator(".card-body b").first().waitFor();
       const titles = await page.locator(".card-body b").allTextContents();
       console.log(titles); 
     
    })

test.only('UI Controls', async ({ page }) => {
  await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
  await expect(page).toHaveTitle("LoginPage Practise | Rahul Shetty Academy");
  
  const username = page.locator('#username');
  const password = page.locator('#password');
  const signInBtn = page.locator('#signInBtn');
  const documentLink = page.locator("[href*='documents-request']");
  const userDropdown = page.locator("select.form-control");
  await userDropdown.selectOption('consult'); 
  await page.locator(".radiotextsty").last().click();
  await page.locator("#okayBtn").click();
  await expect(page.locator(".radiotextsty").last()).toBeChecked();
  console.log( await page.locator(".radiotextsty").last().isChecked());

  await page.locator("#terms").click();
  await expect(page.locator("#terms")).toBeChecked();
  await page.locator("#terms").uncheck();
  expect(await page.locator('#terms').isChecked()).toBeFalsy();
  console.log( await page.locator("#terms").isChecked());
  await expect (documentLink).toHaveAttribute("class","blinkingText");

});