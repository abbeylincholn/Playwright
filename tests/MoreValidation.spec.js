const {test, expect} = require('@playwright/test');


test ('Popup Validation', async ({page})=>{


    await page.goto("https://rahulshettyacademy.com/AutomationPractice/")
    // await page.goto("http://google.com")
    // await page.goBack();
    // await page.goForward();

    await expect(page.locator("#displayed-text")).toBeVisible();
    await page.locator("#hide-textbox").click();
    await expect(page.locator("#displayed-text")).toBeHidden();
    await page.locator("#show-textbox").click();
    await expect(page.locator("#displayed-text")).toBeVisible();

    page.on('dialog', dialog => dialog.accept());
    await page.locator("#confirmbtn").click();
    //page.on('dialog', dialog => dialog.dismiss());

    // Mouse hover
    await page.locator("#mousehover").hover();

    // Handling iFrame
    const framesPage = page.frameLocator("#courses-iframe");
    await framesPage.locator("li a[href*='lifetime-access']:visible").click();
    const textCheck = await framesPage.locator(".text h2").textContent();
    console.log(textCheck.split(" ")[1]);

})

test('Screenshot & Visual comparison', async ({page, context})=>{

    await page.goto("https://rahulshettyacademy.com/AutomationPractice/")  
    await expect(page.locator("#displayed-text")).toBeVisible();
    await page.locator('#displayed-text').screenshot({path: 'element.png'});
    await page.locator("#hide-textbox").click();
    await page.screenshot({path: 'screenshot.png'});
    await expect(page.locator("#displayed-text")).toBeHidden();

});

//  screenshot - store -> screenshot 
test('Visual comparison', async ({page})=>{

    await page.goto('https://www.google.com/');    
    expect (await page.screenshot()).toMatchSnapshot('flight.png');

});


test('Visual comparison1', async ({ page }) => {
  await page.goto('https://www.flightaware.com/');
  await page.waitForLoadState('networkidle');     // wait for network to settle
  const shot = await page.screenshot({ fullPage: true });
  expect(shot).toMatchSnapshot('flight1.png');
});


