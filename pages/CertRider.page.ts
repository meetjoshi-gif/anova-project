import { Page, expect } from '@playwright/test';
import path from 'path';

export class CertRiderPage {
    constructor(private page: Page) { }

    async navigate() {
        await this.page.waitForTimeout(3000);
        await this.page.goto('https://newdev.anovamarine.com/revised/admin/special_quote_project/create_special_quote_project');
    }

    async createSQPsingle() {
        const page = this.page;

        await page.getByRole('combobox', { name: 'Select option' }).click();
        await page.getByRole('option', { name: 'No' }).click();
        await page.getByRole('combobox', { name: 'Select packing types' }).click();
        await page.getByRole('option', { name: 'Boxes' }).click();
        await page.getByRole('textbox', { name: 'Security measures for inland' }).fill('New York');
        await page.getByRole('combobox', { name: 'Select transport types' }).click();
        await page.getByRole('option', { name: 'Dry container' }).click();
        await page.getByRole('combobox', { name: 'Select Client' }).click();
        await page.getByRole('searchbox', { name: 'Search' }).fill('keri');
        await page.getByRole('option', { name: 'Keri Anderson Client Company' }).click();
        await page.getByRole('textbox', { name: 'Name' }).fill('BeneFiciary');
        await page.getByRole('combobox', { name: 'Select Country' }).first().click();
        await page.getByRole('searchbox', { name: 'Search' }).fill('United');
        await page.getByRole('option', { name: 'United States', exact: true }).click();
        await page.getByRole('textbox', { name: 'Address Line 1' }).fill('123 Main Street');
        await page.getByRole('textbox', { name: 'City', exact: true }).fill('New York');
        await page.getByRole('combobox', { name: 'Select State' }).click();
        await page.getByRole('searchbox', { name: 'Search' }).fill('New');
        await page.getByRole('option', { name: 'New York' }).click();
        await page.getByRole('textbox', { name: 'Postal Code' }).fill('96320');
        await page.locator('#in_air_shipping').check();
        const date = new Date();

        const year = date.getFullYear();
        const monthIndex = date.getMonth(); // 0-11
        const day = date.getDate();

        const monthName = date.toLocaleString('en-US', {
            month: 'long'
        });

        await page.getByRole('textbox', {
            name: 'Sailing/Shipping Date'
        }).click();

        await page.getByRole('spinbutton', {
            name: 'Year'
        }).fill(String(year));

        await page.getByLabel('Month')
            .selectOption(String(monthIndex));

        await page.getByLabel(`${monthName} ${day},`)
            .first()
            .click();

        console.log(
            `Selected Current Date: ${monthIndex + 1}/${day}/${year}`
        );

        await page.getByRole('textbox', { name: 'AWB/BL or Shipping Document #' }).fill('AWB');
        await page.getByRole('combobox', { name: 'Select Country' }).first().click();
        await page.getByRole('searchbox', { name: 'Search' }).fill('United');
        await page.getByRole('option', { name: 'United States', exact: true }).click();
        await page.getByRole('textbox', { name: 'Origin City' }).fill('NY');
        await page.getByRole('textbox', { name: 'Vessel/Voyage' }).fill('Vtest');
        await page.getByRole('combobox', { name: 'Select Country' }).click();
        await page.getByRole('searchbox', { name: 'Search' }).fill('United');
        await page.getByRole('option', { name: 'United States', exact: true }).click();
        await page.getByRole('textbox', { name: 'Destination City' }).fill('DC');
        await page.locator('#letter_of_credit0').check();
        await page.getByRole('radio', { name: 'Used' }).check();
        await page.locator('#goods_traveling_on_deck0').check();
        await page.getByRole('combobox', { name: 'Select Type of Shipment' }).click();
        await page.getByRole('option', { name: 'FCL' }).click();
        await page.getByRole('textbox', { name: 'Insured Value(USD)' }).fill('20');
        await page.getByRole('textbox', { name: 'Goods Type description/letter' }).fill('TEST');
        const filePath = path.join(process.cwd(), 'uploads', 'images.png');
        await page.getByRole('button', { name: 'Upload photos, schematics' }).setInputFiles(filePath)

        const filePath1 = path.join(process.cwd(), 'uploads', 'Claimupload.pdf');
        await page.getByRole('button', { name: 'Upload commercial invoice' }).setInputFiles(filePath1)
        await page.getByRole('textbox', { name: 'Do you have a requested' }).fill('10');
        await page.waitForTimeout(2000);
        await page.getByRole('button', { name: 'Continue' }).click();
        await page.getByRole('button', { name: 'Okay' }).click();

    }

    async goToSQPIndex() {
        await this.page.goto('https://newdev.anovamarine.com/revised/admin/special_quote_project/index');
        await expect(this.page.locator('td.col-request_hash').first()).toContainText(/SP-\d{4}-\d+/);

    }

    async editSQP() {
        const page = this.page
        await this.page.locator('.btn.btn-sm.btn-icon').first().click();
        await this.page.getByRole('link', { name: 'View' }).click();


        // Random selection after View
        // const randomAction = Math.random() < 0.1 ? 'Reject' : 'Approve';

        // console.log(`Selected Action: ${randomAction}`);

        // if (randomAction === 'Reject') {
        //     await this.page.getByRole('link', { name: 'Reject' }).click();
        //     await this.page.getByRole('button', { name: 'Yes' }).click();
        //     await this.page.getByRole('textbox', { name: 'Reject Reason' }).fill('Reject testing SPQ');
        //     await this.page.getByRole('button', { name: 'Reject' }).click();
        //     await this.page.getByRole('button', { name: 'Okay' }).click();
        // } else {
        await this.page.getByRole('link', { name: 'Edit and Approve Quote' }).click();
        await this.page.getByRole('combobox', { name: 'Select Commodity' }).click();
        await this.page.getByRole('option', { name: 'Vehicles & Heavy Equipment' }).click();
        await this.page.getByRole('button', { name: 'Continue' }).click();
        await this.page.waitForTimeout(2000)
        await this.page.getByRole('button', { name: 'Override and Continue' }).click();
        await this.page.getByRole('button', { name: 'Yes' }).click();
        await this.page.waitForTimeout(2000)
        await this.page.getByRole('link', { name: 'Save & Generate Certificate' }).click();
        // }
    }

    async LoginWithClient() {
        const page = this.page
        await this.page.goto('https://newdev.anovamarine.com/revised/login/index');
        await this.page.getByRole('textbox', { name: 'Email' }).fill('Keri.Anderson97+client@gmail.com');

        await this.page.getByRole('textbox', { name: 'Password' }).fill('123456');

        await this.page.getByRole('button', { name: 'Log In' }).click();

        await this.page.waitForTimeout(5000);
        console.log('Login successful for the client');

        await this.page.goto('https://newdev.anovamarine.com/revised/client/certificates');
        await page.reload();
        await page.locator('//*[@id="kt_app_content_container"]/div[2]/div/div/div[2]/div[1]/table/tbody/tr[1]/td[8]/div/div/a').click();
        await page.getByRole('link', { name: 'Request Changes' }).click();

        await page.getByRole('textbox', { name: 'Reference #' }).fill('Changes For CERT Riders');
        await page.waitForTimeout(2000);
        await page.getByRole('link', { name: 'Continue' }).click({ timeout: 3000 });
        await page.getByRole('button', { name: 'Proceed as special approval' }).click();
        await page.getByRole('button', { name: 'Yes' }).click();
        await page.getByRole('textbox', { name: 'Change Request Reason' }).fill('Changes Request To Admin For CERT Rider');
        await page.getByRole('radio', { name: 'No' }).check();
        await page.getByRole('combobox', { name: 'Select Option' }).first().click();
        await page.getByRole('option', { name: 'Fully boxed and palletized' }).click();
        await page.getByRole('combobox', { name: 'Select Option' }).click();
        await page.getByRole('option', { name: 'Electronics of high value' }).click();
        await page.getByRole('textbox', { name: 'Please describe the goods and' }).click();
        await page.getByRole('textbox', { name: 'Please describe the goods and' }).fill('TEST');
        await page.getByRole('checkbox', { name: 'I warrant the above answers' }).check();
        await page.waitForTimeout(2000);
        await page.getByRole('link', { name: 'Continue' }).click();
        console.log('CERT request successful From the client');


    }

    async AdminLogout() {
        await this.page.reload()
        await this.page.locator('i').nth(3).click();
        await this.page.getByRole('link', { name: 'Sign Out' }).click();
        await this.page.getByRole('button', { name: 'Yes' }).click();
    }

    async ClientLogout() {

        await this.page.locator('#kt_header_user_menu_toggle i').click();
        await this.page.getByRole('link', { name: 'Sign Out' }).click();
        await this.page.getByRole('button', { name: 'Yes' }).click();
    }

    async DownloadCERT() {
        const downloadPromise = this.page.waitForEvent('download');

        await this.page.locator('a[href*="download_certificate_pdf"]').first().click();

        const download = await downloadPromise;
        console.log(`Downloaded file: ${await download.suggestedFilename()}`);
    }


}