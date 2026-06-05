# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Leads.spec.ts >> Leads Flow  >> Test 1 - Leads Creation
- Location: tests\Leads.spec.ts:31:9

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.click: Target page, context or browser has been closed
Call log:
  - waiting for getByRole('link', { name: 'Leads' })

```

# Page snapshot

```yaml
- generic [ref=e5]:
  - generic [ref=e6]:
    - link "Logo" [ref=e8] [cursor=pointer]:
      - /url: https://newdev.anovamarine.com/revised/
      - img "Logo" [ref=e9]
    - generic [ref=e11]:
      - heading "Sign in to your Anova Marine account" [level=1] [ref=e13]
      - textbox "Email" [ref=e15]
      - textbox "Password" [ref=e17]
      - link "Forgot Password?" [ref=e19] [cursor=pointer]:
        - /url: https://newdev.anovamarine.com/revised/forgot-password
      - button "Log In" [ref=e21] [cursor=pointer]
      - generic [ref=e23] [cursor=pointer]:
        - img "United States" [ref=e24]
        - text: English 
  - paragraph [ref=e26]: © 2026 Anova Marine | All rights reserved.
```

# Test source

```ts
  1   | import { test, expect, Browser, BrowserContext, Page } from '@playwright/test';
  2   | 
  3   | let context: BrowserContext;
  4   | let page: Page;
  5   | let companyName: string;
  6   | let phoneNumber: string;
  7   | 
  8   | 
  9   | test.describe.serial('Leads Flow ', () => {
  10  | 
  11  |     // Before All
  12  |     test.beforeAll(async ({ browser }) => {
  13  | 
  14  |         context = await browser.newContext();
  15  |         page = await context.newPage();
  16  | 
  17  |         await page.goto('https://newdev.anovamarine.com/revised/login/index');
  18  | 
  19  |         await page.getByRole('textbox', { name: 'Email' }).fill('keri.anderson97+admin@gmail.com');
  20  | 
  21  |         await page.getByRole('textbox', { name: 'Password' }).fill('123456');
  22  | 
  23  |         await page.getByRole('button', { name: 'Log In' }).click();
  24  | 
  25  |         await page.waitForTimeout(5000);
  26  | 
  27  |         console.log('Login Successful For Leads Flow');
  28  |     });
  29  | 
  30  | 
  31  |     test('Test 1 - Leads Creation', async () => {
  32  | 
  33  |         await page.goto('https://newdev.anovamarine.com/revised/admin/users_leads');
  34  |         await page.reload();
> 35  |         await page.getByRole('link', { name: 'Leads' }).click();
      |                                                         ^ Error: locator.click: Target page, context or browser has been closed
  36  |         await page.getByRole('link', { name: 'Add New Lead' }).click();
  37  | 
  38  |         const options = ['Anova', 'Logistiq'];
  39  | 
  40  |         // Pick random value
  41  |         const randomOption = options[Math.floor(Math.random() * options.length)];
  42  |         await page.getByRole('combobox', { name: 'Select Site' }).click();
  43  |         await page.getByRole('option', { name: randomOption }).click();
  44  |         console.log(`Selected option: ${randomOption}`);
  45  | 
  46  |         companyName = `Lead_${Date.now()}`;
  47  | 
  48  |         phoneNumber = `9${Math.floor(100000000 + Math.random() * 900000000)}`;
  49  | 
  50  |         await page.getByRole('textbox', { name: 'Company Name' }).fill(companyName);
  51  | 
  52  |         await page.getByRole('textbox', { name: 'Phone' }).fill(phoneNumber);
  53  | 
  54  |         await page.getByRole('combobox', { name: 'Select Country' }).click();
  55  |         await page.getByRole('searchbox', { name: 'Search' }).fill('Unite');
  56  |         await page.getByRole('option', { name: 'United States', exact: true }).click();
  57  |         await page.getByRole('textbox', { name: 'Address Line 1' }).fill('11 Wall Street');
  58  |         await page.getByRole('textbox', { name: 'City' }).fill('NY');
  59  |         await page.getByRole('combobox', { name: 'Select state' }).click();
  60  |         await page.getByRole('searchbox', { name: 'Search' }).fill('New', { timeout: 5000 });
  61  |         await page.getByRole('option', { name: 'New York' }).click();
  62  |         await page.getByRole('textbox', { name: 'Postal Code' }).fill('90001');
  63  |         await page.getByRole('textbox', { name: 'Note' }).click();
  64  |         await page.getByRole('textbox', { name: 'Note' }).fill('TESTING THE NOTE FOR LEADS');
  65  |         await page.getByRole('button', { name: 'Save Lead' }).click();
  66  |         await page.getByRole('button', { name: 'Okay' }).click();
  67  |     });
  68  | 
  69  |     test('Test 2 - Search Lead', async () => {
  70  |         await page.getByRole('textbox', { name: 'Search by Lead Name or Email' }).click();
  71  |         await page.getByRole('textbox', { name: 'Search by Lead Name or Email' }).fill(companyName);
  72  |         await page.getByRole('button').filter({ hasText: /^$/ }).click();
  73  |     })
  74  | 
  75  |     test('Test 3 - Edit Lead', async () => {
  76  |         await page.getByRole('link', { name: companyName }).click();
  77  |         await page.getByRole('combobox', { name: 'Active' }).click();
  78  |         await page.getByRole('option', { name: 'Inactive' }).click();
  79  |         await page.getByRole('button', { name: 'Save Lead' }).click();
  80  |         await page.getByRole('button', { name: 'Okay' }).click();
  81  | 
  82  |     })
  83  | 
  84  |     test('Test 4 - Filter and Column Settings', async () => {
  85  |         await page.reload();
  86  |         await page.getByText('Filter', { exact: true }).click();
  87  |         await page.getByRole('combobox', { name: 'Select Country' }).click();
  88  |         await page.getByRole('searchbox', { name: 'Search' }).fill('Unite');
  89  |         await page.getByRole('option', { name: 'United States', exact: true }).click();
  90  |         await page.getByRole('combobox', { name: 'Active' }).click();
  91  |         await page.getByRole('option', { name: 'All' }).click();
  92  |         await page.getByRole('button', { name: 'Apply' }).click();
  93  |         await page.reload();
  94  |         await page.getByText('Filter', { exact: true }).click();
  95  |         await page.getByRole('link', { name: 'Reset' }).click();
  96  |         await page.reload();
  97  | 
  98  |         await page.getByText('Columns Setting').click();
  99  |         await page.getByRole('checkbox', { name: 'Email' }).uncheck();
  100 |         await page.getByRole('checkbox', { name: 'Phone' }).uncheck();
  101 |         await page.getByRole('checkbox', { name: 'Address' }).uncheck();
  102 |         await page.getByRole('button', { name: 'Apply' }).click();
  103 |         await page.getByRole('button', { name: 'OK' }).click();
  104 |         await page.reload();
  105 | 
  106 |         await page.getByText('Columns Setting').click();
  107 |         await page.getByRole('button', { name: 'Reset' }).click();
  108 |         await page.getByRole('button', { name: 'OK' }).click();
  109 | 
  110 |     })
  111 | 
  112 |     test('Test 5 - Export Lead', async () => {
  113 |         const downloadPromise = page.waitForEvent('download');
  114 |         await page.getByRole('link', { name: 'Export as XLS' }).click();
  115 |         const download = await downloadPromise;
  116 |     })
  117 | 
  118 |     test.afterAll(async () => {
  119 |         await context.close();
  120 |         console.log('Browser Closed Successfully for Leads Flow');
  121 |     })
  122 | 
  123 | });
```