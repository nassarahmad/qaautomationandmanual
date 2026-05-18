import {test,expect} from '@playwright/test';
test('OrangeHRM Filter', async ({page}) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/');
    await page.getByPlaceholder("Username").fill("Admin");          
    await page.getByPlaceholder("Password").fill("admin123");
    await page.getByRole('button', { name: 'Login' }).click();
    //await page.getByRole('listitem').filter({ hasText: /Leave/ }).click();
    await page.getByRole('listitem')
    .filter({has:page.getByRole('link', { name: 'Leave' })})
    .click();   

    await page.waitForTimeout(2000);

})