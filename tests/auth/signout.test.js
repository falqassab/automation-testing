import { test, expect } from '@playwright/test';
import { SignInPage } from '../../pages/SigninPage.js';
import testData from '../../data/test-data.json' assert { type: 'json' };

test('User can log out after login', async ({ page }) => {
  const login = new SignInPage(page);

  // Handle login dialog dynamically
  page.once('dialog', async dialog => {
    await dialog.accept();
  });

  // Go to login and log in
  await login.goto();
  await login.login(testData.user.username, testData.user.password);

  // Ensure logout button appears
  await expect(login.logoutButton).toBeVisible({ timeout: 5000 });

  // Click logout
  await login.logout();

  // Verify user is logged out
  const loginButton = page.locator('#login2'); // Login button visible again
  await expect(loginButton).toBeVisible({ timeout: 5000 });

});
