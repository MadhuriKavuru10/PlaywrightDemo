
import { defineConfig } from '@playwright/test';

export default defineConfig({
  reporter: [['@shelex/playwright-allure', { outputFolder: 'allure-results' }]],
  use: {
    headless: false,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },
});
