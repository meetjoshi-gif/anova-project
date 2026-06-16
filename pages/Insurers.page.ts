import { test, expect, Browser, BrowserContext, Page } from '@playwright/test';
import path from 'path';

let context: BrowserContext;
let page: Page;
let insurerName: string;
let phoneNumber: string;

export class InsurersPage {

    constructor(public page: Page) { }

    async navigate() {
        await this.page.waitForTimeout(3000);
        await this.page.goto('https://newdev.anovamarine.com/revised/admin/users_insurers');
    }

    async CreateInsurers() {
        const page = this.page;

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

    }

    async SearchInsurer() {
        const page = this.page;

        await page.getByRole('textbox', { name: 'Search by Company Name or' }).fill(insurerName);

        await page.getByRole('button').filter({ hasText: /^$/ }).click();

        await expect(page.locator('body')).toContainText(insurerName);
    }

    async EditInsurer() {
        const page = this.page;

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

    }

    async FilterInsurer() {
        const page = this.page;

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
    }

    async ExportInsurers() {
        const page = this.page;

        const downloadPromise = page.waitForEvent('download');
        await page.getByRole('link', { name: 'Export as XLS' }).click();
        const download = await downloadPromise;

    }

}