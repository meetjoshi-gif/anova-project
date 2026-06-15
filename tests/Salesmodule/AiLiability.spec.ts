import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/login.page';
import { AILiabilityPage } from '../../pages/AiLiability.page';

test('AI Liability Flow', async ({ page }) => {
  test.setTimeout(200000);
  await page.setViewportSize({ width: 1920, height: 1080 });
  const loginPage = new LoginPage(page);
  const certificatePage = new AILiabilityPage(page);

  // Login
  await loginPage.navigate();
  await page.waitForTimeout(5000);
  await loginPage.login('keri.anderson97+admin@gmail.com', '123456');

  console.log("Login Successful For Auto Liability")

  await certificatePage.navigate();


const company = Math.random() < 0.5 ? 'Logistiq' : 'Anova';

if (company === 'Logistiq') {
    await certificatePage.CreateLogistiq();
    console.log('Created Successful AI Liability Logistiq');
} else {
    await certificatePage.CreateAnova();
    console.log('Created Successful AI Liability Anova');
}

  await certificatePage.CreateQuote()
  console.log("Created Successful Quote AI Liability")

  await certificatePage.DownloadQuote()
  console.log("Download Successful AI Liability Quote")

  await certificatePage.AcceptQuote()
  console.log("AI Liability Accept Quote Successful")

  await certificatePage.GeneratePolicy()
    console.log("AI Liability Generate Policy Successful")


  await certificatePage.EditPolicy()
  console.log("AI Liability Edit Policy Successful")

  await certificatePage.DownloadPolicy()
  console.log("AI Liability Download Policy Successful")


})