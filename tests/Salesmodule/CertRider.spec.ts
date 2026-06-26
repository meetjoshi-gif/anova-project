import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/login.page';
import { CertRiderPage } from '../../pages/CertRider.page';

test('CERT Rider Flow', async ({ page }) => {
  test.setTimeout(300000);

  await page.setViewportSize({ width: 1920, height: 1080 });
  const loginPage = new LoginPage(page);
  const SQP = new CertRiderPage(page);

  // Login
  await loginPage.navigate();
  await page.waitForTimeout(5000);
  await loginPage.login('keri.anderson97+admin@gmail.com', '123456');

  console.log('Login successful For SQP');
  await SQP.navigate();
  await SQP.createSQPsingle();
  console.log('SQP successful created');

  await SQP.goToSQPIndex();
  await expect(page).toHaveURL("https://newdev.anovamarine.com/revised/admin/special_quote_project/index");
  console.log('Navigated to SQP URL');

  await SQP.editSQP();
  console.log('SQP edited successfully');

  await SQP.AdminLogout();
  console.log('Logout from Admin');


  await SQP.LoginWithClient();

  await SQP.ClientLogout();
  console.log('Logout from Client');

  await loginPage.navigate();
  await page.waitForTimeout(2000);
  await loginPage.login('keri.anderson97+admin@gmail.com', '123456');
  await page.waitForTimeout(2000);

  await page.goto('https://newdev.anovamarine.com/revised/admin/cert_riders/index')
  await SQP.DownloadCERT();
  console.log('Downladon CERT Rider verified successfully from Admin.');



})