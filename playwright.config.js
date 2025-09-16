
import { defineConfig, devices } from '@playwright/test';
import { trace } from 'console';


/**
 * @see https://playwright.dev/docs/test-configuration
 */
const confit = ({
  testDir: './tests',
  timeout: 40 * 1000,  // evertest case timeout
  retries: 1, 
  expect: {
    timeout: 8000  // assertion timeout
  },
  reporter: 'html',
  
  use: {
    
    browserName: 'chromium',
    headless: true,
    screenshot: 'only on-failure', 
    trace: 'on'

    //trace: 'on'
  },  
});

module.exports = defineConfig(confit);

