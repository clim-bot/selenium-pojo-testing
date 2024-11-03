const { By } = require('selenium-webdriver');

class DashboardPage {
  constructor(driver) {
    this.driver = driver;
    this.url = 'http://localhost:3000/dashboard';
  }

  async open() {
    await this.driver.get(this.url);
  }

  async getWelcomeMessage() {
    const welcomeElement = await this.driver.findElement(By.css('h2'));
    return await welcomeElement.getText();
  }

  async logout() {
    const logoutButton = await this.driver.findElement(By.css('button'));
    await logoutButton.click();
  }
}

module.exports = DashboardPage;
