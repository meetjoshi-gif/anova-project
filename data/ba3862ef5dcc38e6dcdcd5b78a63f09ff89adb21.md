# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Salesmodule/MTCExcess.spec.ts >> MTC Excess
- Location: tests/Salesmodule/MTCExcess.spec.ts:5:5

# Error details

```
Test timeout of 100000ms exceeded.
```

```
Error: locator.click: Test timeout of 100000ms exceeded.
Call log:
  - waiting for getByRole('button', { name: 'Override and Continue' })
    - waiting for" https://newdev.anovamarine.com/revised/admin/new_mtc_excess/index" navigation to finish...
    - navigated to "https://newdev.anovamarine.com/revised/admin/new_mtc_excess/review_new_mtc_excess"

```

# Page snapshot

```yaml
- generic [ref=e2]:
  - generic [ref=e3]:
    - generic [ref=e5]:
      - generic [ref=e6]:
        - text: 
        - link "Logo" [ref=e7] [cursor=pointer]:
          - /url: https://newdev.anovamarine.com/revised/admin/
          - img "Logo" [ref=e8]
      - generic [ref=e10]:
        - generic [ref=e13]:
          - generic [ref=e15] [cursor=pointer]:
            - img "United States" [ref=e16]
            - text: EN 
          - generic [ref=e19] [cursor=pointer]: 
          - generic [ref=e22] [cursor=pointer]: 
          - generic [ref=e23]:
            - generic [ref=e24]: Anova Admin
            - generic [ref=e26] [cursor=pointer]: 
        - text: 
    - generic [ref=e27]:
      - list [ref=e31]:
        - listitem [ref=e32]:
          - link " Dashboard" [ref=e33] [cursor=pointer]:
            - /url: https://newdev.anovamarine.com/revised/admin/index
            - generic [ref=e34]: 
            - generic [ref=e35]: Dashboard
        - listitem [ref=e36]:
          - link " Users" [ref=e37] [cursor=pointer]:
            - /url: javascript:void(0)
            - generic [ref=e38]: 
            - generic [ref=e39]: Users
        - listitem [ref=e40]:
          - link " Claims" [ref=e41] [cursor=pointer]:
            - /url: javascript:void(0);
            - generic [ref=e42]: 
            - generic [ref=e43]: Claims
        - listitem [ref=e44]:
          - link " Sales" [ref=e45] [cursor=pointer]:
            - /url: javascript:void(0);
            - generic [ref=e46]: 
            - generic [ref=e47]: Sales
        - listitem [ref=e48]:
          - link " LC Requests" [ref=e49] [cursor=pointer]:
            - /url: javascript:void(0);
            - generic [ref=e50]: 
            - generic [ref=e51]: LC Requests
        - listitem [ref=e52]:
          - link " Cert Riders 92" [ref=e53] [cursor=pointer]:
            - /url: https://newdev.anovamarine.com/revised/admin/cert_riders/index
            - generic [ref=e54]: 
            - generic [ref=e55]: Cert Riders
            - generic [ref=e56]: "92"
        - listitem [ref=e57]:
          - link " Accounting" [ref=e58] [cursor=pointer]:
            - /url: https://newdev.anovamarine.com/revised/admin/accounting/index
            - generic [ref=e59]: 
            - generic [ref=e60]: Accounting
        - listitem [ref=e61]:
          - link " Reports" [ref=e62] [cursor=pointer]:
            - /url: javascript:void(0);
            - generic [ref=e63]: 
            - generic [ref=e64]: Reports
        - listitem [ref=e65]:
          - link " LC Reports" [ref=e66] [cursor=pointer]:
            - /url: javascript:void(0);
            - generic [ref=e67]: 
            - generic [ref=e68]: LC Reports
        - listitem [ref=e69]:
          - link " Anova AI" [ref=e70] [cursor=pointer]:
            - /url: javascript:void(0);
            - generic [ref=e71]: 
            - generic [ref=e72]: Anova AI
      - generic [ref=e74]:
        - generic [ref=e76]:
          - generic [ref=e80]:
            - heading "Create New MTC Excess - Step 2 - Review" [level=1] [ref=e81]
            - list [ref=e82]:
              - listitem [ref=e83]:
                - link "Dashboard" [ref=e84] [cursor=pointer]:
                  - /url: https://newdev.anovamarine.com/revised/admin/index
              - listitem [ref=e85]
              - listitem [ref=e87]:
                - link "Sales" [ref=e88] [cursor=pointer]:
                  - /url: https://newdev.anovamarine.com/revised/admin/sales/index
              - listitem [ref=e89]
              - listitem [ref=e91]: Create New MTC Excess - Step 2 - Review
          - generic [ref=e95]:
            - generic [ref=e96]:
              - generic [ref=e97]:
                - heading "Step 2 of 3" [level=3] [ref=e98]
                - heading "01 Info" [level=3] [ref=e99]
                - progressbar [ref=e101]
              - generic [ref=e102]:
                - heading "02 Review" [level=3] [ref=e103]
                - progressbar [ref=e105]
              - heading "03 Finalize" [level=3] [ref=e107]
              - alert [ref=e110]: Info details submitted successfully!
            - generic [ref=e111]:
              - generic [ref=e112]:
                - generic [ref=e113]:
                  - heading "Beneficiary" [level=3] [ref=e114]
                  - generic [ref=e115]:
                    - generic [ref=e116]: Name
                    - generic [ref=e117]: John Doe
                  - generic [ref=e118]:
                    - generic [ref=e119]: Phone
                    - generic [ref=e120]: "9874561230"
                  - generic [ref=e121]:
                    - generic [ref=e122]: Address
                    - generic [ref=e123]:
                      - text: Canada
                      - text: 47 W 13th St
                      - text: New York, NY, 10011
                - generic [ref=e124]:
                  - heading "Shipment" [level=3] [ref=e125]
                  - generic [ref=e126]:
                    - generic [ref=e127]: Transportation
                    - generic [ref=e128]: Road
                  - generic [ref=e129]:
                    - generic [ref=e130]: Sailing/Shipping Date
                    - generic [ref=e131]: 06/11/2026
                  - generic [ref=e132]:
                    - generic [ref=e133]: "BL or Shipping Document #"
                    - generic [ref=e134]: BL
                  - generic [ref=e135]:
                    - generic [ref=e136]: "Reference #"
                    - generic [ref=e137]: Reference
                  - generic [ref=e138]:
                    - generic [ref=e139]: Carrier
                    - generic [ref=e140]: TEST Carrier
                  - generic [ref=e141]:
                    - generic [ref=e142]: Origin
                    - generic [ref=e143]: United States, Origin Addres, CITY, Arkansas, 92000
                  - generic [ref=e144]:
                    - generic [ref=e145]: Destination
                    - generic [ref=e146]: United States, Des address, DEs City, Arkansas, 96582
                - generic [ref=e147]:
                  - heading "Insured Value and Commodity" [level=3] [ref=e148]
                  - generic [ref=e149]:
                    - generic [ref=e150]: Goods Type
                    - generic [ref=e151]: Mobile Phones & Laptops
                  - generic [ref=e152]:
                    - generic [ref=e153]: Value of goods
                    - generic [ref=e154]: $1.00
              - link "Edit Information" [ref=e157] [cursor=pointer]:
                - /url: https://newdev.anovamarine.com/revised/admin/new_mtc_excess
              - generic [ref=e160]:
                - generic [ref=e161]:
                  - heading "Rates & Conditions" [level=3] [ref=e162]
                  - paragraph [ref=e163]: Below are the rates, premiums, and, if applicable, taxes and fees for generating this certificate. By proceeding, you certify that you are authorized on behalf of the assured party and agree to pay the below amount for this certificate. Please verify for accuracy all details and if you have any questions please contact your Anova representative. We thank you for your business and for choosing to experience the Anova Difference.
                - generic [ref=e166]:
                  - checkbox "Edit Rate" [ref=e167]
                  - generic [ref=e168]: Edit Rate
                - generic [ref=e170]:
                  - heading "Premium" [level=3] [ref=e172]
                  - generic [ref=e175]:
                    - generic [ref=e176]: $
                    - textbox "0.00" [ref=e177]: "15.00"
                - generic [ref=e179]:
                  - heading "Deductible" [level=3] [ref=e181]
                  - generic [ref=e182]:
                    - generic [ref=e183]:
                      - heading "Flat Rate" [level=3] [ref=e185]
                      - generic [ref=e187]:
                        - combobox [ref=e188]
                        - combobox "1000" [ref=e191] [cursor=pointer]:
                          - textbox "1000" [ref=e192]
                    - generic [ref=e193]:
                      - heading "Percentage" [level=3] [ref=e195]
                      - generic [ref=e197]:
                        - combobox [ref=e198]
                        - combobox "N/A" [ref=e201] [cursor=pointer]:
                          - textbox "N/A" [ref=e202]
                - generic [ref=e205]:
                  - heading "Conditions and Restrictions" [level=3] [ref=e206]
                  - paragraph [ref=e207]: This certificate is subject to the terms and conditions of the the master policy under which it was issued. All specific commodity conditions, warranties, terms and restrictions communicated by Anova staff or underwriters are applicable. This includes any deductibles or special instructions for your particular shipment. It is your duty to communicate these restrictions to the assured party if you are acting on their behalf. All premiums are due and payable in the period specified on the invoice and/or specified by Anova. If you incorrectly issue a certificate, coverage is deemed void. Should any liabilities arise if you incorrectly issue a certificate, you agree to be responsible for any costs, liability, and/or penalties resulting therefrom. You agree to comply with any applicable laws and/or regulations. Any disputes arising from this shall be resolved as specified on the certificate of insurance.
              - generic [ref=e209]:
                - link "Cancel" [ref=e211] [cursor=pointer]:
                  - /url: javascript:void(0)
                - link "Back" [ref=e213] [cursor=pointer]:
                  - /url: https://newdev.anovamarine.com/revised/admin/new_certificate
                - link "Save for Later" [ref=e215] [cursor=pointer]:
                  - /url: javascript:void(0);
                - link "Continue" [ref=e217] [cursor=pointer]:
                  - /url: javascript:void(0);
        - generic [ref=e220]:
          - generic [ref=e221]: © 2026 Anova Marine | All rights reserved.
          - img "This site is protected by VikingCloud's Trusted Commerce program" [ref=e223] [cursor=pointer]
  - text: 
```

# Test source

```ts
  1  | import { Page } from '@playwright/test';
  2  | 
  3  | export class MTCCertificatePage {
  4  |   constructor(private page: Page) { }
  5  | 
  6  |   async navigate() {
  7  |     await this.page.waitForTimeout(3000);
  8  |     await this.page.goto('https://newdev.anovamarine.com/revised/admin/new_mtc_excess/index');
  9  |   }
  10 | 
  11 |   async createMTCExcess() {
  12 |     const page = this.page;
  13 | 
  14 |     const pendingText = page.getByText('You have one last pending');
  15 | 
  16 |     if (await pendingText.isVisible({ timeout: 2000 }).catch(() => false)) {
  17 |       await page.getByRole('link', { name: 'Continue' }).click();
  18 |     } else {
  19 | 
  20 |       await page.getByRole('combobox', { name: 'Select Client' }).click();
  21 |       await page.getByRole('option', { name: 'Keri Anderson Client Company' }).click();
  22 | 
  23 |       await page.getByRole('textbox', { name: 'Name', exact: true }).fill('John Doe');
  24 |       await page.getByRole('textbox', { name: 'Phone' }).fill('9874561230');
  25 | 
  26 |       await page.getByRole('combobox', { name: 'Select Country' }).first().click();
  27 |       await page.getByRole('option', { name: 'Canada' }).click();
  28 | 
  29 |       await page.getByRole('textbox', { name: 'Address Line 1' }).fill('47 W 13th St');
  30 |       await page.getByRole('textbox', { name: 'City', exact: true }).fill('New York');
  31 |       await page.getByRole('textbox', { name: 'State' }).fill('NY');
  32 |       await page.getByRole('textbox', { name: 'Postal Code' }).fill('10011');
  33 | 
  34 |       await page.getByRole('textbox', { name: 'BL or Shipping Document #' }).fill('BL');
  35 |       await page.getByRole('textbox', { name: 'Reference #' }).fill('Reference');
  36 | 
  37 |       await page.getByRole('combobox', { name: 'Select Country' }).nth(1).click();
  38 |       await page.getByRole('option', { name: 'United States' }).click();
  39 | 
  40 |       await page.getByRole('combobox', { name: 'Select Country' }).click();
  41 |       await page.getByRole('option', { name: 'United States' }).click();
  42 |       await page.getByRole('textbox', { name: 'Origin Address' }).fill('Origin Addres');
  43 | 
  44 |       await page.getByRole('combobox', { name: 'Select Origin State' }).click();
  45 |       await page.getByRole('option', { name: 'Arkansas' }).click();
  46 |       await page.getByRole('textbox', { name: 'Origin Postal Code' }).fill('92000');
  47 | 
  48 |       await page.getByRole('textbox', { name: 'Origin City' }).fill('CITY');
  49 |       await page.getByRole('textbox', { name: 'Carrier' }).fill('TEST Carrier');
  50 |       await page.getByRole('combobox', { name: 'Select Destination State' }).click();
  51 |       await page.getByRole('option', { name: 'Arkansas' }).click();
  52 | 
  53 |       await page.getByRole('textbox', { name: 'Destination Address' }).fill('Des address');
  54 |       await page.getByRole('textbox', { name: 'Destination City' }).fill('DEs City');
  55 |       await page.getByRole('textbox', { name: 'Destination Postal Code' }).fill('96582');
  56 | 
  57 | 
  58 |       await page.getByRole('combobox', { name: 'Select Commodity' }).click();
  59 |       await page.getByRole('option', { name: 'Mobile Phones & Laptops' }).click();
  60 | 
  61 |       await page.getByRole('textbox', { name: 'Insured Value(USD)' }).fill('1');
  62 |       await page.getByRole('textbox', { name: 'Goods Type description/letter' }).fill('Lorem Ipsum is simply dummy text of the printing and typesetting industry.');
  63 |       await page.getByRole('textbox', { name: 'Extra Condition (Optional)' }).fill('TEST');
  64 |       await page.getByRole('link', { name: 'Continue' }).click();
> 65 |       await page.getByRole('button', { name: 'Override and Continue' }).click();
     |                                                                         ^ Error: locator.click: Test timeout of 100000ms exceeded.
  66 |       const yesButton = page.getByRole('button', { name: 'Yes' });
  67 | 
  68 |       if (await yesButton.isVisible({ timeout: 2000 }).catch(() => false)) {
  69 |         await yesButton.click();
  70 |       } else {
  71 |         await page.getByRole('link', { name: 'Continue' }).click();
  72 |       }
  73 |       
  74 |     }
  75 |     
  76 |   }
  77 | 
  78 |   async goToSalesMTC() {
  79 |     await this.page.goto('https://newdev.anovamarine.com/revised/admin/sales');
  80 |   }
  81 |   
  82 |     async downloadfiles() {
  83 |     await this.page.goto('https://newdev.anovamarine.com/revised/admin/sales');
  84 |         await this.page.reload();
  85 | 
  86 |     //CERT Downloaded
  87 |     const downloadPromise = this.page.waitForEvent('download');
  88 | 
  89 |     await this.page.locator('a[href*="download_certificate_pdf"]').first().click();
  90 | 
  91 |     const download = await downloadPromise;
  92 | 
  93 |     //Invoice Downloaded
  94 |     const download1Promise = this.page.waitForEvent('download');
  95 |     await this.page.locator('a[href*="download_invoice_pdf"]').first().click();
  96 |     const download1 = await download1Promise;
  97 | 
  98 |   }
  99 | }
```