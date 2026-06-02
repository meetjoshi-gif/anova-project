import { test, expect, Browser, BrowserContext, Page } from '@playwright/test';
import path from 'path';

let currentDate;
let currentYear;
let currentMonth;
let currentDay;
let monthName;
let context: BrowserContext;
let page: Page;

test('FrontEnd Storage-Claim', async ({ page }) => {
  await page.goto('https://newdev.anovamarine.com/revised/storage_claim_or_cargo');

  //Cargo Claims
  const randomNumber = Math.floor(Math.random() * 10000);
  await page.getByLabel('Type of Claim*').selectOption('1');
  await page.getByRole('combobox', { name: 'Select your Program/Policy #' }).click();
  await page.getByRole('option', { name: 'RBX-PLCY-782401-' }).click();
  await page.getByRole('combobox', { name: 'Select facility address' }).click();
  await page.getByRole('option', { name: '13118 Schroeder Road, Houston' }).click();
  await page.getByRole('button', { name: 'Next' }).click();
  console.log('Step 1 completed: Claim Type');
  const lastName = `Doe${randomNumber}`;

  await page.getByRole('textbox', { name: 'Last Name*' }).fill(lastName);
  const firstName = `John${randomNumber}`;
  await page.getByRole('textbox', { name: 'First Name*' }).fill(firstName);
  const addresses = [
    '1231 Main Street, Houston, TX 77002',
    '742 Evergreen Terrace, Springfield, IL 62704',
    '455 Market Street, San Francisco, CA 94105',
    '890 Ocean Drive, Miami, FL 33139',
    '210 Park Avenue, New York, NY 10017'
  ];

  const randomAddress = addresses[Math.floor(Math.random() * addresses.length)];

  await page.locator('#st_address').fill(randomAddress);
  await page.locator('#in_country_id').selectOption('222');
  const email = `johndoe${randomNumber}@yopmail.com`;
  await page.getByRole('textbox', { name: 'Email*' }).fill(email);
  const phone = `98${Math.floor(10000000 + Math.random() * 90000000)}`;
  await page.getByRole('textbox', { name: 'Telephone*' }).fill(phone);
  await page.getByRole('checkbox', { name: 'Same as Your Address' }).check();
  await page.getByRole('button', { name: 'Next' }).click();
  console.log('Step 2 completed: Personal information');

  await page.getByRole('textbox', { name: 'Description of Claim*' }).fill('Description of Claim: Testing');
  const date = new Date();

  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();

  const monthName = date.toLocaleString('en-US', {
    month: 'long'
  });

  await page.getByRole('textbox', {
    name: 'Mon DD, YYYY'
  }).click();

  await page.getByRole('spinbutton', {
    name: 'Year'
  }).fill(String(year));

  await page.getByLabel('Month')
    .selectOption(String(month));

  await page.getByLabel(`${monthName} ${day},`)
    .first()
    .click();

  console.log(`Selected Current Date: ${month + 1}/${day}/${year}`);

  await page.getByRole('textbox', { name: 'Additional Comments*' }).fill('Info Additional Comments');
  await page.getByRole('button', { name: 'Next' }).click();
  console.log('Step 3 completed: Incident Details');


  //Step 4
  await page.waitForTimeout(2000);
  await page.locator('#st_catgeory_0').click();
  await page.locator('#st_catgeory_0').fill('Test');
  await page.locator('#st_packing_list_number_0').click();
  await page.locator('#st_packing_list_number_0').fill('10');
  await page.locator('#st_item_description_0').click();
  await page.locator('#st_item_description_0').fill('10');
  const options = ['3', '8', '2', '9', '1', '4', '5', '10', '7'];

  const randomOption =
    options[Math.floor(Math.random() * options.length)];

  await page.locator('#in_nature_of_loss_0')
    .selectOption(randomOption);

  console.log(`Selected Option: ${randomOption}`);
  await page.locator('#fl_replacement_value_0').click();
  await page.locator('#fl_replacement_value_0').fill('10');
  await page.locator('#fl_insured_value_0').click();
  await page.locator('#fl_insured_value_0').fill('10');
  await page.locator('#fl_amount_claim_0').click();
  await page.locator('#fl_amount_claim_0').fill('10');
  await page.getByRole('button', { name: 'Next' }).click();

  console.log('Step 4 completed: Itemized Inventory');
  await page.waitForTimeout(2000);
  // Step 5
  const filePath = path.join(process.cwd(), 'uploads', 'Claimupload.pdf');
  await page.getByRole('button', { name: 'Attachment Choose files' }).setInputFiles(filePath);
  await page.getByRole('textbox', { name: 'Custom File Name' }).fill('Uploaded File', { timeout: 5000 });
  await page.getByRole('combobox').selectOption('1');
  await page.getByRole('textbox', { name: 'Typed Full Name*' }).fill('Files uploaded');
  await page.waitForTimeout(2000);

  await page.locator('canvas').click({
    position: {
      x: 73,
      y: 75
    }
  });

  await page.getByRole('checkbox', { name: 'I certify that the' }).check();
  await page.getByRole('button', { name: 'Finish' }).click();
  console.log('Claim submitted successfully with file attachment and signature.');

});

test('FrontEnd Self Storage Claim', async ({ page }) => {
  await page.goto('https://newdev.anovamarine.com/revised/storage_claim_or_cargo');
  await page.getByLabel('Type of Claim*').selectOption('0');
  await page.waitForTimeout(2000);
  await page.getByLabel('Region*').selectOption('3');
  await page.getByRole('combobox', { name: 'Select your Program/Policy #' }).click();
  await page.getByRole('option', { name: 'BPR-CA-LOG-259184' }).click();
  await page.getByRole('combobox', { name: 'Select facility address' }).click();
  await page.getByRole('option', { name: '104 Church Ave SE &amp; 211' }).click();
  await page.getByRole('button', { name: 'Next' }).click();

  console.log('Step 1 completed: Claim Type');

  //Step 2
  await page.waitForTimeout(2000);

  const randomNumber = Math.floor(Math.random() * 10000);

  const tenantName = `Tenant${randomNumber}`;
  const email = `tenant${randomNumber}@yopmail.com`;
  const phone = `98${Math.floor(10000000 + Math.random() * 90000000)}`;
  const unitNumber = `${Math.floor(1000 + Math.random() * 9000)}`;

  await page.getByRole('textbox', { name: 'First/Last Name (Tenant Name)*' }).fill(tenantName);

  await page.getByRole('textbox', { name: 'Email*' }).fill(email);

  await page.getByRole('textbox', { name: 'Telephone*' }).fill(phone);

  await page.getByRole('textbox', { name: 'Unit Number*' }).fill(unitNumber);
  await page.getByRole('button', { name: 'Next' }).click();
  console.log('Step 2 completed: Personal information');
  //Step 3
  currentDate = new Date();

  currentYear = currentDate.getFullYear();
  currentMonth = currentDate.getMonth(); // 0 = January
  currentDay = currentDate.getDate();

  await page.getByRole('textbox', { name: 'Mon DD, YYYY' }).first().click();

  await page.getByRole('spinbutton', { name: 'Year' }).click();
  await page.getByRole('spinbutton', { name: 'Year' }).fill(currentYear.toString());

  await page.getByLabel('Month').first().selectOption(currentMonth.toString());

  monthName = currentDate.toLocaleString('en-US', { month: 'long' });

  await page.getByLabel(`${monthName} ${currentDay},`).click();
  await page.getByRole('textbox', { name: 'Description of Incident*' }).fill('Incident testing');
  await page.getByRole('button', { name: 'Next' }).click();
  await page.waitForTimeout(2000);
  console.log('Step 3 completed: Incident Details');

  //Step 4
  await page.locator('#fl_amount_claim_0').fill('10');
  await page.getByRole('row', { name: 'Select 10 Select' }).getByPlaceholder('eg.,Sumsung...').fill('10');
  await page.getByRole('row', { name: 'Select 10 Select' }).getByPlaceholder('Years').fill('2026');
  await page.getByRole('row', { name: '2026 Select 10 Select' }).getByPlaceholder('Quantity').fill('10');
  await page.locator('#in_valuation_id_0').selectOption('0');
  await page.locator('#in_nature_of_loss_0').selectOption('7');
  await page.getByRole('button', { name: 'Next' }).click();
  console.log('Step 4 completed: Itemized Inventory');

  //Step 5
  await page.waitForTimeout(5000);
  const filePath = path.join(process.cwd(), 'uploads', 'Claimupload.pdf');
  await page.locator('input[name="st_file_1"]').setInputFiles(filePath);
  console.log('Lease Agreement uploaded successfully');

  await page.waitForTimeout(2000);

  const filePath2 = path.join(process.cwd(), 'uploads', 'Claimupload.pdf');
  await page.locator('input[name="st_file_2"]').setInputFiles(filePath2);
  console.log('Tenant Protecation Plan uploaded successfully');
  await page.waitForTimeout(2000);

  const filePath3 = path.join(process.cwd(), 'uploads', 'images.png');
  await page.locator('input[name="st_file_3"]').setInputFiles(filePath3);
  await page.waitForTimeout(2000);
  await page.getByRole('textbox', { name: 'e.g., water damage to sofa' }).fill('Test Pic');
  console.log('Pic uploaded successfully');
  await page.waitForTimeout(2000);

  const filePath4 = path.join(process.cwd(), 'uploads', 'Claimupload.pdf');
  await page.locator('input[name="st_file_4"]').setInputFiles(filePath4);
  console.log('facility uploaded successfully');

  console.log('cwd:', process.cwd());
  console.log('filePath:', filePath);
  console.log('filePath:', filePath2);
  console.log('filePath:', filePath3);
  console.log('filePath:', filePath4);
  await page.waitForTimeout(2000);
  await page.getByRole('textbox', { name: 'Typed Full Name*' }).fill('TEST');
  await page.locator('canvas').click({
    position: {
      x: 203,
      y: 68
    }
  });
  await page.getByRole('checkbox', { name: 'I certify that the' }).check();
  await page.getByRole('button', { name: 'Finish' }).click();
  console.log('Self Storage Claim submitted successfully with multiple file attachments and signature.');
})

test.describe.serial('Storage and Cargo', () => {

  // Before All
  test.beforeAll(async ({ browser }) => {

    context = await browser.newContext();
    page = await context.newPage();

    await page.goto('https://newdev.anovamarine.com/revised/login/index');

    await page.getByRole('textbox', { name: 'Email' }).fill('keri.anderson97+admin@gmail.com');

    await page.getByRole('textbox', { name: 'Password' }).fill('123456');

    await page.getByRole('button', { name: 'Log In' }).click();
    await page.waitForTimeout(2000);
    console.log('Login Successful');
  });
  test('Allow assigning and rejecting claims', async () => {
    await page.waitForTimeout(2000);
    await page.goto('https://newdev.anovamarine.com/revised/admin/storage_or_cargo_claim_request');
    const randomAction = Math.random() < 0.5 ? 'assign' : 'reject';

    await page.locator('.btn.btn-sm.btn-icon').first().click();

    if (randomAction === 'assign') {
      await page.getByRole('link', { name: 'Assign & Accept' }).click();

      await page.getByRole('combobox', { name: 'Select Claim Handler' }).click();
      await page.getByRole('option', { name: 'Angel Mederos' }).click();

      await page.getByRole('button', { name: 'Assign & Accept' }).click();
      await page.getByRole('button', { name: 'Okay' }).click();

      console.log('Claim Assigned & Accepted');
    } else {
      await page.getByRole('link', { name: 'Reject' }).click();

      await page.getByRole('button', { name: 'Yes' }).click();
      await page.getByRole('button', { name: 'Okay' }).click();

      console.log('Claim Rejected');
    }
  });
  test('Test 2 - Storage/Cargo Download', async () => {
    await page.reload();
    await page.locator('.btn.btn-sm.btn-icon').first().click();
    const downloadPromise = page.waitForEvent('download');
    await page.getByRole('link', { name: 'Download' }).click();
    const download = await downloadPromise;
  });
})