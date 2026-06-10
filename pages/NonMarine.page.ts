import { Page } from '@playwright/test';

export class NonMarinePage {
    constructor(private page: Page) { }

    async navigate() {
        await this.page.waitForTimeout(3000);
        await this.page.goto('https://newdev.anovamarine.com/revised/admin/sales/sales_overview/0/0/5');
    }

    async createNonMarine() {
        const page = this.page;

        await page.goto('https://newdev.anovamarine.com/revised/admin/sales/sales_overview/0/0/5');
        await page.getByRole('checkbox', { name: 'Broker Billing Only' }).check();
        await page.getByRole('combobox', { name: 'Select Sub Product Type' }).click();
        await page.getByRole('option', { name: 'Non-Marine ANOVA Open Cargo' }).click();
        await page.getByRole('textbox', { name: 'Sum Insured ($)' }).click();
        await page.getByRole('textbox', { name: 'Sum Insured ($)' }).fill('1000');
        await page.getByRole('combobox', { name: 'Select Client' }).click();
        await page.getByRole('searchbox', { name: 'Search' }).fill('keri');
        await page.getByRole('option', { name: 'Keri Anderson Client Company' }).click();
        await page.getByRole('combobox', { name: 'Select Underwriter' }).click();
        await page.getByRole('option', { name: 'TT Club' }).click();
        await page.getByRole('combobox', { name: 'Select Broker' }).click();
        await page.getByRole('searchbox', { name: 'Search' }).fill('keri');
        await page.getByRole('option', { name: 'Keri Anderson FBroker' }).click();
        await page.getByRole('button', { name: 'Save' }).click();
        await page.waitForTimeout(2000)

        await page.getByRole('button', { name: 'OK' }).click();
        await page.waitForTimeout(2000)


    }

    async EditNonMarine() {
        const page = this.page;
        await page.goto('https://newdev.anovamarine.com/revised/admin/sales');
        await page.waitForTimeout(2000)

        await page.getByRole('link').filter({ hasText: /\d{2}\/\d{2}\/\d{4}/ }).first().click({ timeout: 3000 });
        await page.getByRole('combobox', { name: 'Pending' }).click();
        await page.getByRole('option', { name: 'Active' }).click();
        await page.getByRole('button', { name: 'Save' }).click();
        await page.getByRole('button', { name: 'OK' }).click();
    }

    async Approve() {

        const page = this.page;

        await page.goto('https://newdev.anovamarine.com/revised/admin/sales/approval_requests');

        //Approve or Reject the Liability application randomly
        // const action = Math.random() < 0.5 ? 'Approve' : 'Reject';

        await page.locator('.btn.btn-sm.btn-icon').first().click();

        await page.getByRole('link', { name: 'Approve' }).click();
        await page.getByRole('button', { name: 'Yes' }).click();
        await page.waitForTimeout(3000);
        await page.getByRole('button', { name: 'OK' }).click();
    }

    async FilterNonMarine() {
        const page = this.page;

        await page.goto('https://newdev.anovamarine.com/revised/admin/sales/approval_requests');

        await page.getByText('Filter', { exact: true }).click();
        const status = Math.random() < 0.5 ? 'Approved' : 'Rejected';
        await page.getByRole('combobox', { name: 'Pending' }).click();
        await page.getByRole('option', { name: status }).click();

        console.log(`Selected Status: ${status}`);

        await page.getByRole('combobox', { name: 'All' }).first().click();

        await page.getByRole('option', { name: 'Non-Marine Products' }).click();
        await page.getByRole('button', { name: 'Apply' }).click();
    }

    async GenerateInvoice() {
        await this.page.goto('https://newdev.anovamarine.com/revised/admin/sales');
        await this.page.reload();
        await this.page.waitForTimeout(2000);
        await this.page.locator('xpath=//*[@id="myformClaims"]/div[2]/div/div/div/div[1]/div[2]/table/tbody/tr[1]/td[8]/div/div/a').click();
        await this.page.getByRole('link', { name: 'Installments' }).click();



        await this.page.getByRole('button', { name: 'Generate & Send Invoice' }).click();
        await this.page.getByRole('button', { name: 'Yes' }).click();
        await this.page.getByRole('button', { name: 'OK' }).click();

    }
    async downloadfiles() {
        await this.page.goto('https://newdev.anovamarine.com/revised/admin/sales');
        await this.page.reload();

        //CERT Downloaded
        const downloadPromise = this.page.waitForEvent('download');

        await this.page.locator('a[href*="download_certificate_pdf"]').first().click();

        const download = await downloadPromise;

        //Invoice Downloaded
        const download1Promise = this.page.waitForEvent('download');
        await this.page.locator('a[href*="download_invoice_pdf"]').first().click();
        const download1 = await download1Promise;

    }
}