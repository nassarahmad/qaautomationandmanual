import { test, expect } from '@playwright/test';


test('Handling Check Boxes', async ({ page }) => {
  await page.goto('https://demoqa.com/automation-practice-form');
 await page.locator('//label[normalize-space()="Sports"]').click();
 await page.locator('//label[normalize-space()="Reading"]').check();
 await page.locator('//label[normalize-space()="Sports"]').uncheck();
await page.waitForTimeout(4000);
  
});