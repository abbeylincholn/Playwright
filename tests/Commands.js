//npx playwright test tests/ClientAppPO.spec.js --config playwright.config1.js  // to run specific test file with specific config file
//npx playwright test --config=playwright.config1.js  // to run all tests with specific config file
//npx playwright test tests/ClientAppPO.spec.js  // to run specific test file with default config file
//npx playwright test  // to run all tests with default config file

//npx playwright test --ui // to open playwright test runner UI
//npx playwright test tests/ClientAppPO.spec.js --config playwright.config1.js --project=safari // to run specific test file with specific config file and specific browser

// i reduce the viewport size to see the mobile view of the application and the test fails that means the web application is not responsive