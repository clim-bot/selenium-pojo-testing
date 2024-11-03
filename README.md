# Selenium POJO Testing

This repository contains Selenium tests using the Page Object Model (POJO) approach for testing the frontend, backend, and MongoDB interactions. It includes GitHub Actions workflows to automate testing on different browsers, including local and BrowserStack environments.

## Structure

- `pages/`: Contains page objects for Login, Register, and Dashboard.
- `tests/`: Contains test scripts for Login, Register, and Dashboard functionalities.
- `utils/`: Contains utility functions, such as WebDriver configuration.

## Setup

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd selenium-pojo-testing
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start your application (frontend, backend, MongoDB).

4. Run tests locally:
   ```bash
   npm test
   ```

## Running Tests

### Local Testing

You can run the tests locally using different browsers by setting the `BROWSER` environment variable:

- **Chrome** (default):
  ```bash
  npm test
  ```

- **Safari**:
  ```bash
  BROWSER=safari npm test
  ```

- **Firefox**:
  ```bash
  BROWSER=firefox npm test
  ```

- **Edge**:
  ```bash
  BROWSER=edge npm test
  ```

### BrowserStack Testing

To run tests on BrowserStack:

1. Set up your BrowserStack credentials in GitHub Secrets (`BSTACK_USERNAME` and `BSTACK_ACCESS_KEY`).
2. Trigger the `Run Tests on BrowserStack` workflow manually via GitHub Actions.

You can specify the browser, OS, and OS version when running the workflow.

## GitHub Actions Workflows

### Daily and Manual Tests

- **Run Tests**: Automatically runs daily at 12 AM UTC or can be triggered manually for different browsers.

### BrowserStack Tests

- **Run Tests on BrowserStack**: Manually trigger the tests on BrowserStack for different browser and OS configurations.

## Technologies

- **Selenium WebDriver**: For browser automation.
- **Mocha**: Test framework.
- **Chai**: Assertion library.
- **BrowserStack**: Cloud-based testing platform.

## Tests Included

- **Login**: Valid and invalid login attempts.
- **Register**: User registration with unique and duplicate usernames.
- **Dashboard**: Access control and logout functionality.
