
import { defineConfig, devices } from '@playwright/test';


/**
 * @see https://playwright.dev/docs/test-configuration
 */
const confit = ({
  testDir: './tests',
  timeout: 40 * 1000,  // evertest case timeout
  expect: {
    timeout: 5000  // assertion timeout
  },
  reporter: 'html',
  
  use: {
    
    browserName: 'chromium',
    headless: false,
  },  
});

module.exports = defineConfig(confit);

