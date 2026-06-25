import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/login.page';
import { MRCPPage } from '../../pages/MRCP.page';

test('Monthly Reporting Cargo Policy ', async ({ page }) => {
   test.setTimeout(100000);
    await page.setViewportSize({ width: 1920, height: 1080 });
    const loginPage = new LoginPage(page);
    const certificatePage = new MRCPPage(page);
  
    // Login
    await loginPage.navigate();
    await page.waitForTimeout(5000);
    await loginPage.login('keri.anderson97+admin@gmail.com', '123456');
  
    console.log('Login successful For MRCP');

    await certificatePage.navigate();
    console.log('Navigate to the MRCP');


    await certificatePage.CreateMRCP();
    console.log('Created MRCP successful');


    await certificatePage.DownloadFiles();
    console.log('Download CERT/Invoice MRCP successful');


});