import { Page } from '@playwright/test';

export class MTCCertificatePage {
  constructor(private page: Page) { }

  async navigate() {
    await this.page.waitForTimeout(3000);
    await this.page.goto('https://newdev.anovamarine.com/revised/admin/new_mtc_excess/index');
  }

  async createMTCExcess() {
    const page = this.page;

    const pendingText = page.getByText('You have one last pending');

    if (await pendingText.isVisible({ timeout: 2000 }).catch(() => false)) {
      await page.getByRole('link', { name: 'Continue' }).click();
    } else {

      await page.getByRole('combobox', { name: 'Select Client' }).click();
      await page.getByRole('option', { name: 'Keri Anderson Client Company' }).click();

      await page.getByRole('textbox', { name: 'Name', exact: true }).fill('John Doe');
      await page.getByRole('textbox', { name: 'Phone' }).fill('9874561230');

      await page.getByRole('combobox', { name: 'Select Country' }).first().click();
      await page.getByRole('option', { name: 'Canada' }).click();

      await page.getByRole('textbox', { name: 'Address Line 1' }).fill('47 W 13th St');
      await page.getByRole('textbox', { name: 'City', exact: true }).fill('New York');
      await page.getByRole('textbox', { name: 'State' }).fill('NY');
      await page.getByRole('textbox', { name: 'Postal Code' }).fill('10011');

      await page.getByRole('textbox', { name: 'BL or Shipping Document #' }).fill('BL');
      await page.getByRole('textbox', { name: 'Reference #' }).fill('Reference');

      await page.getByRole('combobox', { name: 'Select Country' }).nth(1).click();
      await page.getByRole('option', { name: 'United States' }).click();

      await page.getByRole('combobox', { name: 'Select Country' }).click();
      await page.getByRole('option', { name: 'United States' }).click();
      await page.getByRole('textbox', { name: 'Origin Address' }).fill('Origin Addres');

      await page.getByRole('combobox', { name: 'Select Origin State' }).click();
      await page.getByRole('option', { name: 'Arkansas' }).click();
      await page.getByRole('textbox', { name: 'Origin Postal Code' }).fill('92000');

      await page.getByRole('textbox', { name: 'Origin City' }).fill('CITY');
      await page.getByRole('textbox', { name: 'Carrier' }).fill('TEST Carrier');
      await page.getByRole('combobox', { name: 'Select Destination State' }).click();
      await page.getByRole('option', { name: 'Arkansas' }).click();

      await page.getByRole('textbox', { name: 'Destination Address' }).fill('Des address');
      await page.getByRole('textbox', { name: 'Destination City' }).fill('DEs City');
      await page.getByRole('textbox', { name: 'Destination Postal Code' }).fill('96582');


      await page.getByRole('combobox', { name: 'Select Commodity' }).click();
      await page.getByRole('option', { name: 'Mobile Phones & Laptops' }).click();

      await page.getByRole('textbox', { name: 'Insured Value(USD)' }).fill('1');
      await page.getByRole('textbox', { name: 'Goods Type description/letter' }).fill('Lorem Ipsum is simply dummy text of the printing and typesetting industry.');
      await page.getByRole('textbox', { name: 'Extra Condition (Optional)' }).fill('TEST');
      await page.getByRole('link', { name: 'Continue' }).click();
      await page.getByRole('button', { name: 'Override and Continue' }).click();
      const yesButton = page.getByRole('button', { name: 'Yes' });

      if (await yesButton.isVisible({ timeout: 2000 }).catch(() => false)) {
        await yesButton.click();
      } else {
        await page.getByRole('link', { name: 'Continue' }).click();
      }
      
    }
    
  }

  async goToSalesMTC() {
    await this.page.goto('https://newdev.anovamarine.com/revised/admin/sales');
  }
  
    async downloadfiles() {
    await this.page.goto('https://newdev.anovamarine.com/revised/admin/sales');
        await this.page.reload();

    //CERT Downloaded
    const downloadPromise = this.page.waitForEvent('download');

    await this.page.locator('a[href*="download_certificate_pdf"]').first().click();

    const download = await downloadPromise;

    //Invoice Downloaded
    const download1Promise = this.page.waitForEvent('download');
    await this.page.locator('a[href*="download_invoice_pdf"]').first().click();
    const download1 = await download1Promise;

  }
}