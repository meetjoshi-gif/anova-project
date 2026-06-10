import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/login.page';
import { SQPPage } from '../../pages/SQP.page';

test('SQP Flow', async ({ page }) => {
  test.setTimeout(100000);

    await page.setViewportSize({ width: 1920, height: 1080 });
    const loginPage = new LoginPage(page);
    const SQP = new SQPPage(page);

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
    console.log('SQP edited successfully or Rejected successfully');

    await SQP.SearchSQP();
    console.log('SQP searched successfully');

    await SQP.filterSQP();
    console.log('SQP filtered successfully');
});

test('Multiple SQP Flow', async ({ page }) => {
    test.setTimeout(50000);

    await page.setViewportSize({ width: 1920, height: 1080 });
    const loginPage = new LoginPage(page);
    const SQP = new SQPPage(page);

    // Login
    await loginPage.navigate();
    await loginPage.login('keri.anderson97+admin@gmail.com', '123456');

    console.log('Login successful For Multiple SQP');

    await SQP.navigate();
    await SQP.MultipleSQPcreation();
    console.log('Multiple SQP successful created');

    await SQP.goToSQPIndex();
    await expect(page).toHaveURL("https://newdev.anovamarine.com/revised/admin/special_quote_project/index");
    console.log('Navigated to SQP URL');

    await SQP.editMultipleSQP();
    console.log('Multiple SQP edited successfully or Rejected successfully');

    await SQP.SearchSQP();
    console.log('Multiple SQP searched successfully');

    await SQP.filterSQP();
    console.log('Multiple SQP filtered successfully');

})