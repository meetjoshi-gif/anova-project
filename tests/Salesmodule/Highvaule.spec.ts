import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/login.page';
import { HighVauleRequestPage } from '../../pages/Highvaule.page';


test('High Vaule Flow', async ({ page }) => {
  test.setTimeout(100000);
 await page.setViewportSize({ width: 1920, height: 1080 });
  const loginPage = new LoginPage(page);
  const certificatePage = new HighVauleRequestPage(page);

  // Login
  await loginPage.navigate();
  await page.waitForTimeout(2000);
  await loginPage.login('keri.anderson97+admin@gmail.com', '123456');
  console.log('Login successful for HighValue request');

  await page.waitForTimeout(2000);

if (Math.random() < 0.5) {
    await certificatePage.CreateHVR();
    console.log('Successfully created High Value Request');
} else {
    await certificatePage.CreateHVRLogistiq();
    console.log('Successfully created High Value Request for Logistiq');
}

  await certificatePage.DownloadHVR();
  console.log('Download successful for HighValue request');

  await certificatePage.ApproveandReject();

  await certificatePage.DownloadCERTandInvoice();
  console.log('Donwload CERT, Invoice successful for HighValue request');


})