import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/login.page';
import { CertificatePage } from '../../pages/cargocert.page';

test('Sale-Cargo', async ({ page }) => {
  test.setTimeout(50000);
  await page.setViewportSize({ width: 1920, height: 1080 });
  const loginPage = new LoginPage(page);
  const certificatePage = new CertificatePage(page);
  

  // Login
  await loginPage.navigate();
  await loginPage.login('keri.anderson97+admin@gmail.com', '123456');

// await expect(page).toHaveURL("https://newdev.anovamarine.com/revised/admin/index",{ timeout: 2000 });
console.log('Login successful For Sale-Cargo');

  // Create Certificate
  await certificatePage.navigate();
  await certificatePage.createCertificate();
  console.log('Certificate created');

  // Go to Sales
  await certificatePage.goToSales();
  await expect(page).toHaveURL("https://newdev.anovamarine.com/revised/admin/sales");
  console.log('Navigated to Sales');

  // Edit Certificate
  await certificatePage.EditCertificate();
  console.log('Certificate edited successfully');

  // Download files
  await certificatePage.downloadfiles();
  console.log('Files downloaded successfully');

});