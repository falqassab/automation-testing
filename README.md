# automation-testing
This repository contains an End-to-End (E2E) testing framework built using Playwright to automate core authentication workflows — Sign Up, Sign In, and Sign Out — for the DemoBlaze Web App.
The framework follows the Page Object Model (POM) design and integrates with GitHub Actions for CI/CD automation.

---
### Project Links
DemoBlaze Web App: https://www.demoblaze.com/

### Project Structure
```
automation-testing/
├── .github/
│   └── workflows/
│       └── playwright.yml       
│
├── data/
│   └── test-data.json           
│
├── pages/
│   ├── SigninPage.js            # Page Object for Sign In flow && logout
│   └── SignupPage.js            # Page Object for Sign Up flow
│
├── tests/
│   └── auth/
│       ├── signin.test.js       # E2E test for Sign In functionality
│       ├── signout.test.js      # E2E test for Sign Out functionality
│       └── signup.test.js       # E2E test for Sign Up functionality
│
├── .gitignore                   # Ignored files for version control
├── README.md                    # Project documentation
├── TEST_CASE.MD                 # List and documentation of test cases
├── package-lock.json            # Lockfile for dependency management
├── package.json                 # Project dependencies and scripts
├── playwright.config.js         # Playwright configuration file
```

### Features
- Playwright-based E2E tests for authentication flows
- Page Object Model (POM) for clean, maintainable code
- Centralized test data with test-data.json
- GitHub Actions integration for CI/CD test execution
- Cross-browser support (Chromium, Firefox, WebKit)
- Automatic test reports (HTML format)

### Setup & Execution
1. Clone the Repository
```
git clone https://github.com/falqassab/automation-testing.git
cd automation-testing
```

2. Install Dependencies
```
npm install
```
3. Run Tests Locally
```
npx playwright test
```
4. Run a Specific Test
```
npx playwright test tests/auth/signin.test.js
```
5. View HTML Test Report
```
npx playwright show-report
```
