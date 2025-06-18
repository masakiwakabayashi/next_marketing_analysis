import { test, expect } from '@playwright/test';

test('トップページにアクセスできる', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle(/Next\.js/);
});
