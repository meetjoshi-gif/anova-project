import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/login.page';
import { CargoCertificatePage } from '../../pages/Cargocert.page';


test('Sale and Cargo', async ({ page }) => {
  test.setTimeout(100000);
  await page.setViewportSize({ width: 1920, height: 1080 });
  const loginPage = new LoginPage(page);
  const certificatePage = new CargoCertificatePage(page);
  

  // Login
  await loginPage.navigate();
  await loginPage.login('keri.anderson97+admin@gmail.com', '123456');

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