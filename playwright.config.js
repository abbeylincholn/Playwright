
import { defineConfig, devices } from '@playwright/test';
import { trace } from 'console';


/**
 * @see https://playwright.dev/docs/test-configuration
 */
const confit = ({
  testDir: './tests',
  timeout: 40 * 1000,  // evertest case timeout
  retries: 1, // flaky = test passes on retry; set >0 so Playwright can mark flaky
  expect: {
    timeout: 8000  // assertion timeout
  },

   // Multi-reporter: list (console), github (annotations), html (artefact)
    reporter: [
    ['list'],
    ['github'],
    ['html', { outputFolder: 'playwright-report', open: 'never' }],
  ],
  
  use: {
    
    browserName: 'chromium',
    headless: true,
    screenshot: 'only on-failure', 
    trace: 'on'  // keep traces only when a test fails

    //trace: 'on'
  },  
});

module.exports = defineConfig(confit);




