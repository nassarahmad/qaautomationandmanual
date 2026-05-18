/* const {test,expect} = require('@playwright/test');

test('UploadFile', async ({page}) => {
  await page.goto('https://easyupload.io/');
  // Start waiting for file chooser before clicking. Note no await.
const fileChooserPromise = page.waitForEvent('filechooser');
  await page.locator("//button[@class='dz-button']").click();

const fileChooser = await fileChooserPromise;
await fileChooser.setFiles("C:/Users/Ahmad/Downloads/WhatsApp Image 2026-05-12 at 8.36.32 PM (1).jpeg");
  
 
  await page.waitForTimeout(6000);
}); */