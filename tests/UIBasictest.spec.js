
const { test, expect } = require('@playwright/test');



test('Google Homepage Test', async ({ page }) => {
  await page.goto('https://www.google.com'); // include https://
  //get page title
  console.log(await page.title());
  //assert page title
  await expect(page).toHaveTitle("Google");
});


test('Browser Context-Validating Error login', async ({ browser }) => {

  const context = await browser.newContext();  
  const page = await context.newPage();

  const username = page.locator('#username');
  const password = page.locator('#password');
  const signInBtn = page.locator('#signInBtn');

  const cardTitles = page.locator('.card-body a');

  await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
  console.log(await page.title());
  await expect(page).toHaveTitle("LoginPage Practise | Rahul Shetty Academy");  

  await page.locator('#username').fill('rahulshetty');
  await page.locator('#password').fill('learning');
  await page.locator('#signInBtn').click();
  console.log(await page.locator("[style*='block']").textContent());
  await expect(page.locator("[style*='block']")).toContainText("Incorrect");

  await username.fill('');  // clear the username field
  await username.fill('rahulshettyacademy');
  await password.fill('');  // clear the password field
  await password.fill('learning');
  await signInBtn.click();
 
  // console.log(await cardTitles.first().textContent());
  // console.log(await cardTitles.nth(1).textContent());

const allTitles = await cardTitles.allTextContents();
  console.log(allTitles);
});


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


test('Child Window Handling', async ({ browser }) => {
  
  const context = await browser.newContext();  
  const page = await context.newPage();
  const username = page.locator('#username');
  await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
  const documentLink = page.locator("[href*='documents-request']");

  const [newPage] = await Promise.all(  // array destructuring
   [
    context.waitForEvent('page'), // listening for new page pending, rejected and fulfilled promises // asynchhronous event
    documentLink.click(),  // new tab is opened page

   ]) // new page object
  
  const text = await newPage.locator(".red").textContent();
  console.log(text);
  const arrayText = text.split("@");
  const domain = arrayText[1].split(" ")[0];
  //console.log(domain);
  //await page.locator("#username").fill(domain);
  await username.fill(domain); 
  await page.screenshot({ path: 'screenshot.png' });
  await page.pause();
  console.log(await username.textContent());


});




