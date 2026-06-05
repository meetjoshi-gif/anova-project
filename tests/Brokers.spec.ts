import { test, expect, Browser, BrowserContext, Page } from '@playwright/test';

let context: BrowserContext;
let page: Page;
let companyName: string;

test.describe.serial('Broker Flow', () => {

  // Before All
  test.beforeAll(async ({ browser }) => {

    context = await browser.newContext();
    page = await context.newPage();
     await page.goto('https://newdev.anovamarine.com/revised/login/index');

        await page.getByRole('textbox', { name: 'Email' }).fill('keri.anderson97+admin@gmail.com');
        await page.getByRole('textbox', { name: 'Password' }).fill('123456');
        await page.getByRole('button', { name: 'Log In' }).click();
    await page.waitForTimeout(3000);

    console.log('Login Successful For Brokers Flow');
  });



  test('Test 1 - Broker Creation', async () => {
    await page.reload();
    await page.goto('https://newdev.anovamarine.com/revised/admin/users_brokers');
    await page.reload();
    await page.getByRole('link', { name: 'Add New Broker' }).click();
    const options = ['Anova', 'Logistiq', 'Both'];

    // Pick random value
    const randomOption = options[Math.floor(Math.random() * options.length)];
    await page.getByRole('combobox', { name: 'Anova' }).click();
    await page.getByRole('option', { name: randomOption }).click();
    console.log(`Selected option: ${randomOption}`);

    await page.getByRole('checkbox', { name: 'Apply for Other Product' }).check();
    await page.locator('#in_is_mtc_excess').check();
    await page.getByRole('checkbox', { name: 'Cargo', exact: true }).check();
    await page.getByRole('checkbox', { name: 'Liability', exact: true }).check();
    await page.getByRole('checkbox', { name: 'AI Liability' }).check();
    await page.getByRole('checkbox', { name: 'Monthly Reporting Cargo Policy' }).check();
    await page.getByRole('checkbox', { name: 'Automated Liability', exact: true }).check();
    await page.getByRole('checkbox', { name: 'Other', exact: true }).check();



    companyName = `Broker_${Date.now()}`;
    const phone = `9${Math.floor(100000000 + Math.random() * 900000000)}`;

    await page.getByRole('textbox', { name: 'Company Name' }).fill(companyName);
    await page.getByRole('textbox', { name: 'Phone' }).fill(phone);

    await page.getByRole('combobox', { name: 'Select Country' }).click();
    await page.getByRole('searchbox', { name: 'Search' }).fill('Unite');
    await page.getByRole('option', { name: 'United States', exact: true }).click();
    await page.getByRole('textbox', { name: 'Address Line 1' }).fill('11 Wall Street');
    await page.getByRole('textbox', { name: 'City' }).fill('NY');
    await page.getByRole('combobox', { name: 'Select State' }).click();
    await page.getByRole('searchbox', { name: 'Search' }).fill('New');
    await page.getByRole('option', { name: 'New York' }).click();
    await page.getByRole('textbox', { name: 'Postal Code' }).fill('10010');

    const underwriters = ['AIG', 'TT Club'];

    const randomUnderwriter =
      underwriters[Math.floor(Math.random() * underwriters.length)];

    await page.getByRole('combobox', { name: /Underwriter/i }).click();

    await page.getByRole('option', { name: randomUnderwriter, exact: true }).click({ force: true });
    await page.getByRole('button', { name: 'Save Broker' }).click();
    await page.getByRole('button', { name: 'Okay' }).click();

    console.log('Broker created successfully with Company Name:', companyName);
  });

  test('Test 2 - Search the Broker', async () => {
    await page.getByRole('textbox', { name: 'Search by Company Name or' }).fill(companyName);
    await page.getByRole('button').filter({ hasText: /^$/ }).click();
    console.log('Searched for Broker:', companyName);
  });

  test('Test 3 - Edit the Broker', async () => {
    await page.getByRole('link', { name: companyName }).click();
    await page.getByRole('radio', { name: 'Franchise Broker' }).check();
    await page.getByRole('checkbox', { name: 'Non-Marine Products' }).check();
    await page.getByRole('checkbox', { name: 'Bond' }).check();
    await page.locator('#product_7').check();
    await page.getByRole('textbox', { name: 'Tax ID or EIN' }).fill(`TAX${Date.now()}`);
    await page.getByRole('combobox', { name: 'Active' }).click();
    await page.getByRole('option', { name: 'Inactive' }).click();
    await page.getByRole('button', { name: 'Save Broker' }).click();
    await page.getByRole('button', { name: 'Okay' }).click();
    console.log('Broker edited successfully with Company Name:', companyName);
  });

  test('Test 4 - Filter the Broker', async () => {
    await page.reload();
    await page.getByText('Filter', { exact: true }).click();
    await page.getByRole('combobox', { name: 'Select Country' }).click();
    await page.getByRole('searchbox', { name: 'Search' }).fill('United');
    await page.getByRole('option', { name: 'United States', exact: true }).click();
    await page.getByRole('combobox', { name: 'Active' }).click();
    await page.getByRole('option', { name: 'Inactive' }).click();
    const options = ['Anova', 'Logistiq'];
    const randomOption = options[Math.floor(Math.random() * options.length)];

    await page.getByRole('combobox', { name: 'All' }).click();
    await page.getByRole('option', { name: randomOption }).click();

    await page.getByRole('button', { name: 'Apply' }).click();
    await page.reload();

    await page.getByText('Filter', { exact: true }).click();
    await page.getByRole('link', { name: 'Reset' }).click();
    console.log('Filter applied and reset successfully');
  });

  test('Test 5 - Export the Broker', async () => {
    const downloadPromise = page.waitForEvent('download');
    await page.getByRole('link', { name: 'Export as XLS' }).click();
    const download = await downloadPromise;

    console.log('Export initiated successfully');
  });

  test.afterAll(async () => {
    await context.close();
    console.log('Browser Closed Successfully for Brokers Flow');
  });
});
