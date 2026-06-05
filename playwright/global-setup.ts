import fs from 'fs';
import path from 'path';
import { chromium } from '@playwright/test';
import { LoginPage } from '../pages/login.page';
import testData from '../data/test-data.json';

export default async function globalSetup() {
  const storageDir = path.join(process.cwd(), 'playwright', '.auth');
  const storageFile = path.join(storageDir, 'user.json');

  if (fs.existsSync(storageFile)) {
    console.log('Playwright storageState already exists at', storageFile);
    return;
  }

  await fs.promises.mkdir(storageDir, { recursive: true });

  const browser = await chromium.launch({ headless: process.env.CI ? true : false });
  const context = await browser.newContext();
  const page = await context.newPage();

  const loginPage = new LoginPage(page);
  await loginPage.navigate();

  const username = process.env.PLAYWRIGHT_AUTH_USERNAME || testData.adminUser?.email;
  const password = process.env.PLAYWRIGHT_AUTH_PASSWORD || testData.adminUser?.password;

  if (!username || !password) {
    console.log('No credentials found. Set PLAYWRIGHT_AUTH_USERNAME and PLAYWRIGHT_AUTH_PASSWORD or add adminUser to data/test-data.json');
    await browser.close();
    return;
  }

  try {
    await loginPage.login(username, password);
    try {
      await page.waitForURL('**/revised/admin/**', { timeout: 60000 });
    } catch (e) {
      // ignore timeout waiting for admin URL
    }

    if (!fs.existsSync(storageFile)) {
      await context.storageState({ path: storageFile });
    }

    console.log('Wrote storageState to', storageFile);
  } catch (err) {
    console.error('Global setup login failed:', err);
  } finally {
    await browser.close();
  }
}
