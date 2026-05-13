import { test, expect } from '../fixtures/custom.fixtures';
import { Logger } from '../utils/logger';

test('Global Login', async ({ page, loginPage}) => {
  test.setTimeout(120000);
  await page.setViewportSize({ width: 1920, height: 1080 });

  // Login
  await loginPage.navigate();
  await loginPage.login('keri.anderson97+admin@gmail.com', '123456');

  await expect(page).toHaveURL("https://newdev.anovamarine.com/revised/admin/index",{ timeout: 2000 });
  Logger.info('✅ Login successful');

  });