const {test,expect}= require('@playwright/test');
test("validate OrangeHRM website URL",async({page})=>{
 await page.goto("https://opensource-demo.orangehrmlive.com/");
 await expect(page).toHaveURL(/.*orangehrmlive.*/);
})