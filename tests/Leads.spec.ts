import { test, expect, Browser, BrowserContext, Page } from '@playwright/test';
import { LoginPage } from '../pages/login.page'
import { LeadPage } from '../pages/Lead.page';

let context: BrowserContext;
let page: Page;
let companyName: string;
let phoneNumber: string;


test.describe.serial('Underwriter Flow', () => {
    test.setTimeout(100000);
    let certificatePage: LeadPage;

    // Before All
    test.beforeAll(async ({ browser }) => {

        context = await browser.newContext();
        page = await context.newPage();
        certificatePage = new LeadPage(page);
    });

    test('Login Lead', async () => {

        test.setTimeout(100000);
        await page.setViewportSize({ width: 1920, height: 1080 });
        const loginPage = new LoginPage(page);
        // Login
        await loginPage.navigate();
        await page.waitForTimeout(2000);
        await loginPage.login('keri.anderson97+admin@gmail.com', '123456');
        console.log('Login Successful For Lead Flow');
        await certificatePage.navigate();

    });


    test('Test 1 - Leads Creation', async () => {
        await certificatePage.CreateLead();
        console.log('Lead created successfully');
    });

    test('Test 2 - Search Lead', async () => {
        await certificatePage.SearchLead();
        console.log('Lead Searched successfully');

    })

    test('Test 3 - Edit Lead', async () => {
        await certificatePage.EditLead();

        console.log('Lead Edit successfully');

    })

    test('Test 4 - Filter and Column Settings', async () => {
        await certificatePage.FilterLead();
        console.log('Lead Filter successfully');


    })

    test('Test 5 - Export Lead', async () => {
        await certificatePage.ExportLead();
        console.log('Lead Export successfully');


    })

    test.afterAll(async () => {
        await context.close();
        console.log('Browser Closed Successfully for Leads Flow');
    })

});