import { Page, Locator } from '@playwright/test';

export class ClientsPage {
  readonly page: Page;

  // Navigation and main actions
  readonly linkAddNewClient: Locator;
  readonly buttonSaveClient: Locator;
  readonly buttonOkay: Locator;

  // Form fields
  readonly inputCompanyName: Locator;
  readonly inputPhone: Locator;
  readonly inputAddressLine1: Locator;
  readonly inputCity: Locator;
  readonly inputPostalCode: Locator;
  readonly inputDBA: Locator;
  readonly inputMC: Locator;
  readonly inputDOT: Locator;
  readonly inputTaxId: Locator;

  // Checkboxes
  readonly checkboxMTCExcess: Locator;
  readonly checkboxCargoReferral: Locator;
  readonly checkboxPaywallActivation: Locator;
  readonly checkboxReceiveInvoices: Locator;

  // Dropdowns
  readonly comboboxCountry: Locator;
  readonly comboboxState: Locator;
  readonly comboboxUnderwriter: Locator;
  readonly comboboxBackdatingTolerance: Locator;

  // Search and filter
  readonly inputSearch: Locator;
  readonly buttonFilter: Locator;
  readonly buttonApply: Locator;
  readonly buttonReset: Locator;

  // Column settings
  readonly buttonColumnsSetting: Locator;
  readonly checkboxAddress: Locator;
  readonly checkboxBalanceDue: Locator;
  readonly checkboxStatus: Locator;
  readonly buttonOK: Locator;

  // Export
  readonly linkExportXLS: Locator;

  constructor(page: Page) {
    this.page = page;

    // Navigation and main actions
    this.linkAddNewClient = page.getByRole('link', { name: 'Add New Client' });
    this.buttonSaveClient = page.getByRole('button', { name: 'Save Client' });
    this.buttonOkay = page.getByRole('button', { name: 'Okay' });

    // Form fields
    this.inputCompanyName = page.getByRole('textbox', { name: 'Company Name' });
    this.inputPhone = page.getByRole('textbox', { name: 'Phone' });
    this.inputAddressLine1 = page.getByRole('textbox', { name: 'Address Line 1' });
    this.inputCity = page.getByRole('textbox', { name: 'City' });
    this.inputPostalCode = page.getByRole('textbox', { name: 'Postal Code' });
    this.inputDBA = page.getByRole('textbox', { name: 'DBA' });
    this.inputMC = page.getByRole('textbox', { name: 'MC#' });
    this.inputDOT = page.getByRole('textbox', { name: 'DOT#' });
    this.inputTaxId = page.getByRole('textbox', { name: 'Tax ID or EIN' });

    // Checkboxes
    this.checkboxMTCExcess = page.getByRole('checkbox', { name: 'MTC Excess' });
    this.checkboxCargoReferral = page.getByRole('checkbox', { name: 'Cargo Referral' });
    this.checkboxPaywallActivation = page.getByRole('checkbox', { name: 'Paywall Activation' });
    this.checkboxReceiveInvoices = page.getByRole('checkbox', { name: 'Receive invoices' });

    // Dropdowns
    this.comboboxCountry = page.getByRole('combobox', { name: 'Select Country' });
    this.comboboxState = page.getByRole('combobox', { name: 'Select State' });
    this.comboboxUnderwriter = page.getByRole('combobox', { name: 'Select Underwriter' });
    this.comboboxBackdatingTolerance = page.getByRole('combobox', { name: 'Select Backdating Tolerance' });

    // Search and filter
    this.inputSearch = page.getByRole('textbox', { name: 'Search by Company Name or' });
    this.buttonFilter = page.getByText('Filter', { exact: true });
    this.buttonApply = page.getByRole('button', { name: 'Apply' });
    this.buttonReset = page.getByRole('link', { name: 'Reset' });

    // Column settings
    this.buttonColumnsSetting = page.getByText('Columns Setting');
    this.checkboxAddress = page.getByRole('checkbox', { name: 'Address' });
    this.checkboxBalanceDue = page.getByRole('checkbox', { name: 'Balance Due' });
    this.checkboxStatus = page.getByRole('checkbox', { name: 'Status Status' });
    this.buttonOK = page.getByRole('button', { name: 'OK' });

    // Export
    this.linkExportXLS = page.getByRole('link', { name: 'Export as XLS' });
  }

  async navigateToClients(): Promise<void> {
    await this.page.goto('https://newdev.anovamarine.com/revised/admin/users_clients');
  }

  async createClient(companyName: string, phone: string): Promise<void> {
    await this.linkAddNewClient.click();
    await this.checkboxMTCExcess.check();
    await this.checkboxCargoReferral.check();
    await this.inputCompanyName.fill(companyName);
    await this.inputPhone.fill(phone);

    // Select country
    await this.comboboxCountry.click();
    await this.page.getByRole('searchbox', { name: 'Search' }).fill('uni');
    await this.page.getByRole('option', { name: 'United States', exact: true }).click();

    // Fill address
    await this.inputAddressLine1.fill('1 Wall');
    await this.inputCity.fill('NY');

    // Select state
    await this.comboboxState.click();
    await this.page.getByRole('searchbox', { name: 'Search' }).fill('New');
    await this.page.getByRole('option', { name: 'New York' }).click();

    await this.inputPostalCode.fill('10010');

    // Select underwriter
    await this.comboboxUnderwriter.click();
    await this.page.getByRole('option', { name: 'AIG', exact: true }).click();

    // Select backdating tolerance
    await this.comboboxBackdatingTolerance.click();
    await this.page.getByRole('option', { name: '30-day backdating tolerance' }).click();

    await this.buttonSaveClient.click();
    await this.buttonOkay.click();
  }

  async searchClient(companyName: string): Promise<void> {
    await this.inputSearch.fill(companyName);
    await this.page.keyboard.press('Enter');
  }

  async editClient(companyName: string, dba: string, mc: string, dot: string, taxId: string): Promise<void> {
    await this.page.getByText(companyName).click();
    await this.checkboxPaywallActivation.check();
    await this.checkboxReceiveInvoices.check();
    await this.inputDBA.fill(dba);
    await this.inputMC.fill(mc);
    await this.inputDOT.fill(dot);
    await this.inputTaxId.fill(taxId);
    await this.page.getByRole('combobox', { name: 'Active' }).click();
    await this.page.getByRole('option', { name: 'Inactive' }).click();
    await this.buttonSaveClient.click();
    await this.buttonOkay.click();
  }

  async applyFilter(): Promise<void> {
        await this.page.reload();

    await this.buttonFilter.click();

    // Select country
    await this.comboboxCountry.click();
    await this.page.getByRole('searchbox', { name: 'Search' }).fill('unite');
    await this.page.getByRole('option', { name: 'United States', exact: true }).click();

    // Select state
    await this.comboboxState.click();
    await this.page.getByRole('searchbox', { name: 'Search' }).fill('New');
    await this.page.getByRole('option', { name: 'New York' }).click();
    await this.page.getByRole('combobox', { name: 'Active' }).click();
    await this.page.getByRole('option', { name: 'All' }).click();
    await this.buttonApply.click({ timeout: 50000 });
            await this.page.reload();

  }

  async resetFilter(): Promise<void> {
    await this.buttonFilter.click({ timeout: 50000 });
    await this.buttonReset.click();
  }

  //   async configureColumns(): Promise<void> {
  //     await this.buttonColumnsSetting.click();
  //     await this.checkboxAddress.uncheck();
  //     await this.checkboxBalanceDue.uncheck();
  //     await this.checkboxStatus.uncheck();
  //     await this.buttonApply.click();
  //     await this.buttonOK.click();
  //   }

  //   async resetColumns(): Promise<void> {
  //     await this.buttonColumnsSetting.click();
  //     await this.buttonReset.click();
  //     await this.buttonOK.click();
  //   }

  async exportClients(): Promise<void> {
    const downloadPromise = this.page.waitForEvent('download');
    await this.linkExportXLS.click();
    await downloadPromise;
  }
}