const {test,expect}= require('@playwright/test');
test("validate OrangeHRM website title",async({page})=>{
 await page.goto("https://opensource-demo.orangehrmlive.com/");
 await expect(page).toHaveTitle("OrangeHRM");
})