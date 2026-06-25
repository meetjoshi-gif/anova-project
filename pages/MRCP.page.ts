import { Page, expect } from '@playwright/test';

export class MRCPPage {
    constructor(private page: Page) { }

    async navigate() {
        await this.page.waitForTimeout(3000);
        await this.page.goto('https://newdev.anovamarine.com/revised/admin/sales/sales_overview/0/0/9');

    }

    async CreateMRCP() {
        const page = this.page
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
    }

    async DownloadFiles() {
        const page = this.page

        const downloadPromise = page.waitForEvent('download');
        await page.locator('a[href*="download_certificate_pdf"]').first().click();
        const download = await downloadPromise;

        //Invoice Downloaded
        const download1Promise = page.waitForEvent('download');
        await page.locator('a[href*="download_invoice_pdf"]').first().click();
        const download1 = await download1Promise;
    }
}
