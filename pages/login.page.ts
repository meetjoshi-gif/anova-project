import { Page, Locator } from '@playwright/test';
import testData from '../data/test-data.json';

export class LoginPage {
    readonly page: Page;
    readonly emailInput: Locator;
    readonly passwordInput: Locator;
    readonly loginButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.emailInput = page.getByRole('textbox', { name: 'Email' });
        this.passwordInput = page.getByRole('textbox', { name: 'Password' });
        this.loginButton = page.getByRole('button', { name: 'Log In' });
    }

    async navigate() {
        await this.page.goto('https://newdev.anovamarine.com/revised/login/index');
    }

    async login(email: string, password: string) {
        await this.emailInput.fill(email);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }

    async loginWithAdminCredentials() {
        const adminUser = testData.adminUser;
        await this.navigate();
        await this.login(adminUser.email, adminUser.password);
        await this.page.waitForURL('**/revised/admin/**', { timeout: 60000 });
    }
}