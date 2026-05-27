import { test, expect } from '@playwright/test';

test('Claim Module WTI', async ({ page }) => {
  await page.goto('https://newdev.anovamarine.com/revised/wti_claim');
const uniqueId = Date.now();

const firstName = `First${uniqueId}`;
const lastName = `Last${uniqueId}`;
const email = `wti${uniqueId}@yopmail.com`;

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
  await page.getByRole('textbox', { name: 'Moving Company*' }).fill('Moving Company');
  await page.getByRole('button', { name: 'Next' }).click();
  await page.waitForTimeout(2000);
  await page.getByRole('checkbox', { name: 'Same as Your Address' }).check();


console.log({firstName,lastName,email});


});