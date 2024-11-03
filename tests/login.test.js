const { expect } = require('chai');
const { until } = require('selenium-webdriver');
const buildDriver = require('../utils/webdriver');
const LoginPage = require('../pages/LoginPage');

describe('Login Tests', function () {
  this.timeout(30000); // Increase timeout for Selenium operations
  let driver;
  let loginPage;

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

  it('should display an error for invalid credentials', async () => {
    await loginPage.open();
    await loginPage.setUsername('invaliduser');
    await loginPage.setPassword('wrongpassword');
    await loginPage.submit();

    // Wait for the error message to appear
    const errorMessage = await loginPage.getErrorMessage();
    expect(errorMessage).to.equal('Invalid username or password');
  });

  it('should login successfully with valid credentials', async () => {
    await loginPage.open();
    await loginPage.setUsername('testuser');
    await loginPage.setPassword('testpassword');
    await loginPage.submit();

    // Wait for navigation to the dashboard
    await driver.wait(until.urlContains('/dashboard'), 10000);

    const currentUrl = await driver.getCurrentUrl();
    expect(currentUrl).to.include('/dashboard');
  });
});
