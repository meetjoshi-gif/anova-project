import { Page, Locator } from '@playwright/test';

export class InternalUsersPage {
  readonly page: Page;
  readonly linkInternalUsers: Locator;
  readonly linkAddNewInternalUser: Locator;
  readonly inputName: Locator;
  readonly inputEmail: Locator;
  readonly inputPhone: Locator;
  readonly comboboxRole: Locator;
  readonly comboboxStatus: Locator;
  readonly buttonSave: Locator;
  readonly buttonOkay: Locator;
  readonly searchBox: Locator;
  readonly buttonFilter: Locator;
  readonly buttonApply: Locator;
  readonly buttonReset: Locator;
  readonly linkEdit: Locator;
  readonly buttonExportXLS: Locator;
  readonly actionButtonMenu: Locator;

  constructor(page: Page) {
    this.page = page;
    this.linkInternalUsers = page.getByRole('link', { name: 'Internal Users' });
    this.linkAddNewInternalUser = page.getByRole('link', { name: 'Add New Internal User' });
    this.inputName = page.getByRole('textbox', { name: 'Name', exact: true });
    this.inputEmail = page.getByRole('textbox', { name: 'Email Address' });
    this.inputPhone = page.getByRole('textbox', { name: 'Phone', exact: true });
    this.comboboxRole = page.getByRole('combobox', { name: 'Select Role' });
    this.comboboxStatus = page.getByRole('combobox', { name: 'Select Status' });
    this.buttonSave = page.getByRole('button', { name: 'Save' });
    this.buttonOkay = page.getByRole('button', { name: 'Okay' });
    this.searchBox = page.getByRole('textbox', { name: 'Search by Name, Email, Phone' });
    this.buttonFilter = page.getByText('Filter', { exact: true });
    this.buttonApply = page.getByRole('button', { name: 'Apply' });
    this.buttonReset = page.getByRole('link', { name: 'Reset' });
    this.linkEdit = page.getByRole('link', { name: 'Edit' });
    this.buttonExportXLS = page.getByRole('link', { name: 'Export As XLS' });
    this.actionButtonMenu = page.locator('.btn.btn-sm.btn-icon').first();
  }

  async navigateToInternalUsers(): Promise<void> {
    await this.page.goto('https://newdev.anovamarine.com/revised/admin/internal_users');
  }

  async clickInternalUsersLink(): Promise<void> {
    await this.linkInternalUsers.click();
  }

  async clickAddNewInternalUser(): Promise<void> {
    await this.linkAddNewInternalUser.click();
  }

  async fillUserForm(name: string, email: string, phone: string, role: string, status: string): Promise<void> {
    await this.inputName.fill(name);
    await this.inputEmail.fill(email);
    await this.inputPhone.fill(phone);
    await this.selectRole(role);
    await this.selectStatus(status);
  }

  async selectRole(roleName: string): Promise<void> {
    await this.comboboxRole.click();
    await this.page.getByRole('option', { name: roleName, exact: true }).click();
  }

  async selectStatus(statusName: string): Promise<void> {
    await this.comboboxStatus.click();
    await this.page.getByRole('option', { name: statusName, exact: true }).click();
  }

  async saveUser(): Promise<void> {
    await this.buttonSave.click();
    await this.buttonOkay.click();
  }

  async searchUser(searchValue: string): Promise<void> {
    await this.searchBox.click();
    await this.searchBox.fill(searchValue);
  }

  async applySearch(): Promise<void> {
    await this.page.getByRole('button').filter({ hasText: /^$/ }).click();
  }

  async resetSearch(): Promise<void> {
    await this.page.getByTitle('Reset').click();
  }

  async openEditForm(): Promise<void> {
    await this.actionButtonMenu.click();
    await this.linkEdit.click();
  }

  async updateUserName(newName: string): Promise<void> {
    await this.inputName.fill(newName);
  }

  async updateUserPhone(newPhone: string): Promise<void> {
    await this.inputPhone.fill(newPhone);
  }

  async applyFilter(role: string, organization: string): Promise<void> {
    await this.buttonFilter.click();
    await this.selectRole(role);
    
    const comboboxOrg = this.page.getByRole('combobox', { name: 'All' });
    await comboboxOrg.click();
    await this.page.getByRole('option', { name: organization }).click();
    
    await this.buttonApply.click();
  }

  async resetFilter(): Promise<void> {
    await this.buttonFilter.click();
    await this.buttonReset.click();
  }

  async exportAsXLS(): Promise<void> {
    const downloadPromise = this.page.waitForEvent('download');
    await this.buttonExportXLS.click();
    await downloadPromise;
  }

  async createInternalUser(name: string, email: string, phone: string, role: string, status: string): Promise<void> {
    await this.clickAddNewInternalUser();
    await this.fillUserForm(name, email, phone, role, status);
    await this.saveUser();
    console.log(`✅ Internal user created: ${email}`);
  }

  async editInternalUser(newName: string, newPhone: string): Promise<void> {
    await this.openEditForm();
    await this.updateUserName(newName);
    await this.updateUserPhone(newPhone);
    await this.page.getByRole('combobox', { name: 'Active' }).click();
    await this.page.getByRole('option', { name: 'Inactive' }).click();
    await this.buttonSave.click();
    await this.buttonOkay.click();
    console.log(`✅ Internal user updated: ${newName}`);
  }
}
