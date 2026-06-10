# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Salesmodule\Cargocert.spec.ts >> Sale and Cargo
- Location: tests\Salesmodule\Cargocert.spec.ts:5:5

# Error details

```
Error: page.waitForEvent: Target page, context or browser has been closed
=========================== logs ===========================
waiting for event "popup"
============================================================
```

```
Error: locator.click: Target page, context or browser has been closed
Call log:
  - waiting for getByRole('link', { name: 'Edit Certificate' })

```

# Test source

```ts
  1   | import { Page } from '@playwright/test';
  2   | 
  3   | export class CargoCertificatePage {
  4   |   constructor(private page: Page) { }
  5   | 
  6   |   async navigate() {
  7   |     await this.page.waitForTimeout(3000)
  8   |     await this.page.goto('https://newdev.anovamarine.com/revised/admin/new_certificate/index');
  9   |   }
  10  | 
  11  |   async createCertificate() {
  12  |     const page = this.page;
  13  | 
  14  |     const pendingText = page.getByText('You have one last pending');
  15  |     
  16  |     if (await pendingText.isVisible({ timeout: 2000 }).catch(() => false)) {
  17  |       await page.getByRole('link', { name: 'Continue' }).click();
  18  |     } else {
  19  | 
  20  |       await page.getByRole('combobox', { name: 'Select Client' }).click();
  21  |       await page.getByRole('option', { name: 'Keri Anderson Client Company' }).click();
  22  | 
  23  |       await page.getByRole('textbox', { name: 'Name', exact: true }).fill('John Doe');
  24  |       await page.getByRole('textbox', { name: 'Phone' }).fill('9874561230');
  25  | 
  26  |       await page.getByRole('combobox', { name: 'Select Country' }).first().click();
  27  |       await page.getByRole('option', { name: 'Canada' }).click();
  28  | 
  29  |       await page.getByRole('textbox', { name: 'Address Line 1' }).fill('47 W 13th St');
  30  |       await page.getByRole('textbox', { name: 'City', exact: true }).fill('New York');
  31  |       await page.getByRole('textbox', { name: 'State' }).fill('NY');
  32  |       await page.getByRole('textbox', { name: 'Postal Code' }).fill('10011');
  33  | 
  34  |       await page.getByRole('radio', { name: 'Ocean' }).check();
  35  | 
  36  |       await page.getByRole('textbox', { name: 'AWB/BL or Shipping Document #' }).fill('AWB/BL');
  37  |       await page.getByRole('textbox', { name: 'Reference #' }).fill('Reference');
  38  | 
  39  |       await page.getByRole('combobox', { name: 'Select Country' }).first().click();
  40  |       await page.getByRole('option', { name: 'Australia' }).click();
  41  | 
  42  |       await page.getByRole('textbox', { name: 'Origin City' }).fill('TEST Origin');
  43  |       await page.getByRole('textbox', { name: 'Vessel/Voyage' }).fill('TEST Vessel/Voyage');
  44  | 
  45  |       await page.getByRole('textbox', { name: 'Select Country' }).click();
  46  |       await page.getByRole('option', { name: 'Benin' }).click();
  47  | 
  48  |       await page.getByRole('textbox', { name: 'Destination City' }).fill('TEST Destination');
  49  | 
  50  |       await page.getByRole('radio', { name: 'Used' }).check();
  51  |       await page.locator('#goods_traveling_on_deck0').check();
  52  | 
  53  |       await page.getByRole('combobox', { name: 'Select Type of Shipment' }).click();
  54  |       await page.getByRole('option', { name: 'FCL' }).click();
  55  | 
  56  |       await page.getByRole('combobox', { name: 'Select Commodity' }).click();
  57  |       await page.getByRole('option', { name: 'Computers / Electronics (no' }).click();
  58  | 
  59  |       await page.getByRole('textbox', { name: 'Insured Value(USD)' }).fill('1');
  60  |       await page.getByRole('textbox', { name: 'Goods Type description/letter' }).fill('Lorem Ipsum is simply dummy text of the printing and typesetting industry.');
  61  |       await page.getByRole('textbox', { name: 'Extra Condition (Optional)' }).fill('TEST');
  62  |       await page.getByRole('link', { name: 'Continue' }).click();
  63  |       await page.getByRole('button', { name: 'Override and Continue' }).click();
  64  |       const yesButton = page.getByRole('button', { name: 'Yes' });
  65  | 
  66  |       if (await yesButton.isVisible({ timeout: 2000 }).catch(() => false)) {
  67  |         await yesButton.click();
  68  |       } else {
  69  |         await page.getByRole('link', { name: 'Continue' }).click();
  70  |       }
  71  |       //await page.getByRole('button', { name: 'Yes' }).click();
  72  |       //await page.getByRole('link', { name: 'Continue' }).click();
  73  | 
  74  |     }
  75  |   }
  76  | 
  77  |   async goToSales() {
  78  |     await this.page.goto('https://newdev.anovamarine.com/revised/admin/sales');
  79  |   }
  80  | 
  81  |   async EditCertificate() {
  82  |   await this.page.getByRole('link', {name: /\d{2}\/\d{2}\/\d{4}/}).first().click();
  83  |   await this.page.reload();
  84  |     await this.page.getByText('Actions').click();
  85  |   const page1Promise = this.page.waitForEvent('popup');
> 86  |   await this.page.getByRole('link', { name: 'Edit Certificate' }).click();
      |                                                                   ^ Error: locator.click: Target page, context or browser has been closed
  87  |   const page1 = await page1Promise;
  88  | 
  89  |   await page1.getByRole('textbox', { name: 'Address Line 1' }).fill('Edit 123 Main street');
  90  |   await page1.getByRole('textbox', { name: 'AWB/BL or Shipping Document #' }).fill('AWB/BL Edit');
  91  |   await page1.getByRole('textbox', { name: 'Origin City' }).fill('TEST Origin Edit');
  92  |   await page1.getByRole('textbox', { name: 'Vessel/Voyage' }).fill('TEST Vessel/Voyage');
  93  |   await page1.getByRole('textbox', { name: 'Vessel/Voyage' }).fill('TEST Vessel/Voyage Edit');
  94  |   await page1.getByRole('textbox', { name: 'Insured Value(USD)' }).fill('2');
  95  |   await page1.waitForTimeout(2000);  
  96  |   await page1.getByRole('link', { name: 'Continue' }).click();
  97  |   await page1.getByRole('button', { name: 'Override and Continue' }).click();
  98  |   await page1.goto('https://newdev.anovamarine.com/revised/admin/new_certificate/review_new_certificate');
  99  |   await page1.getByRole('link', { name: 'Continue' }).click();
  100 |   await page1.getByRole('textbox', { name: 'Reason' }).fill('Edit the reason ');
  101 |   await page1.getByRole('link', { name: 'Continue' }).click();
  102 |   await page1.close();
  103 |   }
  104 | 
  105 |   async downloadfiles() {
  106 |     await this.page.goto('https://newdev.anovamarine.com/revised/admin/sales');
  107 |         await this.page.reload();
  108 | 
  109 |     //CERT Downloaded
  110 |     const downloadPromise = this.page.waitForEvent('download');
  111 | 
  112 |     await this.page.locator('a[href*="download_certificate_pdf"]').first().click();
  113 | 
  114 |     const download = await downloadPromise;
  115 | 
  116 |     //Invoice Downloaded
  117 |     const download1Promise = this.page.waitForEvent('download');
  118 |     await this.page.locator('a[href*="download_invoice_pdf"]').first().click();
  119 |     const download1 = await download1Promise;
  120 | 
  121 |   }
  122 | 
  123 | }
```