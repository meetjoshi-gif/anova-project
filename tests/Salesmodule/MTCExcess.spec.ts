import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/login.page';
import { MTCCertificatePage } from '../../pages/MTCExcess.page';

test('MTC Excess', async ({ page }) => {
  test.setTimeout(50000);
  await page.setViewportSize({ width: 1920, height: 1080 });
  const loginPage = new LoginPage(page);
  const certificatePage = new MTCCertificatePage(page);

  // Login
  await loginPage.navigate();
  await loginPage.login('keri.anderson97+admin@gmail.com', '123456');

  console.log('Login successful For MTC Excess');

  await certificatePage.navigate();
  await certificatePage.createMTCExcess();
  console.log('MTC Excess created');

  // Go to Sales
  await certificatePage.goToSalesMTC();
  await expect(page).toHaveURL("https://newdev.anovamarine.com/revised/admin/sales");
  console.log('Navigated to Sales');

  // Download files
  await certificatePage.downloadfiles();
  console.log('Files downloaded successfully');
});