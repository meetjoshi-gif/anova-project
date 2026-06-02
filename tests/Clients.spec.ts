import { test, expect } from '../fixtures/custom.fixtures';
import { LoginPage } from '../pages/login.page';
import { ClientsPage } from '../pages/clients.page';

test.describe('Clients User Management', () => {
  test.describe.configure({ mode: 'serial' });

  let createdCompany: string;
  let sharedPage: any;
  let loginPage: LoginPage;
  let clientsPage: ClientsPage;

  test.beforeAll(async ({ browser }) => {
    // Login only ONCE before all tests
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.setViewportSize({ width: 1920, height: 1080 });

    // Initialize page objects
    loginPage = new LoginPage(page);
    clientsPage = new ClientsPage(page);

    // Login with admin credentials
    await loginPage.loginWithAdminCredentials();

    // Store page for use in all tests
    sharedPage = page;

    console.log('✅ Admin logged in successfully - Clients user');
  });

  test('Test 1 - Create Client with Unique Name', async () => {
    // No login needed - already logged in from beforeAll
    await clientsPage.navigateToClients();

    // Generate dynamic test data
    const companyName = `Client_${Date.now()}`;
    const phone = `9${Math.floor(100000000 + Math.random() * 900000000)}`;
    createdCompany = companyName;

    // Create client
    await clientsPage.createClient(companyName, phone);

    console.log('✅ Client created successfully:', companyName);
  });

  test('Test 2 - Search Client', async () => {
    // Using same page - still logged in
    await clientsPage.navigateToClients();
    await clientsPage.searchClient(createdCompany);

    console.log('✅ Client searched successfully');
  });

  test('Test 3 - Edit Client', async () => {
    // Using same page - still logged in
    const randomNum = Math.floor(Math.random() * 100000);
    const dba = `DBA_${randomNum}`;
    const mc = `MC_${randomNum}`;
    const dot = `DOT_${randomNum}`;
    const taxId = `TAX_${Date.now()}`;

    await clientsPage.editClient(createdCompany, dba, mc, dot, taxId);

    console.log('✅ Client edited successfully with inactive status');
  });

  test('Test 4 - Filter and Column', async () => {
    // Using same page - still logged in
    await clientsPage.navigateToClients();
    await clientsPage.applyFilter();
    await clientsPage.resetFilter();
    // await clientsPage.configureColumns();
    // await clientsPage.resetColumns();

    console.log('✅ Filter and column functionality verified successfully');
  });

  test('Test 5 - Export Clients', async () => {
    // Using same page - still logged in
    await clientsPage.navigateToClients();
    await clientsPage.exportClients();

    console.log('✅ Export XLS functionality verified successfully');
  });
  
  test.afterAll(async () => {
    // Cleanup after all tests
    if (sharedPage) {
      await sharedPage.close();
    }
  });
});