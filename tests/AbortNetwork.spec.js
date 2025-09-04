
const { test, expect } = require('@playwright/test');


test.only('Browser Context-Validating Error login', async ({ browser }) => {

  const context = await browser.newContext();  
  const page = await context.newPage();
  page.route('**/*.{png,jpg,jpeg}', route => route.abort());   // aborting the css, image file to check if the page is still functional without css file

  const username = page.locator('#username');
  const password = page.locator('#password');
  const signInBtn = page.locator('#signInBtn');

  const cardTitles = page.locator('.card-body a');

  page.on('console', msg => console.log(msg.text()));  // to capture the console.log message from the browser
  page.on('request', request => console.log(request.url())); // to capture the request url called from the browser
  page.on('response', response => console.log(response.url(), response.status()));  // to capture the response url called from the browser along with the status code

  await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
  console.log(await page.title());
  await expect(page).toHaveTitle("LoginPage Practise | Rahul Shetty Academy");  

  await page.locator('#username').fill('rahulshettyacademy');
  await page.locator('#password').fill('learning');
  await page.locator('#signInBtn').click();
 
});





