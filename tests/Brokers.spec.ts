import { test, expect, Browser, BrowserContext, Page } from '@playwright/test';
import { LoginPage } from '../pages/login.page';
import { BrokersPage } from '../pages/Brokers.page';

let context: BrowserContext;
let page: Page;
let companyName: string;

test.describe.serial('Broker Flow', () => {

  test.setTimeout(100000);
  let certificatePage: BrokersPage;

  test.beforeAll(async ({ browser }) => {

    context = await browser.newContext();
    page = await context.newPage();
    certificatePage = new BrokersPage(page);
    console.log('Login Successful For Broker Flow');
  });

  test('Login Brokers', async () => {

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


  test('Test 1 - Broker Creation', async () => {
    await certificatePage.CreateBroker();
  });

  test('Test 2 - Search the Broker', async () => {
    await certificatePage.SearchBroker();

  });

  test('Test 3 - Edit the Broker', async () => {
    await certificatePage.EditBroker();
  });

  test('Test 4 - Filter the Broker', async () => {
    await certificatePage.FilterBroker();
    console.log('Filter applied and reset successfully');
  });

  test('Test 5 - Export the Broker', async () => {
    await certificatePage.ExportBroker();

    console.log('Export initiated successfully');
  });

  test.afterAll(async () => {
    await context.close();
    console.log('Browser Closed Successfully for Brokers Flow');
  });
});
