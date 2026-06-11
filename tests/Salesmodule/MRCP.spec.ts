import { test, expect } from '@playwright/test';

test('Monthly Reporting Cargo Policy ', async ({ page }) => {
    await page.goto('https://newdev.anovamarine.com/revised/login/index');
    await page.getByRole('textbox', { name: 'Email' }).fill('keri.anderson97+admin@gmail.com');
    await page.getByRole('textbox', { name: 'Password' }).fill('123456');
    await page.getByRole('button', { name: 'Log In' }).click();
    await page.waitForTimeout(3000);
    await page.goto('https://newdev.anovamarine.com/revised/admin/sales/sales_overview/0/0/9');
    await page.reload()
    await page.getByRole('checkbox', { name: 'Is Minimum and Deposit?' }).check();
    await page.getByRole('combobox', { name: 'Select Sub Product Type' }).click();
    await page.getByRole('option', { name: 'Monthly Reporting Cargo', exact: true }).click();
    await page.getByRole('textbox', { name: 'Minimum and Deposit ($)' }).fill('1000');
    await page.getByRole('combobox', { name: 'Select Client' }).click();
    await page.getByRole('searchbox', { name: 'Search' }).fill('keri');
    await page.getByRole('option', { name: 'Keri Anderson Client Company' }).click();
    await page.getByRole('combobox', { name: 'Select Underwriter' }).click();
    await page.getByRole('option', { name: 'AIG', exact: true }).click();
    await page.getByRole('combobox', { name: 'Select Broker' }).click();
    await page.getByRole('searchbox', { name: 'Search' }).fill('keri');
    await page.getByRole('option', { name: 'Keri Anderson FBroker' }).click();
    await page.getByRole('textbox', { name: 'Gross Minimum and Deposit ($)' }).fill('1000');
    await page.getByRole('checkbox', { name: 'Automatic Policy Number' }).check();
    await page.getByRole('combobox', { name: 'Pending' }).click();
    await page.getByRole('option', { name: 'Active' }).click();
    await page.getByRole('button', { name: 'Save' }).click();
    await page.getByRole('button', { name: 'OK' }).click();

    //Download
    const downloadPromise = page.waitForEvent('download');
    await page.locator('a[href*="download_certificate_pdf"]').first().click();
    const download = await downloadPromise;

    //Invoice Downloaded
    const download1Promise = page.waitForEvent('download');
    await page.locator('a[href*="download_invoice_pdf"]').first().click();
    const download1 = await download1Promise;

});