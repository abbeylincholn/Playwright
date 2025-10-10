
const { test, expect } = require('@playwright/test');

test('Fixtures and Context Demo', async ({ browser }) => {
    const context = await browser.newContext({baseURL: 'https://playwright.dev', viewport: { width: 1280, height: 720, colorScheme: 'dark' }});
    const page = await context.newPage();
    await page.goto("/")
    await page.pause();
})

test.only('Fixtures and Context Demo Page Fixtures', async ({ page }) => {
    await page.goto("https://google.com")
})
