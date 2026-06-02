import { test, expect } from '../fixtures/custom.fixtures';
import { LoginPage } from '../pages/login.page';
import { InternalUsersPage } from '../pages/internal-users.page';

test.describe('Internal User Management', () => {
  test.describe.configure({ mode: 'serial' });

  let createdEmail: string;
  let sharedPage: any;
  let loginPage: LoginPage;
  let internalUsersPage: InternalUsersPage;

  test.beforeAll(async ({ browser }) => {
    // Login only ONCE before all tests
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.setViewportSize({ width: 1920, height: 1080 });

    // Initialize page objects
    loginPage = new LoginPage(page);
    internalUsersPage = new InternalUsersPage(page);

    // Login with admin credentials
    await loginPage.loginWithAdminCredentials();

    // Store page for use in all tests
    sharedPage = page;

    console.log('✅ Admin logged in successfully - Internal user');
  });


  test('Test 1 - Create Internal Users', async () => {
    // No login needed - already logged in from beforeAll
    await internalUsersPage.navigateToInternalUsers();
    await internalUsersPage.clickInternalUsersLink();

    // Generate dynamic test data
    const name = `Test_${Date.now()}`;
    const email = `test${Date.now()}@yopmail.com`;
    const phone = `9${Math.floor(100000000 + Math.random() * 900000000)}`;
    createdEmail = email;

    // Create internal user
    await internalUsersPage.createInternalUser(name, email, phone, 'Admin', 'Active');

    console.log('✅ Internal user created successfully');
  });

  test('Test 2 - Search Internal Users', async () => {
    // Using same page - still logged in
    await internalUsersPage.navigateToInternalUsers();
    await internalUsersPage.searchUser(createdEmail);
    await internalUsersPage.applySearch();
    await internalUsersPage.resetSearch();

    console.log('✅ Search and reset functionality verified successfully');
  });

  test('Test 3 - Edit Internal Users', async () => {
    // Using same page - still logged in
    const updatedName = `Test_${Date.now()}`;
    const updatedPhone = `9${Math.floor(100000000 + Math.random() * 900000000)}`;

    await internalUsersPage.editInternalUser(updatedName, updatedPhone);
    // Status changed from Active to Inactive in the editInternalUser method
    console.log('✅ Internal user edited successfully with status change to Inactive');
  });

  test('Test 4 - Filter Internal Users', async () => {
    // Using same page - still logged in
    await internalUsersPage.navigateToInternalUsers();
    await internalUsersPage.applyFilter('Admin', 'Anova');
    await internalUsersPage.resetFilter();

    console.log('✅ Filter and reset functionality verified successfully');
  });

  test('Test 5 - Export Internal Users as XLS', async () => {
    // Using same page - still logged in
    await internalUsersPage.navigateToInternalUsers();
    await internalUsersPage.exportAsXLS();

    console.log('✅ Export XLS functionality verified successfully');
  });
  
  test.afterAll(async () => {
    // Cleanup after all tests
    if (sharedPage) {
      await sharedPage.close();
    }
  });
});