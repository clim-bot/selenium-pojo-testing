const { expect } = require('chai');
const buildDriver = require('../utils/webdriver');
const RegisterPage = require('../pages/RegisterPage');

describe('Register Tests', function () {
  this.timeout(30000); // Increase timeout for Selenium operations
  let driver;
  let registerPage;

  before(async function () {
    this.timeout(30000); // Increase timeout for Selenium operations
    const browser = process.env.BROWSER || 'chrome'; // Default to Chrome
    driver = await buildDriver(browser);
    loginPage = new LoginPage(driver);
    dashboardPage = new DashboardPage(driver);
  });
  

  after(async () => {
    await driver.quit();
  });

  it('should register a new user successfully', async () => {
    await registerPage.open();
    await registerPage.setUsername('newuser');
    await registerPage.setPassword('newpassword');
    await registerPage.submit();

    // Wait and check for the success message
    const successMessage = await registerPage.getSuccessMessage();
    expect(successMessage).to.equal('Registration successful! You can now log in.');
  });

  it('should display an error for duplicate username', async () => {
    await registerPage.open();
    await registerPage.setUsername('existinguser');
    await registerPage.setPassword('password123');
    await registerPage.submit();

    // Wait and check for the error message
    const errorMessage = await registerPage.getErrorMessage();
    expect(errorMessage).to.equal('User already exists');
  });
});
