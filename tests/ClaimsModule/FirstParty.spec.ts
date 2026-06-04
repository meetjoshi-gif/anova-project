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

    console.log('Login Successful for first-party claims');
  });

  test('Test 1 - First-Party Claims Created', async () => {
    await page.getByRole('link', { name: ' Claims' }).click();
    await page.goto('https://newdev.anovamarine.com/revised/admin/claims/index?pending=1');
    await page.reload();
    await page.getByRole('link', { name: 'Add New Claim' }).click({ timeout: 5000 });
    await page.getByRole('radio', { name: 'First-Party (Marine Cargo/' }).check();
    await page.getByRole('button', { name: 'Continue' }).click();
    await page.reload();
    await page.getByRole('checkbox', { name: 'Not related to a certificate' }).check();
    // By default Anova is selected, sometimes change to Logistiq
    const shouldSelectLogistiq = Math.random() < 0.5;

    if (shouldSelectLogistiq) {
      // Select Logistiq
      await page.getByRole('combobox', { name: 'Anova' }).click();
      await page.getByRole('option', { name: 'Logistiq' }).click();

      // Logistiq Claim Handler
      await page.getByRole('combobox', { name: 'Select Claim Handler' }).click();
      await page.getByRole('option', { name: 'Keri Merger Logistiq' }).click();

      // Logistiq Client
      await page.getByRole('combobox', { name: 'Select Client' }).click();
      await page.getByRole('searchbox', { name: 'Search' }).fill('Keri');
      await page.getByRole('option', { name: 'Keri Anderson Client Logistiq' }).click();

    } else {
      // Keep Anova selected

      // Anova Claim Handler
      await page.getByRole('combobox', { name: 'Select Claim Handler' }).click();
      await page.getByRole('option', { name: 'Angel Mederos' }).click();

      // Anova Client
      await page.getByRole('combobox', { name: 'Select Client' }).click();
      await page.getByRole('searchbox', { name: 'Search' }).fill('Keri ander');
      await page.getByRole('option', { name: 'Keri Anderson Client Company' }).click();
    }

    await page.getByRole('textbox', { name: 'Reference #' }).fill(`Testing Refer ${Date.now()}`);
    await page.getByRole('textbox', { name: 'Sum Insured' }).fill('1000');
    await page.getByRole('textbox', { name: 'Deductible' }).fill('100');
    await page.getByRole('combobox', { name: 'Select Underwriters' }).click();
    await page.getByRole('searchbox', { name: 'Search' }).fill('AI');
    await page.getByRole('option', { name: 'AIG', exact: true }).click();

    await page.getByRole('combobox', { name: 'Select Beneficiary' }).click();
    await page.getByRole('searchbox', { name: 'Search' }).fill('test');
    await page.getByRole('option', { name: 'test' }).first().click();
    await page.getByRole('combobox', { name: 'Select Country' }).first().click();
    await page.getByRole('searchbox', { name: 'Search' }).fill('Unite');
    await page.getByRole('option', { name: 'United States', exact: true }).click();
    await page.getByRole('combobox', { name: 'Select Country' }).click();
    await page.getByRole('searchbox', { name: 'Search' }).fill('United');
    await page.getByRole('option', { name: 'United States', exact: true }).click();
    await page.getByRole('combobox', { name: 'Select Location of Loss' }).first().click();
    await page.getByRole('searchbox', { name: 'Search' }).fill('united');
    await page.getByRole('option', { name: 'United States', exact: true }).click();

    const today = new Date();
    const previousYear = today.getFullYear() - (Math.floor(Math.random() * 5) + 1);

    const randomMonth = Math.floor(Math.random() * 12);
    const randomDay = Math.floor(Math.random() * 28) + 1;

    // Open date picker
    await page.getByRole('textbox', { name: 'Approximate Loss Date' }).click();

    // Wait for calendar visible
    const calendar = page.locator('.flatpickr-calendar.open');
    await calendar.waitFor({ state: 'visible' });

    // Select month
    await calendar.locator('.flatpickr-monthDropdown-months')
      .selectOption(String(randomMonth));

    // Fill year
    const yearInput = calendar.getByRole('spinbutton', { name: 'Year' });

    await yearInput.click();
    await yearInput.fill(String(previousYear));

    // Wait calendar update
    await page.waitForTimeout(500);

    // Select only CURRENT month visible day
    await calendar.locator(
      `.flatpickr-day:not(.prevMonthDay):not(.nextMonthDay)`
    ).filter({
      hasText: String(randomDay)
    }).first().click();


    await page.getByRole('textbox', { name: 'Further Details' }).fill('Testing further details by entering at least 50 characters.Testing further details by entering at least 50 characters.');
    await page.getByRole('textbox', { name: 'Amount Claimed' }).fill('100');
    await page.getByRole('textbox', { name: 'Reserve amount' }).fill('100');
    await page.getByRole('textbox', { name: 'Legal Fee' }).fill('1');
    await page.getByRole('textbox', { name: 'Survey Fee' }).fill('1');
    await page.getByRole('textbox', { name: 'Bank Fee' }).fill('1');
    await page.getByRole('textbox', { name: 'Claim Paid Amount' }).fill('1');
    // Generate dynamic company name and email
    const randomText = Date.now();

    const companyName = `Testing Company ${randomText}`;
    const email = `testcompany${randomText}@yopmail.com`;

    await page.getByRole('textbox', { name: 'Company Name' }).fill(companyName);

    await page.getByRole('textbox', { name: 'Email Address' }).fill(email);
    await page.getByRole('button', { name: 'Save Claim' }).click();
    await page.getByRole('button', { name: 'Okay' }).click();
    console.log('Claim created successfully with Company Name:', companyName, 'and Email:', email);

  });

  test('Test 2 - First-Party Claims Edit', async () => {
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

  test('Test 3 - First-Party Claims Search', async () => {
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
  test('Test 4 - First-Party Claims Filter', async () => {
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
  console.log('Browser Closed Successfully for first-party claims');
});