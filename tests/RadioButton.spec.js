import { test, expect } from '@playwright/test';


test('Handling Radio Buttons', async ({ page }) => {
  await page.goto('https://demoqa.com/automation-practice-form');
 await page.locator('//label[normalize-space()="Male"]').click();
 await page.locator('//label[normalize-space()="Female"]').check();
await page.waitForTimeout(4000);
  
});