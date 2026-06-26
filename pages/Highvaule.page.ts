import { Page,expect } from '@playwright/test';
import path from 'path';


export class HighVauleRequestPage {
    constructor(private page: Page) { }

    async navigate() {
        await this.page.waitForTimeout(3000);
        await this.page.goto('https://newdev.anovamarine.com/revised/admin/new_mtc_excess/index');
    }

    async CreateHVR() {
        const page = this.page
        await page.waitForTimeout(2000);
        await this.page.goto('https://newdev.anovamarine.com/revised/admin/new_mtc_excess/index');

        const pendingText = page.getByText('You have one last pending');

        if (await pendingText.isVisible({ timeout: 2000 }).catch(() => false)) {
//                   await page.getByRole('link', { name: 'Continue' }).click();
// await expect(page.locator('text=Template policy not define for you!')).toBeVisible();

            await page.getByRole('radio', { name: 'No' }).check();
            await page.getByRole('combobox', { name: 'Select Option' }).first().click();
            await page.getByRole('option', { name: 'Fully boxed and palletized' }).click();
            await page.getByRole('combobox', { name: 'Select Option' }).click();
            await page.getByRole('option', { name: 'Electronics of high value' }).click();
            await page.getByRole('textbox', { name: 'Please describe the goods and' }).fill('TETST');
            const filePath = path.join(process.cwd(), 'uploads', 'images.png');
            await page.getByRole('button', { name: 'Photo of a Cargo' }).setInputFiles(filePath);
            await page.getByRole('checkbox', { name: 'I warrant the above answers' }).check();
            await page.getByRole('link', { name: 'Submit Special Approval' }).click();
            await page.goto('https://newdev.anovamarine.com/revised/admin/high_value_requests/index');

        }
        else {

            await page.getByRole('combobox', { name: 'Select Client' }).click();
            await page.getByRole('option', { name: 'Keri Anderson Client Company' }).click();

            await page.getByRole('textbox', { name: 'Name', exact: true }).fill('John Doe');
            await page.getByRole('textbox', { name: 'Phone' }).fill('9874561230');

            await page.getByRole('combobox', { name: 'Select Country' }).first().click();
            await page.getByRole('option', { name: 'Canada' }).click();

            await page.getByRole('textbox', { name: 'Address Line 1' }).fill('47 W 13th St');
            await page.getByRole('textbox', { name: 'City', exact: true }).fill('New York');
            await page.getByRole('textbox', { name: 'State' }).fill('NY');
            await page.getByRole('textbox', { name: 'Postal Code' }).fill('10011');

            await page.getByRole('textbox', { name: 'BL or Shipping Document #' }).fill('BL');
            await page.getByRole('textbox', { name: 'Reference #' }).fill('Reference');

            await page.getByRole('combobox', { name: 'Select Country' }).nth(1).click();
            await page.getByRole('option', { name: 'United States' }).click();

            await page.getByRole('combobox', { name: 'Select Country' }).click();
            await page.getByRole('option', { name: 'United States' }).click();
            await page.getByRole('textbox', { name: 'Origin Address' }).fill('Origin Addres');

            await page.getByRole('combobox', { name: 'Select Origin State' }).click();
            await page.getByRole('option', { name: 'Arkansas' }).click();
            await page.getByRole('textbox', { name: 'Origin Postal Code' }).fill('92000');

            await page.getByRole('textbox', { name: 'Origin City' }).fill('CITY');
            await page.getByRole('textbox', { name: 'Carrier' }).fill('TEST Carrier');
            await page.getByRole('combobox', { name: 'Select Destination State' }).click();
            await page.getByRole('option', { name: 'Arkansas' }).click();

            await page.getByRole('textbox', { name: 'Destination Address' }).fill('Des address');
            await page.getByRole('textbox', { name: 'Destination City' }).fill('DEs City');
            await page.getByRole('textbox', { name: 'Destination Postal Code' }).fill('96582');


            await page.getByRole('combobox', { name: 'Select Commodity' }).click();
            await page.getByRole('option', { name: 'Mobile Phones & Laptops' }).click();

            await page.getByRole('textbox', { name: 'Insured Value(USD)' }).fill('5000000');
            await page.getByRole('textbox', { name: 'Goods Type description/letter' }).fill('Lorem Ipsum is simply dummy text of the printing and typesetting industry.');
            await page.getByRole('textbox', { name: 'Extra Condition (Optional)' }).fill('TEST');
            await page.getByRole('link', { name: 'Continue' }).click();
            await page.waitForTimeout(2000)
            await page.getByRole('button', { name: 'Override and Continue' }).click();
            await page.reload();
            await page.getByRole('radio', { name: 'No' }).check();
            await page.getByRole('combobox', { name: 'Select Option' }).first().click();
            await page.getByRole('option', { name: 'Fully boxed and palletized' }).click();
            await page.getByRole('combobox', { name: 'Select Option' }).click();
            await page.getByRole('option', { name: 'Electronics of high value' }).click();
            await page.getByRole('textbox', { name: 'Please describe the goods and' }).click();
            await page.getByRole('textbox', { name: 'Please describe the goods and' }).fill('TETST');
            const filePath = path.join(process.cwd(), 'uploads', 'images.png');
            await page.getByRole('button', { name: 'Photo of a Cargo' }).setInputFiles(filePath);
            await page.getByRole('checkbox', { name: 'I warrant the above answers' }).check();
            await page.getByRole('link', { name: 'Submit Special Approval' }).click();
        }
    }
    async CreateHVRLogistiq() {
        const page = this.page
        await page.waitForTimeout(2000);
        await this.page.goto('https://newdev.anovamarine.com/revised/admin/new_mtc_excess/index');

        const pendingText = page.getByText('You have one last pending');

        if (await pendingText.isVisible({ timeout: 2000 }).catch(() => false)) {
            await page.getByRole('radio', { name: 'No' }).check();
            await page.getByRole('combobox', { name: 'Select Option' }).first().click();
            await page.getByRole('option', { name: 'Fully boxed and palletized' }).click();
            await page.getByRole('combobox', { name: 'Select Option' }).click();
            await page.getByRole('option', { name: 'Electronics of high value' }).click();
            await page.getByRole('textbox', { name: 'Please describe the goods and' }).fill('TETST');
            const filePath = path.join(process.cwd(), 'uploads', 'images.png');
            await page.getByRole('button', { name: 'Photo of a Cargo' }).setInputFiles(filePath);
            await page.getByRole('checkbox', { name: 'I warrant the above answers' }).check();
            await page.getByRole('link', { name: 'Submit Special Approval' }).click();
            await page.goto('https://newdev.anovamarine.com/revised/admin/high_value_requests/index');

        }
        else {

            await page.getByRole('combobox', { name: 'Anova' }).click();
            await page.getByRole('option', { name: 'Logistiq' }).click();
            await page.getByRole('combobox', { name: 'Select Client' }).click();
            await page.getByRole('option', { name: 'Keri Anderson Client Logistiq' }).click();
            await page.getByRole('textbox', { name: 'Name', exact: true }).fill('John Doe');
            await page.getByRole('textbox', { name: 'Phone' }).fill('9874561230');

            await page.getByRole('combobox', { name: 'Select Country' }).first().click();
            await page.getByRole('option', { name: 'Canada' }).click();

            await page.getByRole('textbox', { name: 'Address Line 1' }).fill('47 W 13th St');
            await page.getByRole('textbox', { name: 'City', exact: true }).fill('New York');
            await page.getByRole('textbox', { name: 'State' }).fill('NY');
            await page.getByRole('textbox', { name: 'Postal Code' }).fill('10011');

            await page.getByRole('textbox', { name: 'BL or Shipping Document #' }).fill('BL');
            await page.getByRole('textbox', { name: 'Reference #' }).fill('Reference');

            await page.getByRole('combobox', { name: 'Select Country' }).nth(1).click();
            await page.getByRole('option', { name: 'United States' }).click();

            await page.getByRole('combobox', { name: 'Select Country' }).click();
            await page.getByRole('option', { name: 'United States' }).click();
            await page.getByRole('textbox', { name: 'Origin Address' }).fill('Origin Addres');

            await page.getByRole('combobox', { name: 'Select Origin State' }).click();
            await page.getByRole('option', { name: 'Arkansas' }).click();
            await page.getByRole('textbox', { name: 'Origin Postal Code' }).fill('92000');

            await page.getByRole('textbox', { name: 'Origin City' }).fill('CITY');
            await page.getByRole('textbox', { name: 'Carrier' }).fill('TEST Carrier');
            await page.getByRole('combobox', { name: 'Select Destination State' }).click();
            await page.getByRole('option', { name: 'Arkansas' }).click();

            await page.getByRole('textbox', { name: 'Destination Address' }).fill('Des address');
            await page.getByRole('textbox', { name: 'Destination City' }).fill('DEs City');
            await page.getByRole('textbox', { name: 'Destination Postal Code' }).fill('96582');


            await page.getByRole('combobox', { name: 'Select Commodity' }).click();
            await page.getByRole('option', { name: 'Mobile Phones & Laptops' }).click();

            await page.getByRole('textbox', { name: 'Insured Value(USD)' }).fill('5000000');
            await page.getByRole('textbox', { name: 'Goods Type description/letter' }).fill('Lorem Ipsum is simply dummy text of the printing and typesetting industry.');
            await page.getByRole('textbox', { name: 'Extra Condition (Optional)' }).fill('TEST');
            await page.getByRole('link', { name: 'Continue' }).click();
            await page.waitForTimeout(2000)
            await page.getByRole('button', { name: 'Override and Continue' }).click();
            await page.reload();
            await page.getByRole('radio', { name: 'No' }).check();
            await page.getByRole('combobox', { name: 'Select Option' }).first().click();
            await page.getByRole('option', { name: 'Fully boxed and palletized' }).click();
            await page.getByRole('combobox', { name: 'Select Option' }).click();
            await page.getByRole('option', { name: 'Electronics of high value' }).click();
            await page.getByRole('textbox', { name: 'Please describe the goods and' }).click();
            await page.getByRole('textbox', { name: 'Please describe the goods and' }).fill('TETST');
            const filePath = path.join(process.cwd(), 'uploads', 'images.png');
            await page.getByRole('button', { name: 'Photo of a Cargo' }).setInputFiles(filePath);
            await page.getByRole('checkbox', { name: 'I warrant the above answers' }).check();
            await page.getByRole('link', { name: 'Submit Special Approval' }).click();
        }
    }
    async DownloadHVR() {
        const page = this.page
        await page.goto('https://newdev.anovamarine.com/revised/admin/high_value_requests/index');

        //Download The HVR
        await page.locator('.btn.btn-sm.btn-icon').first().click();
        const downloadPromise = page.waitForEvent('download');
        await page.getByRole('link', { name: 'Download' }).click();
        const download = await downloadPromise;
    }

    async ApproveandReject() {
        const page = this.page

        await page.locator('.btn.btn-sm.btn-icon').first().click();
        await page.getByRole('link', { name: 'View' }).click();
        await page.reload();
// 90% Approve, 10% Reject
        const randomAction = Math.random() < 0.9;

        if (randomAction) {
            await page.getByRole('link', { name: 'Approve' }).click();
            await page.getByRole('button', { name: 'Yes' }).click();
            await page.getByRole('button', { name: 'Okay' }).click();
            console.log('Approved successful for HighValue request');


        } else {
            await page.getByRole('link', { name: 'Reject' }).click();
            await page.getByRole('button', { name: 'Yes' }).click();
            await page.getByRole('textbox', { name: 'Reject Reason' }).fill('Reject reason');
            await page.getByRole('button', { name: 'Reject' }).click();
            await page.getByRole('button', { name: 'Okay' }).click();
            console.log('Reject successful for HighValue request');

        }
    }

    async DownloadCERTandInvoice() {
        const page = this.page

        //Download the CERT and invoice
        await page.goto('https://newdev.anovamarine.com/revised/admin/sales');

        const downloadPromise1 = page.waitForEvent('download');
        await page.locator('a[href*="download_certificate_pdf"]').first().click();
        const download1 = await downloadPromise1;

        //Invoice Downloaded
        const download1Promise2 = page.waitForEvent('download');
        await page.locator('a[href*="download_invoice_pdf"]').first().click();
        const download2 = await download1Promise2;
    }
}