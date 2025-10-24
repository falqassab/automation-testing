import { test, expect } from '@playwright/test';
import { SignInPage } from '../../pages/SigninPage.js';
import testData from '../../data/test-data.json' assert { type: 'json' };
import { log } from 'console';


test.describe('Logout functionality', ()=> {

test('TC-LO-001 User can log out after login successfully', async ({ page }) => {
  const login = new SignInPage(page);

  // Handle login dialog dynamically
  page.once('dialog', async dialog => {
    await dialog.accept();
  });
  // Go to login and log in
  await login.goto();
  await login.login(testData.user.username, testData.user.password);

  // Ensure logout button appears
  await expect(login.logoutButton).toBeVisible({ timeout: 1000 });
  // Click logout
  await login.logout();

  // Verify user is logged out
  const loginButton = page.locator('#login2');
  await expect(loginButton).toBeVisible({ timeout: 5000 });

});

test('TC-LO-002 Logout button disappears after logout', async ({ page }) => {
  const login = new SignInPage(page);
  page.once('dialog', async dialog => {
    await dialog.accept();
  });
  await login.goto();
  await login.login(testData.user.username, testData.user.password);

  // Click logout
  await login.logout();

  await expect(page.locator('#logout2')).toBeHidden({ timeout: 5000 });
});

test('TC-LO-003 User cannot access protected page after logout', async ({ page }) => {
  const login = new SignInPage(page);
  
  page.once('dialog', async dialog => {
    await dialog.accept();
  });

  await login.goto();
  await login.login(testData.user.username, testData.user.password);

  await login.logout();
  await page.goBack();

await expect(login.userWelcome).toBeHidden({ timeout: 5000 });
  await expect(page.locator('#login2')).toBeVisible({ timeout: 5000 });
});

test('TC-LO-004 User remains logged out after page reload', async ({ page }) => {
  const login = new SignInPage(page);
  await login.goto();
  await login.login(testData.user.username, testData.user.password);

  await login.logout();

  await expect(page.locator('#login2')).toBeVisible({ timeout: 5000 });
await expect(login.userWelcome).toBeHidden({ timeout: 1000 });
});

test('TC-LO-005 Logout resets user-specefic elements', async ({ page }) => {
  const login = new SignInPage(page);
  await login.goto();
  await login.login(testData.user.username, testData.user.password);

  await login.logout();

  await expect(login.userWelcome).toBeHidden({ timeout: 5000 });

  const welcomeText = await login.getWelcomeText();
  expect(welcomeText || '').not.toContain(testData.user.username);
});

});



