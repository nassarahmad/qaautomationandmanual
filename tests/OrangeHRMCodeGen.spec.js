import { test, expect } from '@playwright/test';

test('OrangeHRM CodeGen', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/');
  await page.getByText('Username : Admin').click();
  await page.getByText('Password : admin123').click();
  await page.getByText('Username', { exact: true }).click();
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByText('Password', { exact: true }).click();
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.locator('i').nth(1).click();
  await page.locator('i').first().click();
  await page.getByRole('heading', { name: 'Login' }).click();
  await page.getByText('Username : AdminPassword :').click();
  await page.getByText('UsernamePassword Login Forgot').click();
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByText('Forgot your password?').click();
  await page.getByRole('button', { name: 'Cancel' }).click();
  await page.locator('div').nth(4).click();
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Username' }).fill('A');
  await page.getByRole('textbox', { name: 'Username' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('link', { name: 'Leave' }).click();
});