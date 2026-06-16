import { test, expect, Browser, BrowserContext, Page } from '@playwright/test';
import { LoginPage } from '../pages/login.page'
import { InsurersPage } from '../pages/Insurers.page';

let context: BrowserContext;
let page: Page;
let insurerName: string;
let phoneNumber: string;

test.describe.serial('Insurer Module', () => {
  test.setTimeout(100000);
  let certificatePage: InsurersPage;

  test.beforeAll(async ({ browser }) => {

    context = await browser.newContext();
    page = await context.newPage();
    certificatePage = new InsurersPage(page);
    console.log('Login Successful For Insurers Flow');
  });

  test('Login Insurers', async () => {

    test.setTimeout(100000);
    await page.setViewportSize({ width: 1920, height: 1080 });
    const loginPage = new LoginPage(page);
    // Login
    await loginPage.navigate();
    await page.waitForTimeout(2000);
    await loginPage.login('keri.anderson97+admin@gmail.com', '123456');
    console.log('Login Successful For Insurers Flow');
    await certificatePage.navigate();

  });


  test('Test 1 - Insurers Creation', async () => {
    await certificatePage.navigate();
    await certificatePage.CreateInsurers();
    console.log('Insurers Created Successful');

  });

  test('Test 2 - Search Insurer', async () => {
    await certificatePage.SearchInsurer();
    console.log('Insurers Searched Successful');


  });

  test('Test 3 - Edit Insurer', async () => {
    await certificatePage.EditInsurer();
    console.log('Insurers Edit Successful');

  })


  test('Test 4 - Filter Insurer', async () => {
    await certificatePage.FilterInsurer();
    console.log('Insurers Filter Successful');

  })

  test('Test 5 - Export Insurers', async () => {
    await certificatePage.ExportInsurers();
    console.log('Insurers Export Successful');

  })

  test.afterAll(async () => {
    await page.close();
    await context.close();
  });
});