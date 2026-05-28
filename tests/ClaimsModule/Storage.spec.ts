import { test, expect } from '@playwright/test';

test('Storage-Claim', async ({ page }) => {
  await page.goto('https://newdev.anovamarine.com/revised/storage_claim_or_cargo');
//  await page.getByLabel('Type of Claim*').selectOption('0');
//   await page.getByLabel('Region*').selectOption('3');
//   await page.getByRole('combobox', { name: 'Select your Program/Policy #' }).click();
//   await page.getByRole('option', { name: 'BPR-CA-LOG-' }).click();
//   await page.getByRole('combobox', { name: 'Select facility address' }).click();
//   await page.getByRole('option', { name: '104 Church Ave SE &amp; 211' }).click();


  //Cargo Claims
await page.getByLabel('Type of Claim*').selectOption('1');
  await page.getByRole('combobox', { name: 'Select your Program/Policy #' }).click();
  await page.getByRole('option', { name: 'RBX-PLCY-782401-' }).click();
  await page.getByRole('combobox', { name: 'Select facility address' }).click();
  await page.getByRole('option', { name: '13118 Schroeder Road, Houston' }).click();
    await page.getByRole('button', { name: 'Next' }).click();
console.log('Step 1 completed: Claim Type');
  await page.getByRole('textbox', { name: 'Last Name*' }).fill('John');
  await page.getByRole('textbox', { name: 'First Name*' }).fill('Doe');
  await page.locator('#st_address').fill('1231 Main Street, Houston, TX 77002');
  await page.locator('#in_country_id').selectOption('222');
  await page.getByRole('textbox', { name: 'Email*' }).fill('Johndoe@yopmail.com');
  await page.getByRole('textbox', { name: 'Telephone*' }).fill('9874563210');
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
  await page.locator('#in_nature_of_loss_0').selectOption('3');
  await page.locator('#fl_replacement_value_0').click();
  await page.locator('#fl_replacement_value_0').fill('10');
  await page.locator('#fl_insured_value_0').click();
  await page.locator('#fl_insured_value_0').fill('10');
  await page.locator('#fl_amount_claim_0').click();
  await page.locator('#fl_amount_claim_0').fill('10');

});