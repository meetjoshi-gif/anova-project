import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/login.page';
import { LiabilityPage } from '../../pages/Liability.page';

test('Liability Flow', async ({ page }) => {
  test.setTimeout(100000);
  await page.setViewportSize({ width: 1920, height: 1080 });
  const loginPage = new LoginPage(page);
  const certificatePage = new LiabilityPage(page);

  // Login
  await loginPage.navigate();
  await page.waitForTimeout(5000);
  await loginPage.login('keri.anderson97+admin@gmail.com', '123456');

  console.log("Login Successful For Liability")

await certificatePage.navigate();
await certificatePage.Liabilitycreate();
console.log("Created Successful Liability")

await certificatePage.ApproveReject()
console.log("Approved Successful Liability")

await certificatePage.FilterLiability()
console.log("Filter Successful Liability")

await certificatePage.GenerateInvoice()
console.log("Generate invoice Successful Liability")

await certificatePage.downloadinvoiceandcert()
console.log("Downloaded Successful Liability")


})
