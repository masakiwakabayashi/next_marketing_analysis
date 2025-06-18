// playwright.config.ts
import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './src/e2e',
  webServer: {
    command: 'yarn dev',
    port: 3000,
    timeout: 120 * 1000,
    reuseExistingServer: !process.env.CI,
  },
  use: {
    baseURL: 'http://localhost:3000',
    headless: true,
  },
});
