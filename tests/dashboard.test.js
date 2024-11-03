const { expect } = require('chai');
const { until } = require('selenium-webdriver');
const buildDriver = require('../utils/webdriver');
const DashboardPage = require('../pages/DashboardPage');
const LoginPage = require('../pages/LoginPage');

describe('Dashboard Tests', function () {
  this.timeout(30000); // Increase timeout for Selenium operations
  let driver;
  let loginPage;
  let dashboardPage;

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

  it('should navigate to the dashboard after login', async () => {
    await loginPage.open();
    await loginPage.setUsername('testuser');
    await loginPage.setPassword('testpassword');
    await loginPage.submit();

    // Wait for the URL to change to the dashboard
    await driver.wait(until.urlContains('/dashboard'), 10000);

    // Ensure the welcome message is loaded
    const welcomeMessage = await dashboardPage.getWelcomeMessage();
    expect(welcomeMessage).to.equal('Welcome to the Dashboard');
  });

  it('should log out and redirect to login page', async () => {
    await dashboardPage.logout();

    // Wait for the URL to change to the login page
    await driver.wait(until.urlContains('/login'), 10000);

    const currentUrl = await driver.getCurrentUrl();
    expect(currentUrl).to.include('/login');
  });
});
