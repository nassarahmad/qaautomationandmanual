const {test,expect} = require('@playwright/test');

test('MultiValueDropDown', async ({page}) => {
  await page.goto('https://www.tutorialspoint.com/selenium/practice/select-menu.php');
  await page.locator('//select[@id="inputGroupSelect03"]')
   .selectOption([{index: 0}, {index: 1}, {index: 2}]);
  await page.waitForTimeout(4000);
});