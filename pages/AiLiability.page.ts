import { Page } from '@playwright/test';
import path from 'path';


export class AILiabilityPage {
    constructor(public page: Page) { }


    async navigate() {
        const page = this.page;
        await page.waitForTimeout(3000);
        await page.goto('https://newdev.anovamarine.com/revised/admin/ai_liability_submissions/add_edit_ai_liability_submission');

    }
    async CreateLogistiq() {
        const page = this.page;
        //Logistiq
        await page.getByRole('combobox', { name: 'Anova' }).click();
        await page.getByRole('option', { name: 'Logistiq' }).click();
        await page.getByRole('combobox', { name: 'Select Broker' }).click();
        await page.getByRole('option', { name: 'Keri Anderson FBroker' }).click();
        await page.getByRole('combobox', { name: 'Select' }).first().click();
        await page.getByRole('option', { name: '1) Lloyd\'s - Chaucer' }).click();
        await page.getByRole('button', { name: 'Continue' }).click();

        //Step 2
        await page.getByRole('textbox', { name: 'Client Name' }).click();
        await page.getByRole('textbox', { name: 'Client Name' }).fill('Keri');
        await page.getByRole('heading', { name: 'Name: Keri Anderson Client' }).click();
        await page.getByRole('button', { name: 'Continue' }).click();

        //Step 3
        await page.getByRole('textbox', { name: 'Future GFR' }).fill('$100');
        await page.getByRole('textbox', { name: 'Future Load Count' }).fill('100');
        await page.getByRole('checkbox', { name: 'Global' }).check();
        await page.getByRole('checkbox', { name: 'Mexico' }).check();
        await page.getByRole('checkbox', { name: 'USA' }).check();
        await page.getByRole('checkbox', { name: 'Canada' }).check();
        await page.getByRole('button', { name: 'Continue' }).click();

        //Step 4
        await page.waitForTimeout(2000)
        await page.getByRole('button', { name: 'Confirm Submission' }).click();
        await page.waitForTimeout(3000)
        await page.getByRole('button', { name: 'OK' }).click();

    }

    async CreateAnova() {
        const page = this.page;

        //Anova
        await page.goto('https://newdev.anovamarine.com/revised/admin/ai_liability_submissions/add_edit_ai_liability_submission');
        await page.getByRole('combobox', { name: 'Select Broker' }).click();
        await page.getByRole('option', { name: 'Keri Anderson FBroker' }).click();
        await page.getByRole('combobox', { name: 'Select' }).first().click();
        await page.getByRole('option', { name: '1) Lloyd\'s - Chaucer' }).click();
        await page.getByRole('button', { name: 'Continue' }).click();

        //Step 2
        await page.getByRole('textbox', { name: 'Client Name' }).click();
        await page.getByRole('textbox', { name: 'Client Name' }).fill('Keri');
        await page.getByRole('heading', { name: 'Name: Keri Anderson Client Company' }).click();
        await page.getByRole('button', { name: 'Continue' }).click();

        //Step 3
        await page.getByRole('textbox', { name: 'Future GFR' }).fill('$100');
        await page.getByRole('textbox', { name: 'Future Load Count' }).fill('100');
        await page.getByRole('checkbox', { name: 'Global' }).check();
        await page.getByRole('checkbox', { name: 'Mexico' }).check();
        await page.getByRole('checkbox', { name: 'USA' }).check();
        await page.getByRole('checkbox', { name: 'Canada' }).check();
        await page.getByRole('button', { name: 'Continue' }).click();

        //Step 4
        await page.waitForTimeout(2000)

        await page.getByRole('button', { name: 'Confirm Submission' }).click();
        await page.waitForTimeout(2000)

        await page.getByRole('button', { name: 'OK' }).click();

    }

    async CreateQuote() {
        const page = this.page;

        //Creating the Quote
        await page.goto('https://newdev.anovamarine.com/revised/admin/liability_quote_submissions/index')
        await page.locator('.btn.btn-sm.btn-icon').first().click();
        await page.getByRole('link', { name: 'Quotes' }).click();
        await page.getByRole('link', { name: 'Generate Quote' }).click();

        //Step 1
        await page.getByRole('textbox', { name: 'Quote Description' }).click();
        await page.getByRole('textbox', { name: 'Quote Description' }).fill('Quote description Testing');
        await page.getByRole('radio', { name: 'No' }).check();
        await page.getByRole('combobox', { name: 'Select Billing Interval' }).click();
        await page.getByRole('option', { name: 'Monthly' }).click();
        await page.getByRole('textbox', { name: 'Aggregate Limit' }).fill('1,0000');
        await page.getByRole('button', { name: 'Continue' }).click();

        //Step 2
        await page.getByRole('row', { name: 'International Freight' }).getByLabel('NO').click();
        await page.getByRole('option', { name: 'YES' }).click();
        await page.getByRole('row', { name: 'International Freight' }).getByLabel('Air').check();
        await page.getByRole('button', { name: 'Continue' }).click();

        //Step 3
        await page.getByRole('row', { name: 'Cargo Legal Liability NO' }).getByRole('combobox').click();
        await page.getByRole('option', { name: 'YES' }).click();
        await page.getByRole('row', { name: 'Cargo Legal Liability YES' }).getByPlaceholder('USD LIMIT: (per occurrence)').fill('1');
        await page.getByRole('row', { name: 'Cargo Legal Liability YES $' }).getByPlaceholder('USD LIMIT: (in the aggregate)').fill('1');
        await page.getByRole('row', { name: 'Cargo Legal Liability YES $1 $' }).getByPlaceholder('Deductible').fill('1');
        await page.getByRole('row', { name: 'Cargo Legal Liability YES $1 $1 $' }).getByPlaceholder('Premium').fill('1');
        await page.locator('#coverageScheduleBodyNonMarine > tr > td:nth-child(3) > .select2 > .selection > .select2-selection').first().click();
        await page.getByRole('option', { name: 'YES' }).click();
        await page.locator('input[name="coverage_schedule_nm[0][usd_limit]"]').fill('1');
        await page.locator('input[name="coverage_schedule_nm[0][usd_limit_in_aggregate]"]').fill('1');
        await page.locator('input[name="coverage_schedule_nm[0][deductible]"]').fill('1');
        await page.locator('input[name="coverage_schedule_nm[0][premium]"]').fill('1');
        await page.getByRole('button', { name: 'Continue' }).click();

        //Step 4
        await page.locator('input[name="se_premium[0]"]').click();
        await page.locator('input[name="se_premium[0]"]').fill('1');
        await page.locator('input[name="optional_se_premium[0]"]').click();
        await page.locator('input[name="optional_se_premium[0]"]').fill('1');
        await page.getByRole('button', { name: 'Continue' }).click()

        //Step 5
        await page.locator('.form-control.form-control-sm.parties-input').fill('1');
        await page.getByRole('textbox', { name: 'GFRS' }).fill('1');
        await page.getByRole('textbox', { name: 'Average Value' }).fill('1');
        await page.getByRole('textbox', { name: 'Max Value' }).fill('1');
        await page.getByRole('textbox', { name: 'Number of Loads' }).fill('1');
        await page.getByRole('combobox', { name: 'Select Commodity' }).click();
        await page.getByRole('option', { name: 'General Goods' }).click();
        await page.getByRole('row', { name: 'Select $0.00 Included', exact: true }).getByLabel('Select').click();
        await page.getByRole('option', { name: 'Yes' }).click();
        await page.getByRole('textbox', { name: 'Limit Per Load' }).fill('1');
        await page.getByRole('textbox', { name: 'Aggregate Limit' }).fill('1');
        await page.getByRole('textbox', { name: 'Deductible' }).fill('1');
        await page.getByRole('textbox', { name: 'Cargo Note' }).fill('1');
        await page.getByRole('row', { name: 'Yes 1 $1 $1 1 $0.00 Included' }).getByPlaceholder('Rate %').fill('1');
        await page.locator('td').filter({ hasText: 'Select Yes No Select' }).getByLabel('Select').click();
        await page.getByRole('option', { name: 'Yes' }).click();
        await page.getByRole('combobox', { name: 'Select', exact: true }).click();
        await page.getByRole('option', { name: '1) Covered to the lesser of' }).click();
        await page.getByRole('row', { name: 'Yes 1) Covered to the lesser' }).getByPlaceholder('Rate %').fill('1');
        await page.getByRole('textbox', { name: 'Included Coverage Minimum' }).fill('1');
        await page.getByRole('combobox', { name: 'Select TRIA Coverage' }).click();
        await page.getByRole('option', { name: '0.5%' }).click();
        await page.getByRole('radio', { name: 'No' }).check();
        const filePath = path.join(process.cwd(), 'uploads', 'Claimupload.pdf');
        await page.getByRole('button', { name: 'Choose File' }).setInputFiles(filePath);
        await page.getByRole('textbox', { name: 'Custom File Name' }).fill('Endorsement Test');
        await page.locator('#warehouseContainer').getByRole('button', { name: 'X' }).click();
        await page.getByRole('button', { name: 'Continue' }).click();

        //Step 6
        await page.reload()
        await page.waitForTimeout(2000)
        await page.getByRole('button', { name: 'Confirm Quote' }).click();
        await page.waitForTimeout(2000)

        await page.getByRole('button', { name: 'Okay' }).click();

    }

    async DownloadQuote() {
        const page = this.page;

        //Download the Quote
        await page.locator('.btn.btn-sm.btn-icon').first().click();
        const downloadPromise = page.waitForEvent('download');
        await page.getByRole('link', { name: 'Download' }).click();
        const download = await downloadPromise;

    }

    async AcceptQuote() {
        const page = this.page;

        //Accept Quote
        await page.locator('.btn.btn-sm.btn-icon').first().click();
        await page.getByRole('link', { name: 'Accept', exact: true }).click();
        await page.getByRole('combobox', { name: 'Select Broker Name' }).click();
        await page.getByRole('option', { name: 'Keri Anderson FBroker' }).click();
        const filePath1 = path.join(process.cwd(), 'uploads', 'Claimupload.pdf');
        await page.getByRole('button', { name: 'Upload file' }).setInputFiles(filePath1);
        await page.getByRole('button', { name: 'Submit' }).click();
        await page.getByRole('button', { name: 'Okay' }).click();
    }

    async GeneratePolicy() {
        const page = this.page;
        //Generate Policy
        await page.locator('.btn.btn-sm.btn-icon').first().click();

        await page.getByRole('link', { name: 'Generate Policy' }).click();
        await page.getByRole('combobox', { name: 'Select Accept or Reject' }).first().click();
        await page.getByRole('option', { name: 'Accept' }).click();
        await page.getByRole('combobox', { name: 'Select Accept or Reject' }).click();
        await page.getByRole('option', { name: 'Accept' }).click();
        await page.getByRole('button', { name: 'Save' }).click();
        await page.getByRole('button', { name: 'Okay' }).click();
    }

    async EditPolicy() {
        const page = this.page;

        //Edit Policy

        await page.goto('https://newdev.anovamarine.com/revised/admin/sales');
        await page.getByRole('link').filter({ hasText: /\d{2}\/\d{2}\/\d{4}/ }).first().click();
        await page.getByRole('combobox', { name: 'Select Sub Product Type' }).click();
        await page.getByRole('option', { name: 'AI Liability' }).click();
        await page.getByRole('combobox', { name: 'Pending' }).click();
        await page.getByRole('option', { name: 'Active' }).click();
        await page.getByRole('button', { name: 'Save' }).click();
        await page.getByRole('button', { name: 'OK' }).click();
    }

    async DownloadPolicy() {
        const page = this.page;

        await page.goto('https://newdev.anovamarine.com/revised/admin/sales');

        const downloadPromise1 = page.waitForEvent('download');
        await page.locator('a[href*="download_certificate_pdf"]').first().click();
        const download1 = await downloadPromise1;

        //Invoice Downloaded
        const download1Promise = page.waitForEvent('download');
        await page.locator('a[href*="download_invoice_pdf"]').first().click();
        const download2 = await download1Promise;

    }

}    