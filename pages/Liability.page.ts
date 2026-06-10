import { Page } from '@playwright/test';

export class LiabilityPage {
    constructor(public page: Page) { }

    async navigate() {
        await this.page.waitForTimeout(3000);
        await this.page.goto('https://newdev.anovamarine.com/revised/admin/apply_for_liability_insurance');
    }

    async Liabilitycreate() {
        const page = this.page;
        await page.locator('#st_company_name').fill('Keri');
        await page.locator('#ui-id-2').getByRole('heading', { name: 'Name: Keri Anderson Client' }).click();
        await page.getByRole('textbox', { name: 'Gross Freight Receipts' }).fill('5500');
        await page.getByRole('textbox', { name: 'Annual Turnover' }).fill('5000');
        await page.getByRole('textbox', { name: 'Brief narrative about your' }).fill('Testing ');
        await page.getByRole('checkbox', { name: 'Air Freight Forwarding' }).check();
        await page.locator('#trading_area_1_1').check();
        await page.getByRole('radio', { name: 'No No' }).check();
        await page.locator('#coverage2').check();
        await page.locator('#policy_declined2').check();
        await page.locator('#insured_risk2').check();
        await page.getByRole('textbox', { name: 'How many claims in the past 5' }).fill('1000');
        await page.getByRole('textbox', { name: 'Claims History Details' }).fill('Testing Claims history');
        await page.getByRole('checkbox', { name: 'I hereby confirm that the' }).check();
        await page.locator('#st_addon_name_mark').fill('Testing Name');
        await page.getByRole('textbox', { name: 'Title' }).fill('Testing Title');
        await page.getByRole('button', { name: 'Submit Application' }).click();

        await page.getByRole('button', { name: 'Okay' }).click();

        //Navigate to the Liability 
        // await page.goto('https://newdev.anovamarine.com/revised/admin/sales');
        await page.getByRole('link').filter({ hasText: /\d{2}\/\d{2}\/\d{4}/ }).first().click();
        await page.getByRole('combobox', { name: 'Select Sub Product Type' }).click();
        await page.getByRole('option', { name: 'TLC XL (Lloyd\'s)', exact: true }).click();
        await page.waitForTimeout(3000);
        const liabilityNumber = `Liability-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;

        await page.getByRole('textbox', { name: 'Cert #' }).fill(liabilityNumber);

        console.log(liabilityNumber);
        await page.getByRole('combobox', { name: 'Pending' }).click();
        await page.getByRole('option', { name: 'Active' }).click();
        await page.getByRole('button', { name: 'Save' }).click();
        await page.waitForTimeout(3000);
        await page.getByRole('button', { name: 'OK' }).click();
    }

    async ApproveReject() {
        await this.page.goto('https://newdev.anovamarine.com/revised/admin/sales/approval_requests');

        //Approve or Reject the Liability application randomly
        // const action = Math.random() < 0.5 ? 'Approve' : 'Reject';

        await this.page.locator('.btn.btn-sm.btn-icon').first().click();

        await this.page.getByRole('link', { name: 'Approve' }).click();
        await this.page.getByRole('button', { name: 'Yes' }).click();
        await this.page.waitForTimeout(3000);
        await this.page.getByRole('button', { name: 'OK' }).click();
    }
    async FilterLiability() {
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
