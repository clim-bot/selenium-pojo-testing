const { expect } = require('chai');
const buildDriver = require('../utils/webdriver');
const LoginPage = require('../pages/LoginPage');

describe('Login Tests', function () {
  this.timeout(30000); // Increase timeout for Selenium operations
  let driver;
  let loginPage;

  before(async () => {
    driver = await buildDriver();
    loginPage = new LoginPage(driver);
  });

  after(async () => {
    await driver.quit();
  });

  it('should display an error for invalid credentials', async () => {
    await loginPage.open();
    await loginPage.setUsername('invaliduser');
    await loginPage.setPassword('wrongpassword');
    await loginPage.submit();
    const errorMessage = await loginPage.getErrorMessage();
    expect(errorMessage).to.equal('Invalid username or password');
  });

  it('should login successfully with valid credentials', async () => {
    await loginPage.open();
    await loginPage.setUsername('testuser');
    await loginPage.setPassword('testpassword');
    await loginPage.submit();
    const currentUrl = await driver.getCurrentUrl();
    expect(currentUrl).to.include('/dashboard');
  });
});
