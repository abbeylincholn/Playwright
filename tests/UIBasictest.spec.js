
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





