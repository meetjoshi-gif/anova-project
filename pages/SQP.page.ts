import { Page } from '@playwright/test';
import path from 'path';

export class SQPPage {
    constructor(private page: Page) { }

    async navigate() {
        await this.page.waitForTimeout(5000);
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
        await page.getByRole('button', { name: 'Continue' }).click();
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
        await page.getByRole('button', { name: 'Continue' }).click();
        await page.getByRole('button', { name: 'Okay' }).click();


    }

    async goToSQPIndex() {
        await this.page.goto('https://newdev.anovamarine.com/revised/admin/special_quote_project/index');
    }

    async editSQP() {
        await this.page.locator('.btn.btn-sm.btn-icon').first().click();
        await this.page.getByRole('link', { name: 'View' }).click();

        // Random selection after View
        const randomAction = Math.random() < 0.5 ? 'Reject' : 'Approve';

        console.log(`Selected Action: ${randomAction}`);

        if (randomAction === 'Reject') {
            await this.page.getByRole('link', { name: 'Reject' }).click();
            await this.page.getByRole('button', { name: 'Yes' }).click();
            await this.page.getByRole('textbox', { name: 'Reject Reason' }).fill('Reject testing SPQ');
            await this.page.getByRole('button', { name: 'Reject' }).click();
            await this.page.getByRole('button', { name: 'Okay' }).click();
        } else {
            await this.page.getByRole('link', { name: 'Edit and Approve Quote' }).click();
            await this.page.getByRole('combobox', { name: 'Select Commodity' }).click();
            await this.page.getByRole('option', { name: 'Vehicles & Heavy Equipment' }).click();
            await this.page.getByRole('button', { name: 'Continue' }).click();
            await this.page.getByRole('button', { name: 'Override and Continue' }).click();
            await this.page.getByRole('button', { name: 'Yes' }).click();
            await this.page.getByRole('link', { name: 'Save & Generate Certificate' }).click();
        }
    }



    async SearchSQP() {
        await this.page.reload();

        const text = await this.page
            .locator('text=/SP-\\d{4}-\\d+/')
            .first()
            .textContent();

        const sqpId = text?.match(/SP-\d{4}-\d+/)?.[0] || '';

        console.log(`Generated SQP ID: ${sqpId}`);

        await this.page.getByRole('textbox', { name: 'Search by Requested By,' }).fill(`${sqpId}`);
        await this.page.getByRole('button').filter({ hasText: /^$/ }).click();
        await this.page.getByTitle('Reset').click();
    }

    async filterSQP() {
        await this.page.reload();
        await this.page.getByText('Filter', { exact: true }).click();
        await this.page.getByRole('combobox', { name: 'Select Broker' }).click();
        await this.page.getByRole('searchbox', { name: 'Search' }).fill('keri');
        await this.page.getByRole('option', { name: 'Keri Anderson FBroker' }).click();
        await this.page.getByRole('combobox', { name: 'Select Client' }).click();
        await this.page.getByRole('searchbox', { name: 'Search' }).fill('keri anderson ');
        await this.page.getByRole('option', { name: 'Keri Anderson Client Company' }).click();
        await this.page.getByRole('button', { name: 'Apply' }).click();
        await this.page.reload();
        await this.page.getByText('Filter', { exact: true }).click();
        await this.page.getByRole('link', { name: 'Reset' }).click();
    }
    async MultipleSQPcreation() {
        const page = this.page;
        await this.page.reload();

        await page.getByRole('combobox', { name: 'Anova' }).click();
        await page.getByRole('option', { name: 'Logistiq' }).click();
        await page.locator('#in_multiple_shipmnt').check();
        await page.getByRole('combobox', { name: 'Select option' }).first().click();
        await page.getByRole('option', { name: 'No' }).click();
        await page.getByRole('combobox', { name: 'Select packing types' }).click();
        await page.getByRole('option', { name: 'Pallets' }).click();
        await page.getByRole('textbox', { name: 'Security measures for inland' }).fill('NY');
        await page.getByRole('combobox', { name: 'Select transport types' }).click();
        await page.getByRole('option', { name: 'Flatrack' }).click();
        await page.getByRole('combobox', { name: 'Select option' }).first().click();
        await page.getByRole('option', { name: '-25' }).click();
        await page.getByRole('radio', { name: 'Ongoing' }).check();
        await page.locator('#claims_in_past_5_years2').check();
        await page.getByRole('textbox', { name: 'Approximately how long will' }).fill('5');
        await page.locator('#all_goods_same2').check();
        const filePath = path.join(process.cwd(), 'uploads', 'Claimupload.pdf');
        await page.getByRole('button', { name: 'Upload photos, schematics' }).setInputFiles(filePath)
        await page.getByRole('textbox', { name: 'What is the maximum value per' }).fill('10');
        await page.getByRole('textbox', { name: 'Do you have a requested' }).fill('10');
        await page.getByRole('combobox', { name: 'Select option' }).click();
        await page.getByRole('option', { name: 'No' }).click();
        await page.getByRole('combobox').filter({ hasText: /^$/ }).first().click();
        await page.getByRole('option', { name: 'Afghanistan' }).click();
        await page.getByRole('option', { name: 'American Samoa' }).click();
        await page.getByRole('combobox').filter({ hasText: '×Afghanistan×American Samoa' }).click();
        await page.getByRole('combobox').filter({ hasText: /^$/ }).click();
        await page.getByRole('option', { name: 'Angola' }).click();
        await page.getByRole('option', { name: 'Canada' }).click();
        await page.getByRole('combobox').filter({ hasText: '×Angola×Canada' }).click();
        await page.getByRole('combobox', { name: 'Select Client' }).click();
        await page.getByRole('option', { name: 'Pulse Merger' }).click();
        await page.getByRole('textbox', { name: 'Name' }).fill('Beneficiary Details');
        await page.getByRole('combobox', { name: 'Select Country' }).click();
        await page.locator('input[type="search"]').fill('united');
        await page.getByRole('option', { name: 'United States', exact: true }).click();
        await page.getByRole('textbox', { name: 'Address Line 1' }).fill('123 Main Street');
        await page.getByRole('textbox', { name: 'City' }).fill('NY');
        await page.getByRole('combobox', { name: 'Select State' }).click();
        await page.locator('input[type="search"]').fill('New');
        await page.getByRole('option', { name: 'New York' }).click();
        await page.getByRole('textbox', { name: 'Postal Code' }).fill('10010');
        await page.getByRole('textbox', { name: 'Goods Type description/letter' }).fill('TEST');
        await page.getByRole('button', { name: 'Continue' }).click();
        await page.getByRole('button', { name: 'Okay' }).click();

    }
    async editMultipleSQP() {
        await this.page.locator('.btn.btn-sm.btn-icon').first().click();
        await this.page.getByRole('link', { name: 'View' }).click();

        const action = Math.random() < 0.5 ? 'approve' : 'reject';

        console.log(`Selected Action: ${action}`);

        if (action === 'approve') {
            await this.page.getByRole('link', { name: 'Edit and Approve Quote' }).click();
            await this.page.getByRole('combobox', { name: 'Select Commodity' }).click();
            await this.page.getByRole('option', { name: 'General Goods' }).click();
            await this.page.getByRole('button', { name: 'Save & Approve' }).click();
            await this.page.getByRole('button', { name: 'Okay' }).click();

        } else {
            await this.page.getByRole('link', { name: 'Reject' }).click();
            await this.page.getByRole('button', { name: 'Yes' }).click();
            await this.page.getByRole('textbox', { name: 'Reject Reason' })
                .fill('Reject testing Multiple SQP');
            await this.page.getByRole('button', { name: 'Reject' }).click();
            await this.page.getByRole('button', { name: 'Okay' }).click();
        }


    }
}
