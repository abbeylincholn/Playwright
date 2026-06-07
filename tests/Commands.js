//npx playwright test tests/ClientAppPO.spec.js --config playwright.config1.js  // to run specific test file with specific config file
//npx playwright test --config=playwright.config1.js  // to run all tests with specific config file
//npx playwright test tests/ClientAppPO.spec.js  // to run specific test file with default config file
//npx playwright test  // to run all tests with default config file

//npx playwright test --ui // to open playwright test runner UI
//npx playwright test tests/ClientAppPO.spec.js --config playwright.config1.js --project=safari // to run specific test file with specific config file and specific browser

// i reduce the viewport size to see the mobile view of the application and the test fails that means the web application is not responsive

// test files will trigger parallel
// individual tests will run in sequence
// npx playwright test --grep @Web //
//npm install -D allure-playwright
//npx playwright test --grep @Web --reporter=line,allure-playwright
//yarn allure generate ./allure-results --clean -o ./allure-report
//npm install -D allure-commandline
//npx allure generate ./allure-results --clean -o ./allure-report
//npx allure open ./allure-report
//npm install --save-dev typescript


// # Remove Playwright’s cached browsers for the current user
// rm -rf ~/.cache/ms-playwright

// # (Optional) If you’re using a CI user like `node` inside a container:
// sudo rm -rf /home/node/.cache/ms-playwright

// # Remove Playwright binaries if installed globally (just to be safe)
// rm -rf node_modules/.cache/ms-playwright
// # Clean reinstall all Node modules
// rm -rf node_modules package-lock.json

// remove and reinstall all node modules
// rmdir /s /q node_modules
// del /f /q package-lock.json
// npm install
//npx playwright install

// # Reinstall all Playwright browsers (Chromium, Firefox, WebKit)
// npx playwright install --with-deps

// # Check what browsers are installed
// npx playwright install --list

// # Run your tests again
// npx playwright test

//tsc demo.ts 
//tsc --init // to create tsconfig.json file

//npx playwright test tests/e2e/api/firebase-auth.api.spec.ts --project=api
//npx playwright test -g "Exchange Token"

// rmdir /s /q node_modules
// del yarn.lock

// Then:

// yarn install

// Step 3 — Install Playwright browsers (Windows)

// yarn playwright install

// Task	Linux command
// Remove folder + contents	rm -rf node_modules
// Remove empty folder only	rmdir node_modules
// Remove lockfile	rm package-lock.json
// Remove lockfile	rm package.json


// yarn add --dev @types/node

// Key Type / Folder	Value
// Username	ezekiellinc_5CKOYq
// Access Key	Pi6q7GwtDTcQfW6HZh8f
// Local Folder URL 	http://ezekiellinc_5ckoyq.browserstack.com