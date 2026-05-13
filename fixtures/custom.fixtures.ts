import { test as baseTest } from '@playwright/test';
import { LoginPage } from '../pages/login.page';
import { InternalUsersPage } from '../pages/internal-users.page';

type MyFixtures = {
  loginPage: LoginPage;
  internalUsersPage: InternalUsersPage;
};

export const test = baseTest.extend<MyFixtures>({
 
  loginPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await use(loginPage);
  },

  internalUsersPage: async ({ page }, use) => {
    const internalUsersPage = new InternalUsersPage(page);
    await use(internalUsersPage);
  },


});

export { expect } from '@playwright/test';