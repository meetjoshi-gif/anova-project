// import { Page } from '@playwright/test';

// export class CargoCertificatePage {
//   constructor(private page: Page) { }

//   async navigate() {
//     await this.page.waitForTimeout(3000)
//     await this.page.goto('https://newdev.anovamarine.com/revised/admin/new_certificate/index');
//   }

//   async createCertificate() {
//     const page = this.page;

//     const pendingText = page.getByText('You have one last pending');
    
//     if (await pendingText.isVisible({ timeout: 2000 }).catch(() => false)) {
//       await page.getByRole('link', { name: 'Continue' }).click();
//     } else {

//       await page.getByRole('combobox', { name: 'Select Client' }).click();
//       await page.getByRole('option', { name: 'Keri Anderson Client Company' }).click();

//       await page.getByRole('textbox', { name: 'Name', exact: true }).fill('John Doe');
//       await page.getByRole('textbox', { name: 'Phone' }).fill('9874561230');

//       await page.getByRole('combobox', { name: 'Select Country' }).first().click();
//       await page.getByRole('option', { name: 'Canada' }).click();

//       await page.getByRole('textbox', { name: 'Address Line 1' }).fill('47 W 13th St');
//       await page.getByRole('textbox', { name: 'City', exact: true }).fill('New York');
//       await page.getByRole('textbox', { name: 'State' }).fill('NY');
//       await page.getByRole('textbox', { name: 'Postal Code' }).fill('10011');

//       await page.getByRole('radio', { name: 'Ocean' }).check();

//       await page.getByRole('textbox', { name: 'AWB/BL or Shipping Document #' }).fill('AWB/BL');
//       await page.getByRole('textbox', { name: 'Reference #' }).fill('Reference');

//       await page.getByRole('combobox', { name: 'Select Country' }).first().click();
//       await page.getByRole('option', { name: 'Australia' }).click();

//       await page.getByRole('textbox', { name: 'Origin City' }).fill('TEST Origin');
//       await page.getByRole('textbox', { name: 'Vessel/Voyage' }).fill('TEST Vessel/Voyage');

//       await page.getByRole('textbox', { name: 'Select Country' }).click();
//       await page.getByRole('option', { name: 'Benin' }).click();

//       await page.getByRole('textbox', { name: 'Destination City' }).fill('TEST Destination');

//       await page.getByRole('radio', { name: 'Used' }).check();
//       await page.locator('#goods_traveling_on_deck0').check();

//       await page.getByRole('combobox', { name: 'Select Type of Shipment' }).click();
//       await page.getByRole('option', { name: 'FCL' }).click();

//       await page.getByRole('combobox', { name: 'Select Commodity' }).click();
//       await page.getByRole('option', { name: 'Computers / Electronics (no' }).click();

//       await page.getByRole('textbox', { name: 'Insured Value(USD)' }).fill('1');
//       await page.getByRole('textbox', { name: 'Goods Type description/letter' }).fill('Lorem Ipsum is simply dummy text of the printing and typesetting industry.');
//       await page.getByRole('textbox', { name: 'Extra Condition (Optional)' }).fill('TEST');
//       await page.getByRole('link', { name: 'Continue' }).click();
//      // await page.getByRole('button', { name: 'Override and Continue' }).click();
//       const yesButton = page.getByRole('button', { name: 'Yes' });

//       if (await yesButton.isVisible({ timeout: 2000 }).catch(() => false)) {
//         await yesButton.click();
//       } else {
//         await page.getByRole('link', { name: 'Continue' }).click();
//       }
//       await page.waitForTimeout(3000);
//       //await page.getByRole('button', { name: 'Yes' }).click();
//       //await page.getByRole('link', { name: 'Continue' }).click();

//     }
//   }

//   async goToSales() {
//     await this.page.goto('https://newdev.anovamarine.com/revised/admin/sales');
//   }

//   async EditCertificate() {
//   await this.page.getByRole('link', {name: /\d{2}\/\d{2}\/\d{4}/}).first().click();
//   await this.page.reload();
//     await this.page.getByText('Actions').click();
//   const page1Promise = this.page.waitForEvent('popup');
//   await this.page.getByRole('link', { name: 'Edit Certificate' }).click();
//   const page1 = await page1Promise;

//   await page1.getByRole('textbox', { name: 'Address Line 1' }).fill('Edit 123 Main street');
//   await page1.getByRole('textbox', { name: 'AWB/BL or Shipping Document #' }).fill('AWB/BL Edit');
//   await page1.getByRole('textbox', { name: 'Origin City' }).fill('TEST Origin Edit');
//   await page1.getByRole('textbox', { name: 'Vessel/Voyage' }).fill('TEST Vessel/Voyage');
//   await page1.getByRole('textbox', { name: 'Vessel/Voyage' }).fill('TEST Vessel/Voyage Edit');
//   await page1.getByRole('textbox', { name: 'Insured Value(USD)' }).fill('2');
//   await page1.waitForTimeout(2000);  
//   await page1.getByRole('link', { name: 'Continue' }).click();
// //   await page1.getByRole('button', { name: 'Override and Continue' }).click();
//   await page1.goto('https://newdev.anovamarine.com/revised/admin/new_certificate/review_new_certificate');
//   await page1.getByRole('link', { name: 'Continue' }).click();
//   await page1.getByRole('textbox', { name: 'Reason' }).fill('Edit the reason ');
//   await page1.getByRole('link', { name: 'Continue' }).click();
//   await page1.close();
//   }

//   async downloadfiles() {
//     await this.page.goto('https://newdev.anovamarine.com/revised/admin/sales');
//         await this.page.reload();

//     //CERT Downloaded
//     const downloadPromise = this.page.waitForEvent('download');

//     await this.page.locator('a[href*="download_certificate_pdf"]').first().click();

//     const download = await downloadPromise;

//     //Invoice Downloaded
//     const download1Promise = this.page.waitForEvent('download');
//     await this.page.locator('a[href*="download_invoice_pdf"]').first().click();
//     const download1 = await download1Promise;

//   }

// }