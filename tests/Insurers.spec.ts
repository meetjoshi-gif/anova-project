import { test, expect, Browser, BrowserContext, Page } from '@playwright/test';

let browserContext: BrowserContext;
let page: Page;
let insurerName: string;
let phoneNumber: string;

test.describe.serial('Insurer Module', () => {

  test.beforeAll(async ({ browser }) => {

    browserContext = await browser.newContext();
    page = await browserContext.newPage();

    await page.goto('https://newdev.anovamarine.com/revised/login/index');

    await page.getByRole('textbox', { name: 'Email' }).fill('keri.anderson97+admin@gmail.com');

    await page.getByRole('textbox', { name: 'Password' }).fill('123456');

    await page.getByRole('button', { name: 'Log In' }).click();
  });


  test('Test 1 - Insurers Creation', async () => {

    await page.getByRole('link', { name: ' Users' }).click({ timeout: 5000 });
    await page.goto('https://newdev.anovamarine.com/revised/admin/users_insurers');

    // await page.getByRole('link', { name: 'Insurers' }).click();
    await page.getByRole('link', { name: 'Add New Insurer' }).click();

    insurerName = `Insurer_${Date.now()}`;

    await page.getByRole('textbox', { name: 'Company Name' }).fill(insurerName);

    await page.getByRole('textbox', { name: 'Phone' })
      .fill(`9${Math.floor(100000000 + Math.random() * 900000000)}`);

    await page.getByRole('combobox', { name: 'Select Country' }).click();

    await page.getByRole('searchbox', { name: 'Search' }).fill('Unite');

    await page.getByRole('option', { name: 'United States', exact: true }).click();

    await page.getByRole('textbox', { name: 'Address Line 1' }).fill('12 Wall Street');

    await page.getByRole('textbox', { name: 'City' }).fill('NY');

    await page.getByRole('combobox', { name: 'Select Country' }).click();

    await page.getByRole('searchbox', { name: 'Search' }).fill('New');

    await page.getByRole('option', { name: 'New York' }).click();

    await page.getByRole('textbox', { name: 'Postal Code' }).fill('10010');

    await page.getByRole('textbox', { name: 'Note' }).fill('Testing Note');

    const UMR = Date.now();

    await page.getByRole('textbox', {
      name: 'Unique Market Reference(UMR)/'
    }).fill(`UMR${UMR}`);

    await page.getByRole('button', { name: 'Save Insurer' }).click();

    await page.getByRole('button', { name: 'Okay' }).click();
  });

  test('Test 2 - Search Insurer', async () => {

    await page.getByRole('textbox', { name: 'Search by Company Name or' }).fill(insurerName);

    await page.getByRole('button').filter({ hasText: /^$/ }).click();

    await expect(page.locator('body')).toContainText(insurerName);
  });

  test('Test 3 - Edit Insurer', async () => {
    await page.getByRole('link', { name: insurerName }).click();
    await page.getByRole('textbox', { name: 'Website URL' }).fill('https://google.com');
    phoneNumber = `9${Math.floor(100000000 + Math.random() * 900000000)}`;
    await page.getByRole('textbox', { name: 'Phone' }).fill(phoneNumber);
    await page.getByRole('combobox', { name: 'Active' }).click();
    await page.getByRole('option', { name: 'Inactive' }).click();
    await page.getByRole('textbox', { name: 'New Note' }).fill('Update the Note For Underwriter');
    await page.getByRole('button', { name: 'Post Note' }).click();
    await page.getByRole('button', { name: 'Yes' }).click();
    await page.getByRole('button', { name: 'OK' }).click();
    await page.getByRole('button', { name: 'Save Insurer' }).click();
    await page.getByRole('button', { name: 'Okay' }).click();
  })


  test('Test 4 - Filter Insurer', async () => {
    await page.getByText('Filter', { exact: true }).click();
    await page.getByRole('combobox', { name: 'Select Country' }).click();
    await page.getByRole('searchbox', { name: 'Search' }).fill('United');
    await page.getByRole('option', { name: 'United States', exact: true }).click();
    await page.getByRole('combobox', { name: 'Select State' }).click();
    await page.getByRole('searchbox', { name: 'Search' }).fill('New');
    await page.getByRole('option', { name: 'New York' }).click();

    await page.getByRole('combobox', { name: 'Active' }).click();

    await page.getByRole('option', { name: 'All' }).click();

    await page.getByRole('button', { name: 'Apply' }).click();

    await page.getByText('Filter', { exact: true }).click();

    await page.getByRole('link', { name: 'Reset' }).click({ timeout: 5000 });

    await page.getByText('Columns Setting').click();
    await page.getByRole('checkbox', { name: 'Email' }).uncheck();
    await page.getByRole('checkbox', { name: 'Phone' }).uncheck();
    await page.getByRole('checkbox', { name: 'Address' }).uncheck();
    await page.getByRole('checkbox', { name: 'Status Status' }).uncheck();
    await page.getByRole('button', { name: 'Apply' }).click();
    await page.getByRole('button', { name: 'OK' }).click();

    await page.getByText('Columns Setting').click();
    await page.getByRole('button', { name: 'Reset' }).click();
    await page.getByRole('button', { name: 'OK' }).click();
  })

  test('Test 5 - Export Insurers', async () => {
    const downloadPromise = page.waitForEvent('download');
    await page.getByRole('link', { name: 'Export as XLS' }).click();
    const download = await downloadPromise;
  })

  test.afterAll(async () => {
    await page.close();
    await browserContext.close();
  });
});