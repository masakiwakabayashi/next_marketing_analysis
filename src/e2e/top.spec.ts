import { test, expect } from '@playwright/test';

test('トップページが正しく表示される', async ({ page }) => {
  // トップページにアクセス
  await page.goto('/');

  // タイトルが表示されていること
  await expect(page.getByRole('heading', { name: 'X関連' })).toBeVisible();

  // 各リンクが表示されていること
  await expect(page.getByRole('link', { name: 'Analysis' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Draft' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Draft Detail' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'KPI' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Template' })).toBeVisible();
});
