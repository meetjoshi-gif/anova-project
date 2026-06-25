import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/login.page';
import { BondPage } from '../../pages/Bond.page';


test('Bond Flow', async ({ page }) => {
  test.setTimeout(100000);
    await page.setViewportSize({ width: 1920, height: 1080 });
    const loginPage = new LoginPage(page);
    const certificatePage = new BondPage(page);
  
    // Login
    await loginPage.navigate();
    await page.waitForTimeout(2000);
    await loginPage.login('keri.anderson97+admin@gmail.com', '123456');
  
    console.log("Login Successful For Bond")
  
  await certificatePage.navigate();
  await certificatePage.Bondcreate();
  console.log("Created Successful Bond")
  
  await certificatePage.Approve()
  console.log("Approved Successful Bond")
  
  await certificatePage.FilterBond()
  console.log("Filter Successful Bond")
  
  await certificatePage.GenerateInvoice()
  console.log("Generate invoice Successful Bond")
  
  await certificatePage.downloadinvoiceandcert()
  console.log("Downloaded Successful Bond")

});