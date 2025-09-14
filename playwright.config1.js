
import { defineConfig, devices } from '@playwright/test';
import { trace } from 'console';


/**
 * @see https://playwright.dev/docs/test-configuration
 */
const confit = ({
  testDir: './tests',
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
        headless: true,
        screenshot: 'off',
        trace: 'on'
      }
    },
    {
      name: 'safari',
      use: {

        browserName: 'webkit',
        headless: true,
        screenshot: 'only on-failure',
        trace: 'on'
      }
    },
  ]

});

module.exports = defineConfig(confit);

