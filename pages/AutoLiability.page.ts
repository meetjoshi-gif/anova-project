import { Page } from '@playwright/test';
import path from 'path';


export class AutoLiabilityPage {
    constructor(public page: Page) { }


    async navigate() {
        const page = this.page;
        await page.waitForTimeout(3000);
        await page.goto('https://newdev.anovamarine.com/revised/admin/automated_liability_requests/add_edit_automated_liability_quote_submission');

    }

    async AutoLiabilityCreate() {
        const page = this.page;

        await page.getByRole('combobox', { name: 'Select Broker' }).click();
        await page.getByRole('searchbox', { name: 'Search' }).fill('Keri');
        await page.getByRole('option', { name: 'Keri Anderson FBroker' }).click();
        await page.getByRole('combobox', { name: 'Select Insurance program' }).click();
        await page.getByRole('option', { name: 'TT Club' }).click();
        await page.getByRole('combobox', { name: 'Select Underwriter' }).click();
        await page.getByRole('option', { name: 'Andrea Gomez' }).click();
        await page.getByRole('combobox', { name: 'Select Underwriting assistant' }).click();
        await page.getByRole('option', { name: 'Andrea Gomez' }).click();
        await page.getByRole('combobox', { name: 'Select Deal Manager' }).click();
        await page.getByRole('option', { name: 'Andrea Gomez' }).click();
        await page.locator('#st_company_name').fill('Keri');
        await page.getByRole('heading', { name: 'Name: Keri Anderson Client Company' }).click();
        await page.getByRole('textbox', { name: 'Future GFR' }).fill('100000');
        await page.getByRole('textbox', { name: 'Future Load Count' }).fill('10');
        await page.getByRole('textbox', { name: 'Past Load Count' }).fill('10');
        await page.getByRole('textbox', { name: 'Past GFR' }).fill('100000');
        await page.getByRole('checkbox', { name: 'USA' }).check();
        await page.getByRole('checkbox', { name: 'Canada' }).check();
        await page.getByRole('checkbox', { name: 'Mexico' }).check();
        await page.getByRole('checkbox', { name: 'Global' }).check();
        await page.getByRole('button', { name: 'Save' }).click();
        await page.getByRole('button', { name: 'Okay' }).click();
    }

    async Createquote() {
        const page = this.page;

        await page.reload()
        await page.locator('.btn.btn-sm.btn-icon').first().click({ timeout: 3000 });
        await page.getByRole('link', { name: 'Quotes' }).click();
        await page.getByRole('link', { name: 'Create Automated Liability' }).click();
        await page.getByRole('textbox', { name: 'Quote Description' }).fill('Quote Description working fine');
        await page.locator('#in_is_spcl_contracts2').check();
        await page.getByRole('checkbox', { name: 'Freight Forwarder - AIR' }).check();
        await page.locator('#trading_area_1_1').check();
        await page.getByRole('combobox', { name: 'Select' }).first().click();
        await page.getByRole('option', { name: '2', exact: true }).click({ timeout: 3000 });
        await page.getByRole('combobox', { name: 'Select' }).click();
        await page.getByRole('option', { name: '$5,001 to $' }).click();
        await page.getByRole('checkbox', { name: 'I certify that no more than' }).check();
        await page.getByRole('button', { name: 'Submit Application' }).click();
        await page.getByRole('button', { name: 'Complete Quote' }).click();
    }

    async Accepted() {
        const page = this.page;

        await page.goto('https://newdev.anovamarine.com/revised/admin/automated_liability_requests/automated_liability_quote_submissions');
        await page.reload()

        await page.locator('.btn.btn-sm.btn-icon').first().click({ timeout: 3000 });
        await page.getByRole('link', { name: 'Quotes' }).click();


        //Accpeted Quote
        await page.reload()

        await page.locator('.btn.btn-sm.btn-icon').click();

        await page.getByRole('link', { name: 'Accept', exact: true }).click();
        const filePath = path.join(process.cwd(), 'uploads', 'images.png');
        await page.getByRole('button', { name: 'Upload file' }).setInputFiles(filePath);
        await page.getByRole('button', { name: 'Submit' }).click();
        await page.getByRole('button', { name: 'Okay' }).click();
        //Downlaod the Quote
        const downloadPromisequote = page.waitForEvent('download');

        await page.locator('a[href*="logistics_cover_liability_quote_pdf"]').first().click();

        const downloadqutoe = await downloadPromisequote;

    }

    async GenratePolicy() {
        const page = this.page;

        //  Generate Policy
        await page.reload()

        await page.locator('.btn.btn-sm.btn-icon').click();
        await page.getByRole('link', { name: 'Generate Policy' }).click();
        await page.getByRole('button', { name: 'Submit' }).click();
        await page.getByRole('button', { name: 'Okay' }).click();

        //Download
        await page.reload()

        await page.locator('.btn.btn-sm.btn-icon').click();
        const downloadPromise = page.waitForEvent('download');
        await page.getByRole('link', { name: 'Download' }).click();
        const download = await downloadPromise;

    }

    async EditQuotePolicy() {
        const page = this.page;

        //Edit Quote Policy 
        await page.goto('https://newdev.anovamarine.com/revised/admin/sales');
        await page.getByRole('link').filter({ hasText: /\d{2}\/\d{2}\/\d{4}/ }).first().click();
        await page.reload();
        await page.getByText('Actions').click();
        await page.getByRole('link', { name: 'Edit Certificate' }).click();
        await page.getByRole('button', { name: 'Yes' }).click();
        await page.getByRole('row', { name: 'Errors & Omissions No' }).locator('[id="in_coverage_type_id_picked[]"]').selectOption('1');
        await page.locator('tr:nth-child(10) > td:nth-child(2) > [id="in_coverage_type_id_picked[]"]').selectOption('1');
        await page.locator('tr:nth-child(15) > td:nth-child(2) > [id="in_coverage_type_id_picked[]"]').selectOption('1');
        await page.getByRole('combobox', { name: '$5,001 to $' }).click();
        await page.getByRole('option', { name: '$15,001 to $' }).click();
        await page.getByRole('checkbox', { name: 'I certify that no more than' }).check();
        await page.getByRole('button', { name: 'Submit Application' }).click();
        await page.getByRole('button', { name: 'Complete Quote' }).click();
        await page.getByRole('link', { name: 'Go to Dashboard' }).click();
    }

    async EditQuoteAfterApproveReject() {
        const page = this.page;

        //Approve and Reject quote after Edit
        await page.reload()
        const action = Math.random() < 0.5 ? 'Approve' : 'Reject';

        await page.locator('.btn.btn-sm.btn-icon').first().click();

        if (action === 'Approve') {
            console.log('Selected Action: Approve');

            await page.getByRole('link', { name: 'Approve' }).click();
            await page.getByRole('button', { name: 'Yes' }).click();
            await page.getByRole('button', { name: 'OK' }).click();
        } else {
            console.log('Selected Action: Reject');

            await page.getByRole('link', { name: 'Reject' }).click();
            await page.getByRole('button', { name: 'Yes' }).click();
            await page.getByRole('textbox', { name: 'Reject Reason' }).fill('Testing LC requests reject');
            await page.getByRole('button', { name: 'Reject' }).click();
            await page.getByRole('button', { name: 'Okay' }).click();
        }
    }

    async DownloadAll() {
        const page = this.page;

        // Navigate to the Sales and Download the AutoLiability CERT and Invoice 
        await page.goto('https://newdev.anovamarine.com/revised/admin/sales');

        const downloadPromise1 = page.waitForEvent('download');
        await page.locator('a[href*="download_certificate_pdf"]').first().click();
        const download1 = await downloadPromise1;

        //Invoice Downloaded
        const download1Promise = page.waitForEvent('download');
        await page.locator('a[href*="download_invoice_pdf"]').first().click();
        const download2 = await download1Promise;

        const downloadPromise2 = page.waitForEvent('download');
        await page.getByRole('link', { name: 'Download' }).first().click();
        const download3 = await downloadPromise2;
    }

}    