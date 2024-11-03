const { expect } = require('chai');
const buildDriver = require('../utils/webdriver');
const RegisterPage = require('../pages/RegisterPage');

describe('Register Tests', function () {
  this.timeout(30000); // Increase timeout for Selenium operations
  let driver;
  let registerPage;

  before(async () => {
    driver = await buildDriver();
    registerPage = new RegisterPage(driver);
  });

  after(async () => {
    await driver.quit();
  });

  it('should register a new user successfully', async () => {
    await registerPage.open();
    await registerPage.setUsername('newuser');
    await registerPage.setPassword('newpassword');
    await registerPage.submit();
    const successMessage = await registerPage.getSuccessMessage();
    expect(successMessage).to.equal('Registration successful! You can now log in.');
  });

  it('should display an error for duplicate username', async () => {
    await registerPage.open();
    await registerPage.setUsername('existinguser');
    await registerPage.setPassword('password123');
    await registerPage.submit();
    const errorMessage = await registerPage.getErrorMessage();
    expect(errorMessage).to.equal('User already exists');
  });
});
