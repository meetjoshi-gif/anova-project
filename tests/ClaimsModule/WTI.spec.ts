import { test, expect, Browser, BrowserContext, Page } from '@playwright/test';
import path from 'path';

let context: BrowserContext;
let page: Page;
let email: string;

test('Test 1 - WTI Claim Module Created', async ({ page }) => {
  test.setTimeout(50000);
  await page.goto('https://newdev.anovamarine.com/revised/wti_claim');
  const uniqueId = Date.now();

  const firstName = `First${uniqueId}`;
  const lastName = `Last${uniqueId}`;
  email = `wti${uniqueId}@yopmail.com`;

  await page.getByRole('textbox', {
    name: 'Last Name*'
  }).fill(lastName);

  await page.getByRole('textbox', {
    name: 'First Name*'
  }).fill(firstName);

  await page.getByLabel('Country*').selectOption('222');

  await page.getByRole('textbox', {
    name: 'Email*'
  }).fill(email);
  const randomPhone = `9${Math.floor(100000000 + Math.random() * 900000000)}`;

  await page.getByRole('textbox', {
    name: 'Telephone*'
  }).fill(randomPhone);

  console.log(`Generated Phone Number: ${randomPhone}`);

  const usAddresses = [
    '742 Evergreen Terrace, Springfield, IL 62704',
    '1600 Pennsylvania Avenue NW, Washington, DC 20500',
    '350 Fifth Avenue, New York, NY 10118',
    '1 Infinite Loop, Cupertino, CA 95014',
    '2211 North First Street, San Jose, CA 95131'
  ];

  // Select random address
  const randomAddress =
    usAddresses[Math.floor(Math.random() * usAddresses.length)];

  await page.getByRole('textbox', {
    name: 'Address*'
  }).fill(randomAddress);

  console.log(`Selected Address: ${randomAddress}`);
  const movingCompany = `Moving Company ${Date.now()}`;

  await page.getByRole('textbox', {
    name: 'Moving Company*'
  }).fill(movingCompany);

  console.log(`Entered Moving Company: ${movingCompany}`);

  await page.getByRole('button', { name: 'Next' }).click();
  console.log('Step 1 completed: Your Details');
  await page.waitForTimeout(2000);
  //Step 2
  await page.getByRole('checkbox', { name: 'Same as Your Address' }).check();
  await page.waitForTimeout(2000);
  await page.getByRole('button', { name: 'Next' }).click();

  console.log('Step 2 completed: Cargo Location');
  //Step 3
  await page.getByRole('textbox', { name: 'Description of Claim*' }).fill('Claim Description');
  await page.waitForTimeout(2000);
  const date = new Date();

  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();

  const monthName = date.toLocaleString('en-US', {
    month: 'long'
  });

  await page.getByRole('textbox', {
    name: 'Shipment Date*'
  }).click();

  await page.getByRole('spinbutton', {
    name: 'Year'
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

  await page.getByRole('textbox', { name: 'Additional Comments*' }).fill('Additonal Comment Not Needed');
  await page.getByRole('button', { name: 'Next' }).click();
  console.log('Step 3 completed: Claim Details');
  //Step 4

  await page.waitForTimeout(2000);
  await page.locator('#st_catgeory_0').click();
  await page.locator('#st_catgeory_0').fill('Test');
  await page.locator('#st_packing_list_number_0').fill('10');
  await page.locator('#st_item_description_0').fill('10');
  const options = ['3', '8', '2', '9', '1', '4', '5', '10', '7'];

  const randomOption =
    options[Math.floor(Math.random() * options.length)];

  await page.locator('#in_nature_of_loss_0')
    .selectOption(randomOption);

  console.log(`Selected Option: ${randomOption}`);
  await page.locator('#fl_replacement_value_0').fill('10');
  await page.locator('#fl_insured_value_0').fill('10');
  await page.locator('#fl_amount_claim_0').fill('10');
  await page.getByRole('button', { name: 'Next' }).click();
  console.log('Step 4 completed: Claim Items Description');
  //Step 5
  await page.waitForTimeout(5000);
  const filePath = path.join(process.cwd(), 'uploads', 'Claimupload.pdf');
  await page.getByRole('button', { name: 'Attachment Choose files' }).setInputFiles(filePath);


  await page.getByRole('textbox', { name: 'Custom File Name' }).fill('Uploaded File', { timeout: 5000 });
  await page.getByRole('combobox').selectOption('1');
  await page.getByRole('button', { name: 'Finish' }).click();
  await page.waitForTimeout(5000);
  console.log('Step 5 completed: Supporting Documents and Claim Submission');
  // console.log({firstName,lastName,email});

});

test.describe.serial('Claims module WTI', () => {

  // Before All
  test.beforeAll(async ({ browser }) => {

    context = await browser.newContext();
    page = await context.newPage();

    await page.goto('https://newdev.anovamarine.com/revised/login/index');

    await page.getByRole('textbox', { name: 'Email' }).fill('keri.anderson97+admin@gmail.com');

    await page.getByRole('textbox', { name: 'Password' }).fill('123456');

    await page.getByRole('button', { name: 'Log In' }).click();
    await page.waitForTimeout(5000);
    console.log('Login Successful for WTI Claims');
  });

  test('Test 2 - WTI Claims reject and Accept', async () => {
    await page.goto('https://newdev.anovamarine.com/revised/admin/claims/wti_requests');
    await page.reload();
    const actions = ['Reject', 'Assign & Accept'];

    const randomAction =
      actions[Math.floor(Math.random() * actions.length)];

    await page.locator('.btn.btn-sm.btn-icon')
      .first()
      .click();
    await page.waitForTimeout(2000);
    await page.getByRole('link', {
      name: randomAction
    }).click();

    if (randomAction === 'Reject') {

      await page.getByRole('button', {
        name: 'Yes'
      }).click();

    } else {

      await page.getByRole('combobox', {
        name: 'Select Claim Handler'
      }).click();

      await page.getByRole('option', {
        name: 'Angel Mederos'
      }).click();

      await page.getByRole('combobox', {
        name: 'Select WTI Moving Company'
      }).click();

      await page.getByRole('option', {
        name: 'Transportation Services'
      }).click();

      await page.getByRole('combobox', {
        name: 'Select Policy'
      }).click();

      await page.locator(
        'li.select2-results__option--selectable'
      ).filter({
        hasText: /OCMR-\d+-\d+/
      }).first().click();

      await page.getByRole('button', {
        name: 'Assign & Accept'
      }).click();
    }

    await page.getByRole('button', {
      name: 'Okay'
    }).click();

    console.log(`Executed Action: ${randomAction}`);

  })


  test('Test 3 - WTI Claims Filter', async () => {
    await page.reload();
    await page.getByText('Filter', { exact: true }).click();
    const statusOptions = ['Accepted', 'Rejected'];

    const randomStatus =
      statusOptions[Math.floor(Math.random() * statusOptions.length)];

    await page.getByRole('combobox', {
      name: 'Pending'
    }).click();

    await page.getByRole('option', {
      name: randomStatus
    }).click();

    console.log(`Selected Status: ${randomStatus}`);
    await page.getByRole('button', { name: 'Apply' }).click();
    await page.reload();
    await page.getByText('Filter', { exact: true }).click();
    await page.getByRole('link', { name: 'Reset' }).click();
    console.log('Filter applied and reset successfully');


  })

  test('Test 4 - WTI Claim Email Validation', async () => {
    await page.reload();
    await page.getByRole('textbox', { name: 'Search by Request #, Name,' }).fill('wti1780397073649@yopmail.com');
    await page.getByRole('button').filter({ hasText: /^$/ }).click();
    await page.getByTitle('Reset').click();

    console.log('Searched for WTI Claim with Email:', email);
  })
  test.afterAll(async () => {
    await context.close();
    console.log('Browser Closed Successfully for WTI Claims');
  })
}) 