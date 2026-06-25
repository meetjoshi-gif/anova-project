import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/login.page';
import { OtherProductPage } from '../../pages/OtherProduct.page';

test('OtherProduct Flow', async ({ page }) => {
  test.setTimeout(100000);
  await page.setViewportSize({ width: 1920, height: 1080 });
  const loginPage = new LoginPage(page);
  const certificatePage = new OtherProductPage(page);

  // Login
  await loginPage.navigate();
  await page.waitForTimeout(2000);
  await loginPage.login('keri.anderson97+admin@gmail.com', '123456');

  console.log("Login Successful For OtherProduct")

await certificatePage.navigate();
await certificatePage.OtherProductcreate();
console.log("Created Successful OtherProduct")

await certificatePage.Approve()
console.log("Approved Successful OtherProduct")

await certificatePage.FilterOtherProduct()
console.log("Filter Successful OtherProduct")

await certificatePage.GenerateInvoice()
console.log("Generate invoice Successful OtherProduct")

await certificatePage.downloadinvoiceandcert()
console.log("Downloaded Successful OtherProduct")


})
