const { By, until } = require('selenium-webdriver');

class LoginPage {
  constructor(driver) {
    this.driver = driver;
    this.url = 'http://localhost:3000/login'; // Adjust URL accordingly
  }

  async open() {
    await this.driver.get(this.url);
  }

  async setUsername(username) {
    const usernameField = await this.driver.findElement(By.css('input[placeholder="Username"]'));
    await usernameField.clear();
    await usernameField.sendKeys(username);
  }

  async setPassword(password) {
    const passwordField = await this.driver.findElement(By.css('input[placeholder="Password"]'));
    await passwordField.clear();
    await passwordField.sendKeys(password);
  }

  async submit() {
    const loginButton = await this.driver.findElement(By.css('button[type="submit"]'));
    await loginButton.click();
  }

  async getErrorMessage() {
    const errorElement = await this.driver.wait(until.elementLocated(By.css('.error')), 10000);
    return await errorElement.getText();
  }
}

module.exports = LoginPage;
