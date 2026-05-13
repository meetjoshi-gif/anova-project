import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://newdev.anovamarine.com/revised/login/index');
  await page.getByRole('textbox', { name: 'Email' }).fill('keri.anderson97+admin@gmail.com');
  await page.getByRole('textbox', { name: 'Password' }).fill('123456');
  await page.getByRole('button', { name: 'Log In' }).click();
});