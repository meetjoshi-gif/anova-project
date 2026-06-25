import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/login.page';
import { AutoLiabilityPage } from '../../pages/AutoLiability.page';


test('Auto Liability Flow', async ({ page }) => {
  test.setTimeout(200000);
  await page.setViewportSize({ width: 1920, height: 1080 });
  const loginPage = new LoginPage(page);
  const certificatePage = new AutoLiabilityPage(page);

  // Login
  await loginPage.navigate();
  await page.waitForTimeout(2000);
  await loginPage.login('keri.anderson97+admin@gmail.com', '123456');

  console.log("Login Successful For Auto Liability")

  await certificatePage.navigate();
  await certificatePage.AutoLiabilityCreate();
  console.log("Created Successful Auto Liability")

  await certificatePage.Createquote()
  console.log("Approved Successful Auto Liability Quote")

  await certificatePage.Accepted()
  console.log("Accepted and Download Quote Successful Auto Liability")

  await certificatePage.GenratePolicy()
  console.log("Genrate Successful Liability")

  await certificatePage.EditQuotePolicy()
  console.log("Auto Liability Edit Quote invoice Successful")

  await certificatePage.EditQuoteAfterApproveReject()

  await certificatePage.DownloadAll()
  console.log("Downloaded Cert,Invoice and Endorsement Successful Auto Liability")

})