import { test, expect, Browser, BrowserContext, Page } from '@playwright/test';

let context: BrowserContext;
let page: Page;
let companyName: string;
let phoneNumber: string;


test.describe.serial('Leads Flow ', () => {

    // Before All
    test.beforeAll(async ({ browser }) => {

        context = await browser.newContext();
        page = await context.newPage();

        await page.goto('https://newdev.anovamarine.com/revised/login/index');

        await page.getByRole('textbox', { name: 'Email' }).fill('keri.anderson97+admin@gmail.com');

        await page.getByRole('textbox', { name: 'Password' }).fill('123456');

        await page.getByRole('button', { name: 'Log In' }).click();

        await page.waitForTimeout(5000);

        console.log('Login Successful');
    });


    test('Test 1 - Leads Creation', async () => {

        await page.goto('https://newdev.anovamarine.com/revised/admin/users_leads');
        await page.reload();
        await page.getByRole('link', { name: 'Leads' }).click();
        await page.getByRole('link', { name: 'Add New Lead' }).click();

        const options = ['Anova', 'Logistiq'];

        // Pick random value
        const randomOption = options[Math.floor(Math.random() * options.length)];
        await page.getByRole('combobox', { name: 'Select Site' }).click();
        await page.getByRole('option', { name: randomOption }).click();
        console.log(`Selected option: ${randomOption}`);

        companyName = `Lead_${Date.now()}`;

        phoneNumber = `9${Math.floor(100000000 + Math.random() * 900000000)}`;

        await page.getByRole('textbox', { name: 'Company Name' }).fill(companyName);

        await page.getByRole('textbox', { name: 'Phone' }).fill(phoneNumber);

        await page.getByRole('combobox', { name: 'Select Country' }).click();
        await page.getByRole('searchbox', { name: 'Search' }).fill('Unite');
        await page.getByRole('option', { name: 'United States', exact: true }).click();
        await page.getByRole('textbox', { name: 'Address Line 1' }).fill('11 Wall Street');
        await page.getByRole('textbox', { name: 'City' }).fill('NY');
        await page.getByRole('combobox', { name: 'Select state' }).click();
        await page.getByRole('searchbox', { name: 'Search' }).fill('New', { timeout: 5000 });
        await page.getByRole('option', { name: 'New York' }).click();
        await page.getByRole('textbox', { name: 'Postal Code' }).fill('90001');
        await page.getByRole('textbox', { name: 'Note' }).click();
        await page.getByRole('textbox', { name: 'Note' }).fill('TESTING THE NOTE FOR LEADS');
        await page.getByRole('button', { name: 'Save Lead' }).click();
        await page.getByRole('button', { name: 'Okay' }).click();
    });

    test('Test 2 - Search Lead', async () => {
        await page.getByRole('textbox', { name: 'Search by Lead Name or Email' }).click();
        await page.getByRole('textbox', { name: 'Search by Lead Name or Email' }).fill(companyName);
        await page.getByRole('button').filter({ hasText: /^$/ }).click();
    })

    test('Test 3 - Edit Lead', async () => {
        await page.getByRole('link', { name: companyName }).click();
        await page.getByRole('combobox', { name: 'Active' }).click();
        await page.getByRole('option', { name: 'Inactive' }).click();
        await page.getByRole('button', { name: 'Save Lead' }).click();
        await page.getByRole('button', { name: 'Okay' }).click();

    })

    test('Test 4 - Filter and Column Settings', async () => {
        await page.reload();
        await page.getByText('Filter', { exact: true }).click();
        await page.getByRole('combobox', { name: 'Select Country' }).click();
        await page.getByRole('searchbox', { name: 'Search' }).fill('Unite');
        await page.getByRole('option', { name: 'United States', exact: true }).click();
        await page.getByRole('combobox', { name: 'Active' }).click();
        await page.getByRole('option', { name: 'All' }).click();
        await page.getByRole('button', { name: 'Apply' }).click();
        await page.reload();
        await page.getByText('Filter', { exact: true }).click();
        await page.getByRole('link', { name: 'Reset' }).click();
        await page.reload();

        await page.getByText('Columns Setting').click();
        await page.getByRole('checkbox', { name: 'Email' }).uncheck();
        await page.getByRole('checkbox', { name: 'Phone' }).uncheck();
        await page.getByRole('checkbox', { name: 'Address' }).uncheck();
        await page.getByRole('button', { name: 'Apply' }).click();
        await page.getByRole('button', { name: 'OK' }).click();
        await page.reload();

        await page.getByText('Columns Setting').click();
        await page.getByRole('button', { name: 'Reset' }).click();
        await page.getByRole('button', { name: 'OK' }).click();

    })

    test('Test 5 - Export Lead', async () => {
        const downloadPromise = page.waitForEvent('download');
        await page.getByRole('link', { name: 'Export as XLS' }).click();
        const download = await downloadPromise;
    })

    test.afterAll(async () => {
        await context.close();
        console.log('Browser Closed Successfully');
    })

});