import { test, expect } from '@playwright/test';

let insurerName: string;

test('Insurers Creation', async ({ page }) => {
  await page.goto('https://newdev.anovamarine.com/revised/login/index');
  await page.getByRole('textbox', { name: 'Email' }).fill('keri.anderson97+admin@gmail.com');
  await page.getByRole('textbox', { name: 'Password' }).fill('123456');
  await page.getByRole('button', { name: 'Log In' }).click();
  await page.getByRole('link', { name: ' Users' }).click();
  await page.getByRole('link', { name: 'Insurers' }).click();
  await page.getByRole('link', { name: 'Add New Insurer' }).click();
insurerName = `Insurer_${Date.now()}`;
await page.getByRole('textbox', { name: 'Company Name' }).fill(insurerName);

await page.getByRole('textbox', { name: 'Phone' }).fill(`9${Math.floor(100000000 + Math.random() * 900000000)}`

);
  await page.getByRole('combobox', { name: 'Select Country' }).click();
  await page.getByRole('searchbox', { name: 'Search' }).fill('Unite');
  await page.getByRole('option', { name: 'United States', exact: true }).click();
  await page.getByRole('textbox', { name: 'Address Line 1' }).fill('12 Wall Street');
  await page.getByRole('textbox', { name: 'City' }).fill('NY');
  await page.getByRole('combobox', { name: 'Select Country' }).click();
  await page.getByRole('searchbox', { name: 'Search' }).fill('New');
  await page.getByRole('option', { name: 'New York' }).click();
  await page.getByRole('textbox', { name: 'Postal Code' }).fill('10010');
  await page.getByRole('textbox', { name: 'Note' }).fill('Testing Note');
  await page.getByRole('textbox', { name: 'Unique Market Reference(UMR)/' }).click();
const UMR = Date.now();

await page
  .getByRole('textbox', { name: 'Unique Market Reference(UMR)/' }).fill(`UMR${UMR}`);  
  await page.getByRole('button', { name: 'Save Insurer' }).click();
  await page.getByRole('button', { name: 'Okay' }).click();
});

test('Search Insurer', async ({ page }) => {
  await page.getByRole('textbox', { name: 'Search by Company Name or' }).click();
  await page.getByRole('textbox', { name: 'Search by Company Name or' }).fill(insurerName);
  await page.getByRole('button').filter({ hasText: /^$/ }).click();
})