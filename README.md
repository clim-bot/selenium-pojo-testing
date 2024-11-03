
# Selenium POJO Testing

This repository contains Selenium tests using the Page Object Model (POJO) approach for testing the frontend, backend, and MongoDB interactions.

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

4. Run tests:
   ```bash
   npm test
   ```

## Technologies

- **Selenium WebDriver**: For browser automation.
- **Mocha**: Test framework.
- **Chai**: Assertion library.

## Tests Included

- **Login**: Valid and invalid login attempts.
- **Register**: User registration with unique and duplicate usernames.
- **Dashboard**: Access control and logout functionality.
