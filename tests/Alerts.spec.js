const {test,expect} = require('@playwright/test');

test('Alerts', async ({page}) => {
  await page.goto('https://chercher.tech/practice/practice-pop-ups-selenium-webdriver');
  await page.on('dialog', async (a) => {
    console.log(a.message());
    await a.accept();
  });
  await page.locator("//input[@name='alert']").click();
 
  await page.waitForTimeout(4000);
});