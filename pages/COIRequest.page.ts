import { Page } from '@playwright/test';

export class COIRequestPage {
    constructor(private page: Page) { }

    async navigate() {
        await this.page.waitForTimeout(3000);
        await this.page.goto('https://newdev.anovamarine.com/revised/admin/apply_for_liability_insurance');
    }

    async CreateLibilityAnova() {
        const page = this.page
        await page.locator('#st_company_name').click();
        await page.locator('#st_company_name').fill('Keri');
        await page.locator('#ui-id-2').getByRole('heading', { name: 'Name: Keri Anderson Client' }).click();
        await page.getByRole('textbox', { name: 'Gross Freight Receipts' }).fill('1000');
        await page.getByRole('textbox', { name: 'Annual Turnover' }).fill('1000');
        await page.getByRole('textbox', { name: 'Brief narrative about your' }).fill('Test ');
        await page.getByRole('checkbox', { name: 'Air Freight Forwarding' }).check();
        await page.locator('#trading_area_1_1').check();
        await page.getByRole('radio', { name: 'No No' }).check();
        await page.locator('#coverage2').check();
        await page.locator('#policy_declined2').check();
        await page.locator('#insured_risk2').check();
        await page.getByRole('textbox', { name: 'How many claims in the past 5' }).fill('1000');
        await page.getByRole('textbox', { name: 'Claims History Details' }).fill('TEST');
        await page.getByRole('checkbox', { name: 'I hereby confirm that the' }).check();
        await page.locator('#st_addon_name_mark').click();
        await page.locator('#st_addon_name_mark').fill('TESTING NAME');
        await page.getByRole('textbox', { name: 'Title' }).fill('TITLES');
        await page.getByRole('button', { name: 'Submit Application' }).click();
        await page.getByRole('button', { name: 'Okay' }).click();
        console.log('Created Successful For Liability Anova')
    }

    async CreateLibilityLogistiq() {
        const page = this.page
        await page.getByRole('combobox', { name: 'Anova' }).click();
        await page.getByRole('option', { name: 'Logistiq' }).click();
        await page.locator('#st_company_name').click();
        await page.locator('#st_company_name').fill('Keri');
        await page.locator('#ui-id-2').getByRole('heading', { name: 'Name: Keri Anderson Client' }).click();
        await page.getByRole('textbox', { name: 'Gross Freight Receipts' }).fill('1000');
        await page.getByRole('textbox', { name: 'Annual Turnover' }).fill('1000');
        await page.getByRole('textbox', { name: 'Brief narrative about your' }).fill('Test ');
        await page.getByRole('checkbox', { name: 'Air Freight Forwarding' }).check();
        await page.locator('#trading_area_1_1').check();
        await page.getByRole('radio', { name: 'No No' }).check();
        await page.locator('#coverage2').check();
        await page.locator('#policy_declined2').check();
        await page.locator('#insured_risk2').check();
        await page.getByRole('textbox', { name: 'How many claims in the past 5' }).fill('1000');
        await page.getByRole('textbox', { name: 'Claims History Details' }).fill('TEST');
        await page.getByRole('checkbox', { name: 'I hereby confirm that the' }).check();
        await page.locator('#st_addon_name_mark').click();
        await page.locator('#st_addon_name_mark').fill('TESTING NAME');
        await page.getByRole('textbox', { name: 'Title' }).fill('TITLES');
        await page.getByRole('button', { name: 'Submit Application' }).click();
        await page.getByRole('button', { name: 'Okay' }).click();
        console.log('Created Successful For Liability Logistiq')


    }


    async EditLibility() {
        const page = this.page

        await page.waitForTimeout(3000)
        await page.getByRole('link').filter({ hasText: /\d{2}\/\d{2}\/\d{4}/ }).first().click();


        //
        await page.getByRole('combobox', { name: 'Select Sub Product Type' }).click();
        await page.getByRole('option', { name: 'TLC XL (Lloyd\'s)', exact: true }).click();
        await page.getByRole('combobox', { name: 'Pending' }).click();
        await page.getByRole('option', { name: 'Active' }).click();

        await page.getByRole('checkbox', { name: 'Show Extended Fields' }).check();
        await page.getByRole('row', { name: 'International Freight' }).getByLabel('NO').click();
        await page.getByRole('option', { name: 'YES' }).click();
        await page.getByRole('row', { name: 'International Freight' }).getByLabel('Air').check();
        await page.getByRole('row', { name: 'Cargo Legal Liability NO' }).getByLabel('NO', { exact: true }).click();
        await page.getByRole('option', { name: 'YES' }).click();
        await page.getByRole('row', { name: 'Cargo Legal Liability YES' }).getByPlaceholder('USD LIMIT: (per occurrence)').fill('1');
        await page.getByRole('row', { name: 'Cargo Legal Liability YES' }).getByPlaceholder('Deductible').fill('1');
        await page.getByRole('row', { name: 'Cargo Legal Liability YES 1' }).getByPlaceholder('Premium').fill('1');
        await page.getByRole('textbox', { name: 'Included Coverage Minimum' }).fill('1');
        await page.getByRole('textbox', { name: 'Additional Premium (options' }).fill('1');
        await page.getByRole('textbox', { name: 'Total Annual Premium' }).fill('1');
        await page.getByRole('textbox', { name: 'Adjusted at' }).fill('1');
        await page.getByRole('textbox', { name: 'Gross Freight Receipts of' }).fill('1');
        const liabilityNumber = `Liability-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;

        await page.getByRole('textbox', { name: 'Cert #' }).fill(liabilityNumber);

        console.log(liabilityNumber);

        await page.getByRole('button', { name: 'Save' }).click();
        await page.getByRole('button', { name: 'OK' }).click();
    }

    async ReqestAccpet(){
        const page= this.page
         //Request 
    await page.goto('https://newdev.anovamarine.com/revised/admin/sales/approval_requests');

    await page.locator('.btn.btn-sm.btn-icon').first().click();

    await page.getByRole('link', { name: 'Approve' }).click();
    await page.getByRole('button', { name: 'Yes' }).click();
    await page.waitForTimeout(3000);
    await page.getByRole('button', { name: 'OK' }).click();
    }

    async COIRquest(){
                const page= this.page

            //Sales
    await page.goto('https://newdev.anovamarine.com/revised/admin/sales');
    await page.getByRole('link').filter({ hasText: /\d{2}\/\d{2}\/\d{4}/ }).first().click();
    await page.reload();
      await page.getByText('Actions').click();
  await page.getByRole('link', { name: 'Generate COI' }).click();
const email = `Test${Date.now()}@yopmail.com`;

await page.getByRole('textbox', { name: 'Email Address' }).fill(email);

console.log(email);
  await page.getByRole('button', { name: 'Generate' }).click();
  await page.getByRole('button', { name: 'Proceed' }).click();
  await page.getByRole('button', { name: 'OK' }).click();

  await page.goto('https://newdev.anovamarine.com/revised/admin/coi_requests');

   await page.locator('.btn.btn-sm.btn-icon').first().click();
  await page.getByRole('link', { name: 'View', exact: true }).click();


    }

} 
