import { test, expect, Browser, BrowserContext, Page } from '@playwright/test';
import { LoginPage } from '../pages/login.page'
import { UnderwritersPage } from '../pages/Underwriters.page';

let context: BrowserContext;
let page: Page;
let companyName: string;


test.describe.serial('Underwriter Flow', () => {
    test.setTimeout(100000);
    let certificatePage: UnderwritersPage;

    // Before All
    test.beforeAll(async ({ browser }) => {

        context = await browser.newContext();
        page = await context.newPage();
        certificatePage = new UnderwritersPage(page);
    });

    test('Login Underwriter', async () => {

        test.setTimeout(100000);
        await page.setViewportSize({ width: 1920, height: 1080 });
        const loginPage = new LoginPage(page);
        // Login
        await loginPage.navigate();
        await page.waitForTimeout(2000);
        await loginPage.login('keri.anderson97+admin@gmail.com', '123456');
        console.log('Login Successful For Underwriters Flow');
        await certificatePage.navigate();

    });

    test('Test 1 - Underwriter Creation', async () => {
        await certificatePage.navigate();
        await certificatePage.CreateUnderwriters();

        console.log('Underwriter Creation Successful');
    });

    test('Test 2 - Search Underwriters', async () => {
        await certificatePage.SearchUnderwriter();
    })

    test('Test 3 - Edit Underwriter', async () => {
        await certificatePage.EditUnderwriter();
    })

    test('Test 4 - Filter Underwriters', async () => {
        await certificatePage.FilterUnderwriter();
        console.log('Filter applied and reset successfully');

    });

    test('Test 5 - Export Underwriters', async () => {
        await certificatePage.ExportUnderwriters();
        console.log('Export initiated successfully');
    })

    test.afterAll(async () => {
        await context.close();
        console.log('Browser Closed Successfully for Underwriters Flow');
    })

});