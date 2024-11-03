const { Builder } = require('selenium-webdriver');
require('dotenv').config();

const buildDriver = async (browser = 'chrome') => {
  if (process.env.USE_BROWSERSTACK === 'true') {
    const capabilities = {
      'bstack:options': {
        os: process.env.BSTACK_OS || 'Windows',
        osVersion: process.env.BSTACK_OS_VERSION || '10',
        userName: process.env.BSTACK_USERNAME,
        accessKey: process.env.BSTACK_ACCESS_KEY,
        buildName: process.env.BSTACK_BUILD_NAME || 'Selenium-POJO-Build',
        sessionName: `Test on ${browser}`,
      },
      browserName: browser,
      browserVersion: process.env.BSTACK_BROWSER_VERSION || 'latest',
    };

    return new Builder()
      .usingServer('https://hub-cloud.browserstack.com/wd/hub')
      .withCapabilities(capabilities)
      .build();
  } else {
    return new Builder().forBrowser(browser).build();
  }
};

module.exports = buildDriver;
