
import { defineConfig, devices } from '@playwright/test';
import { trace } from 'console';
import { permission } from 'process';


/**
 * @see https://playwright.dev/docs/test-configuration
 */
const confit = ({
  testDir: './tests',
  retries: 1,  // retry failed test once
  timeout: 40 * 1000,  // evertest case timeout
  expect: {
    timeout: 8000  // assertion timeout
  },
  reporter: 'html',
  projects: [
    {
      name: 'chrome',
      use: {

        browserName: 'chromium',
        headless: false,
        screenshot: 'only-on-failure',
        trace: 'on',
        video : 'retain-on-failure',
        //viewport : { width: 720, height: 720}
      }
    },
    {
      name: 'safari',
      use: {

        browserName: 'webkit',
        headless: true,
        screenshot: 'off',
        trace: 'on',
        ignoreHTTPSErrors: true,
        permissions: ['geolocation'],

       // ...devices['iPhone 11']  // to run the test in mobile view
        
      }
    },
  ]

});

module.exports = defineConfig(confit);

