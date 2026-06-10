import { Page } from '@playwright/test';

export class OtherProductPage {
    constructor(public page: Page) { }

    async navigate() {
        await this.page.waitForTimeout(3000);
        await this.page.goto('https://newdev.anovamarine.com/revised/admin/apply_for_liability_insurance');
    }

    async OtherProductcreate() {
        const page = this.page;
        await page.goto('https://newdev.anovamarine.com/revised/admin/sales/sales_overview/0/0/4');
        await page.getByRole('checkbox', { name: 'Broker Billing Only' }).check();
        await page.getByRole('combobox', { name: 'Select Sub Product Type' }).click();
        await page.getByRole('option', { name: 'ANOVA Open Cargo Policy Template 2016' }).click();
        await page.waitForTimeout(3000);

        const OtherNumber = `Other-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;

        await page.getByRole('textbox', { name: 'Cert #' }).fill(OtherNumber);

        console.log(OtherNumber);

        await page.getByRole('textbox', { name: 'Sum Insured ($)' }).fill('1000');
        await page.getByRole('combobox', { name: 'Select Client' }).click();
        await page.getByRole('searchbox', { name: 'Search' }).fill('Keri');
        await page.getByRole('option', { name: 'Keri Anderson Client Company' }).click();
        await page.getByRole('combobox', { name: 'Select Underwriter' }).click();
        await page.getByRole('option', { name: 'AIG', exact: true }).click();
        await page.getByRole('combobox', { name: 'Select Broker' }).click();
        await page.getByRole('searchbox', { name: 'Search' }).fill('Keri');
        await page.getByRole('option', { name: 'Keri Anderson FBroker' }).click();
        await page.getByRole('combobox', { name: 'Pending' }).click();
        await page.getByRole('option', { name: 'Active' }).click();
        await page.getByRole('combobox', { name: 'Select Category' }).click();
        await page.getByRole('option', { name: 'Cargo' }).click();
        await page.getByRole('combobox', { name: 'Cargo', exact: true }).click();
        await page.getByRole('option', { name: 'Liability' }).click();
        await page.getByRole('button', { name: 'Save' }).click();
        await page.getByRole('button', { name: 'OK' }).click();

    }

    async Approve() {
        await this.page.goto('https://newdev.anovamarine.com/revised/admin/sales/approval_requests');

        //Approve or Reject the Liability application randomly
        // const action = Math.random() < 0.5 ? 'Approve' : 'Reject';

        await this.page.locator('.btn.btn-sm.btn-icon').first().click();

        await this.page.getByRole('link', { name: 'Approve' }).click();
        await this.page.getByRole('button', { name: 'Yes' }).click();
        await this.page.waitForTimeout(3000);
        await this.page.getByRole('button', { name: 'OK' }).click();
    }
    async FilterOtherProduct() {
        await this.page.goto('https://newdev.anovamarine.com/revised/admin/sales/approval_requests');

        await this.page.getByText('Filter', { exact: true }).click();
        const status = Math.random() < 0.5 ? 'Approved' : 'Rejected';

        await this.page.waitForTimeout(2000);
        await this.page.getByRole('combobox', { name: 'Pending' }).click();
        await this.page.getByRole('option', { name: status }).click();

        console.log(`Selected Status: ${status}`);

        await this.page.getByRole('combobox', { name: 'All' }).first().click();

        await this.page.getByRole('option', { name: 'Liability', exact: true }).click();
        await this.page.getByRole('button', { name: 'Apply' }).click();
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
    async downloadinvoiceandcert() {
        const downloadPromise = this.page.waitForEvent('download');

        await this.page.locator('a[href*="download_certificate_pdf"]').first().click();

        const download = await downloadPromise;

        //Invoice Downloaded
        const download1Promise = this.page.waitForEvent('download');
        await this.page.locator('a[href*="download_invoice_pdf"]').first().click();
        const download1 = await download1Promise;

    }

}
