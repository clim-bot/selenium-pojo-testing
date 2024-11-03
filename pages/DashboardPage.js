const { By, until } = require('selenium-webdriver');

class DashboardPage {
  constructor(driver) {
    this.driver = driver;
    this.url = 'http://localhost:3000/dashboard'; // Adjust URL accordingly
  }

  async open() {
    await this.driver.get(this.url);
  }

  async getWelcomeMessage() {
    const welcomeElement = await this.driver.wait(until.elementLocated(By.css('h2')), 10000);
    return await welcomeElement.getText();
  }

  async logout() {
    const logoutButton = await this.driver.findElement(By.css('button'));
    await logoutButton.click();

    // Wait for the logout process to complete and redirection
    await this.driver.wait(until.urlContains('/login'), 10000);
  }
}

module.exports = DashboardPage;
