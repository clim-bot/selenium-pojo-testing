const { Builder } = require('selenium-webdriver');

const buildDriver = async () => {
  return new Builder().forBrowser('chrome').build();
};

module.exports = buildDriver;
