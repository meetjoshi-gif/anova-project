import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/login.page';
import { COIRequestPage } from '../../pages/COIRequest.page';

test('COI Request', async ({ page }) => {
  test.setTimeout(100000);
  await page.setViewportSize({ width: 1920, height: 1080 });
  const loginPage = new LoginPage(page);
  const certificatePage = new COIRequestPage(page);

  // Login
  await loginPage.navigate();
  await page.waitForTimeout(5000);
  await loginPage.login('keri.anderson97+admin@gmail.com', '123456');

  console.log("Login Successful For Liability")

  await certificatePage.navigate();

if (Math.random() < 0.5) {
  await certificatePage.CreateLibilityAnova();
} else {
  await certificatePage.CreateLibilityLogistiq();
}

  await certificatePage.EditLibility();
  console.log("Edit Successful For Liability")

  await certificatePage.ReqestAccpet();
  console.log("Accepted Successful For Liability")

  await certificatePage.COIRquest();
  console.log("COI Request Successful For Liability")

});

