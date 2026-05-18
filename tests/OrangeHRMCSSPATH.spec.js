import { test, expect } from '@playwright/test';


test('OrangeHRM CSSPATH', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/');
  await page.getByLabel("Password");
  console.log(await page.getByLabel("password"));
  //await page.getByPlaceholder("Username").fill("Admin");
  await page.locator('//input[@name="username"]').fill("Admin");
  await page.locator('//input[@placeholder="Username"]').fill("Admin");
  await page.getByPlaceholder("Password").fill("admin123");
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByAltText('profile picture').click();
  await page.getByText('Logout').click();
  await page.waitForTimeout(2000);

  
});