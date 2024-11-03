const { expect } = require('chai');
const buildDriver = require('../utils/webdriver');
const DashboardPage = require('../pages/DashboardPage');
const LoginPage = require('../pages/LoginPage');

describe('Dashboard Tests', function () {
  this.timeout(30000); // Increase timeout for Selenium operations
  let driver;
  let loginPage;
  let dashboardPage;

  before(async () => {
    driver = await buildDriver();
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
    const welcomeMessage = await dashboardPage.getWelcomeMessage();
    expect(welcomeMessage).to.equal('Welcome to the Dashboard');
  });

  it('should log out and redirect to login page', async () => {
    await dashboardPage.logout();
    const currentUrl = await driver.getCurrentUrl();
    expect(currentUrl).to.include('/login');
  });
});
