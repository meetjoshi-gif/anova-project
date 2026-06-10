import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/login.page';
import { NonMarinePage } from '../../pages/NonMarine.page';

test('Non-Marine Flow', async ({ page }) => {
  test.setTimeout(100000);
  await page.setViewportSize({ width: 1920, height: 1080 });
  const loginPage = new LoginPage(page);
  const certificatePage = new NonMarinePage(page);

  // Login
  await loginPage.navigate();
  await page.waitForTimeout(3000);
  await loginPage.login('keri.anderson97+admin@gmail.com', '123456');

  console.log("Login Successful For Non-Marine Product")

await certificatePage.navigate();
await certificatePage.createNonMarine();
console.log("Created Successful Non-Marine Product")

await certificatePage.EditNonMarine()
console.log("Edited Successful Non-Marine Product")


await certificatePage.Approve()
console.log("Approved Successful Non-Marine Product")

await certificatePage.FilterNonMarine()
console.log("Filter Successful Non-Marine Product")

await certificatePage.GenerateInvoice()
console.log("Generate invoice Successful Non-Marine Product")

await certificatePage.downloadfiles()
console.log("Downloaded Successful Non-Marine Product")


})
