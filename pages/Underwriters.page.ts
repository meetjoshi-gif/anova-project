import { test, expect, Browser, BrowserContext, Page } from '@playwright/test';
import path from 'path';

let context: BrowserContext;
let page: Page;
let companyName: string;

export class UnderwritersPage {

    constructor(public page: Page) { }

    async navigate() {
        await this.page.waitForTimeout(3000);
        await this.page.goto('https://newdev.anovamarine.com/revised/admin/users_underwriters');
    }

    async CreateUnderwriters() {
        const page = this.page;

        await page.reload();
        await page.getByRole('link', { name: 'Add New Underwriter' }).click();
        companyName = `Underwriter_${Date.now()}`;
        const phone = `9${Math.floor(100000000 + Math.random() * 900000000)}`;
        const taxId = `TAX${Math.floor(Math.random() * 100000)}`;

        await page.getByRole('textbox', { name: 'Company Name' }).fill(companyName);

        await page.getByRole('textbox', { name: 'Phone' }).fill(phone);

        await page.getByRole('textbox', { name: 'Tax ID or EIN' }).fill(taxId);
        const filePath = path.join(process.cwd(), 'uploads', 'images.png');
        await page.getByRole('button', { name: 'Underwriter Logo' }).setInputFiles(filePath);
        //await page.getByRole('button', { name: 'Underwriter Logo' }).setInputFiles('C:\\Users\\meet.joshi\\Anova Project\\uploads\\images.png');
        await page.getByRole('combobox', { name: 'Select Country' }).click();
        await page.getByRole('searchbox', { name: 'Search' }).fill('UNite');
        await page.getByRole('option', { name: 'United States', exact: true }).click();
        await page.getByRole('textbox', { name: 'Address Line 1' }).fill('11 Wall Street');
        await page.getByRole('textbox', { name: 'City' }).fill('NY');
        await page.getByRole('combobox', { name: 'Select State' }).click();
        await page.getByRole('searchbox', { name: 'Search' }).fill('New');
        await page.getByRole('option', { name: 'New York' }).click();
        await page.getByRole('textbox', { name: 'Postal Code' }).fill('10010');
        await page.getByRole('button', { name: 'Save Underwriter' }).click();
        await page.getByRole('button', { name: 'Okay' }).click();

    }
    async SearchUnderwriter() {
        const page = this.page;


        await page.getByRole('textbox', { name: 'Search by Company Name or' }).click();
        await page.getByRole('textbox', { name: 'Search by Company Name or' }).fill(companyName);
        await page.getByRole('button').filter({ hasText: /^$/ }).click();
        console.log('Search executed successfully for Company Name:', companyName);


    }
    async EditUnderwriter() {
        const page = this.page;

        await page.getByRole('link', { name: companyName }).click();
        const underwriterName = `Underwriter_${Date.now()}`;

        await page.getByRole('textbox', { name: 'Underwriter Name' }).fill(underwriterName);
        await page.getByRole('textbox', { name: 'Automated Liability' }).fill('10');
        await page.getByRole('textbox', { name: 'Insurer Name and Rating (for' }).fill('TESTING RATING QUOTE');
        await page.getByRole('textbox', { name: 'AI Liability Cost' }).fill('10');
        await page.getByRole('textbox', { name: 'AI Liability Fee AI Liability' }).fill('10');
        await page.getByRole('textbox', { name: 'AI Liability Minimum Fee' }).fill('10');
        await page.getByRole('combobox', { name: 'Active' }).first().click();
        await page.getByRole('option', { name: 'Inactive' }).click();

        await page.getByRole('button', { name: 'Save Underwriter' }).click();
        await page.getByRole('button', { name: 'Okay' }).click();
        console.log('Underwriter edited successfully with Company Name:', underwriterName);

    }

    async FilterUnderwriter() {
        const page = this.page;
        await page.reload();

        await page.getByText('Filter', { exact: true }).click();
        await page.getByRole('combobox', { name: 'Select Country' }).click();
        await page.getByRole('searchbox', { name: 'Search' }).fill('UNite');
        await page.getByRole('option', { name: 'United States', exact: true }).click();
        await page.getByRole('combobox', { name: 'Select State' }).click();
        await page.getByRole('searchbox', { name: 'Search' }).fill('New');
        await page.getByRole('option', { name: 'New York' }).click();
        await page.getByRole('combobox', { name: 'Active' }).click();
        await page.getByRole('option', { name: 'All' }).click();
        await page.getByRole('button', { name: 'Apply' }).click();
        await page.reload();
        await page.getByText('Filter', { exact: true }).click();
        await page.getByRole('link', { name: 'Reset' }).click({ timeout: 5000 });
        // Collumn 1: Filter applied and reset successfully
        await page.reload();

        await page.getByText('Columns Setting').click();
        await page.getByRole('checkbox', { name: 'Contact Name' }).uncheck();
        await page.getByRole('checkbox', { name: 'Email' }).uncheck();
        await page.getByRole('checkbox', { name: 'Phone' }).uncheck();
        await page.getByRole('button', { name: 'Apply' }).click();
        await page.getByRole('button', { name: 'OK' }).click();
        await page.reload();

        await page.getByText('Columns Setting').click();

        await page.getByRole('button', { name: 'Reset' }).click();
        await page.getByRole('button', { name: 'OK' }).click();
    }

    async ExportUnderwriters() {
        const page = this.page;

        const downloadPromise = page.waitForEvent('download');
        await page.getByRole('link', { name: 'Export as XLS' }).click();
        const download = await downloadPromise;
    }
}   