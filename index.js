const puppeteer = require('puppeteer');
const CREDS = require('./creds'); // for users credentials

const fs = require("fs");
let content = fs.readFileSync("simple.json");

content = JSON.parse(content);

(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto('https://almir.farfetch-apps.com/CmsContent/ContentRoute?url=sneakers-test');
  await page.waitFor(2000);

  // login
  await page.click('#username');
  await page.keyboard.type(CREDS.username);
  await page.click('#password');
  await page.keyboard.type(CREDS.password);
  await page.click('.FF-button');

})();
