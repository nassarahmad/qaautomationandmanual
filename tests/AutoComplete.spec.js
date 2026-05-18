const {test,expect} = require('@playwright/test');

test('AutoComplete', async ({page}) => {
  await page.goto('https://alphagov.github.io/accessible-autocomplete/examples/');
  await page.locator("//input[@id='autocomplete-default']").fill("A");
 await page.click('//li[@id="autocomplete-default__option--2"]');
  await page.waitForTimeout(4000);
});