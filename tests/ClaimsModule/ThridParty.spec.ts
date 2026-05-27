import { test, expect, Browser, BrowserContext, Page } from '@playwright/test';


let context: BrowserContext;
let page: Page;
let companyName: string;

test.describe.serial('Claims module', () => {

    // Before All
    test.beforeAll(async ({ browser }) => {

        context = await browser.newContext();
        page = await context.newPage();

        await page.goto('https://newdev.anovamarine.com/revised/login/index');

        await page.getByRole('textbox', { name: 'Email' }).fill('keri.anderson97+admin@gmail.com');

        await page.getByRole('textbox', { name: 'Password' }).fill('123456');

        await page.getByRole('button', { name: 'Log In' }).click();

        await page.waitForTimeout(5000);

        console.log('Login Successful');
    });

    test('Test 1 - Third-Party Claims Created', async () => {
        await page.getByRole('link', { name: ' Claims' }).click();
        await page.goto('https://newdev.anovamarine.com/revised/admin/claims/index?pending=1');
        await page.reload();
        await page.getByRole('link', { name: 'Add New Claim' }).click();
        await page.getByRole('radio', { name: 'Third-Party Liability (' }).check();
        await page.getByRole('button', { name: 'Continue' }).click();
        await page.reload();
        await page.getByRole('checkbox', { name: 'Not related to a certificate' }).check();

    

        // Anova Claim Handler
        await page.getByRole('combobox', { name: 'Select Claim Handler' }).click();
        await page.getByRole('option', { name: 'Angel Mederos' }).click();

        // Anova Client
        await page.getByRole('combobox', { name: 'Select Client' }).click();
        await page.getByRole('searchbox', { name: 'Search' }).fill('Keri ander');
        await page.getByRole('option', { name: 'Keri Anderson Client Company' }).click();

        await page.getByRole('textbox', { name: 'Reference #' }).fill(`Testing Refer ${Date.now()}`);
        await page.getByRole('textbox', { name: 'Sum Insured' }).fill('1000');
        await page.getByRole('textbox', { name: 'Deductible' }).fill('100');
        await page.getByRole('combobox', { name: 'Select Underwriters' }).click();
        await page.getByRole('searchbox', { name: 'Search' }).fill('AI');
        await page.getByRole('option', { name: 'AIG', exact: true }).click();


        const coveredOperations = [
            'International Freight',
            'NVOCC',
            'Charterer',
            'Warehouse Operator',
            'Customs House Broker',
            'Freight/Property Broker'
        ];

        // Pick random option safely
        const randomOperation =
            coveredOperations[Math.floor(Math.random() * coveredOperations.length)];

        // Open dropdown
        const dropdown = page.getByRole('combobox', {
            name: 'Select Covered Operation'
        });

        await dropdown.waitFor({ state: 'visible' });
        await dropdown.click();

        // Wait for options visible
        const option = page.getByRole('option', {
            name: randomOperation,
            exact: true
        });

        await option.waitFor({ state: 'visible' });

        // Scroll if needed
        await option.scrollIntoViewIfNeeded();

        // Click safely
        await option.click({ force: true });

        console.log(`Selected Covered Operation: ${randomOperation}`);

        await page.getByRole('combobox', { name: 'Select State' }).click();
        await page.getByRole('searchbox', { name: 'Search' }).fill('New');
        await page.getByRole('option', { name: 'New York' }).click();

        const transitModes = [
            'Road',
            'Air',
            'Rail',
            'Ocean',
            'None (Warehouse)'
        ];

        // Select random mode
        const randomTransitMode =
            transitModes[Math.floor(Math.random() * transitModes.length)];

        // Locate dropdown
        const transitDropdown = page.getByRole('combobox', {
            name: 'Select Transit Mode'
        });

        // Wait and open dropdown
        await transitDropdown.waitFor({ state: 'visible' });
        await transitDropdown.scrollIntoViewIfNeeded();
        await transitDropdown.click();

        // Wait for option visible
        const transitOption = page.getByRole('option', {
            name: randomTransitMode,
            exact: true
        });

        await transitOption.waitFor({ state: 'visible' });
        await transitOption.scrollIntoViewIfNeeded();

        // Safe click
        await transitOption.click({ force: true });

        console.log(`Selected Transit Mode: ${randomTransitMode}`);
        await page.getByRole('textbox', { name: 'Amount Claimed' }).fill('1');
        await page.getByRole('textbox', { name: 'Reserve amount' }).fill('1');
        await page.getByRole('textbox', { name: 'Survey Fee' }).fill('1');
        await page.getByRole('textbox', { name: 'Bank Fee' }).fill('1');
        await page.getByRole('textbox', { name: 'Claim Paid Amount' }).fill('1');

        await page.getByRole('combobox', { name: 'Select Country' }).first().click();
        await page.getByRole('searchbox', { name: 'Search' }).fill('United');
        await page.getByRole('option', { name: 'United States', exact: true }).click();
        await page.getByRole('combobox', { name: 'Select Country' }).click();
        await page.getByRole('searchbox', { name: 'Search' }).fill('United');
        await page.getByRole('option', { name: 'United States', exact: true }).click();

        await page.getByRole('button', { name: 'Save Claim' }).click();
        await page.getByRole('button', { name: 'Okay' }).click();

        console.log('Claim created successfully with Company Name');

    });

    test('Test 2 - Third-Party Claims Edit', async () => {
        await page.locator('.btn.btn-sm.btn-icon').first().click();
        await page.getByRole('link', { name: 'Edit Claim' }).click();
        await page.reload();
        await page.click('#btn-edit-claim-amounts',);

        await page.getByRole('textbox', { name: 'Legal Fee' }).fill('2');
        await page.getByRole('textbox', { name: 'Survey Fee' }).fill('2');
        await page.getByRole('textbox', { name: 'Bank Fee' }).fill('2');
        await page.getByRole('textbox', { name: 'Claim Paid Amount' }).fill('2');
        await page.locator('#btn-save-claim-amounts').click();
        await page.getByRole('textbox', { name: 'New Note' }).click();
        await page.getByRole('textbox', { name: 'New Note' }).fill('Testing the Note with PrTesting the Note with Proper Content Testing the Note with Proper Content Testing the Note with Proper Content Testing the Note with Proper Content Testing the Note with Proper Content oper Content ');
        await page.getByRole('button', { name: 'Add Note' }).click();
        await page.getByRole('button', { name: 'OK' }).click();
        await page.getByRole('button', { name: 'Okay' }).click();
        console.log('Claim edited successfully with updated amounts and added note.');
    })

    test('Test 3 - Third-Party Claims Search', async () => {
        // Capture dynamically created Claim ID
        const dynamicClaimId = await page
            .locator('a.text-wrap')
            .first()
            .innerText();

        console.log(dynamicClaimId);

        await page.locator('#search_fields').fill(dynamicClaimId);

        await page.keyboard.press('Enter');

        await expect(page.getByText(dynamicClaimId)).toBeVisible();
        await page.getByTitle('Reset').click();
        console.log('Searched for Claim with ID:', dynamicClaimId);

    })
    test('Test 4 - Third-Party Claims Filter', async () => {
        await page.reload();
        await page.getByText('Filter', { exact: true }).click();
        // Open dropdown
        await page.getByRole('combobox', { name: 'All' }).click();

        // Store available options
        const options = ['Anova', 'Logistiq'];

        // Generate random option
        const randomOption = options[Math.floor(Math.random() * options.length)];

        console.log('Selected Option:', randomOption);

        // Select option
        await page.getByRole('option', { name: randomOption, exact: true }).click();
        await page.getByRole('button', { name: 'Apply' }).click();
        await page.reload();
        await page.getByText('Filter', { exact: true }).click();
        await page.getByRole('link', { name: 'Reset' }).click();
        console.log('Filter applied and reset successfully');
    })

});
test.afterAll(async () => {
    await context.close();
    console.log('Browser Closed Successfully');
});