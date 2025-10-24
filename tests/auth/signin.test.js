import { test, expect } from '@playwright/test';
import { SignInPage } from '../../pages/SigninPage.js';
import testData from '../../data/test-data.json' assert { type: 'json' };

test('User can log in and log out', async ({ page }) => {
  const login = new SignInPage(page);


  await login.goto();
  await login.login(testData.user.username, testData.user.password);

    // Assert welcome is visible and contains username
    expect(await login.isWelcomeVisible()).toBe(true);
    const welcomeText = await login.getWelcomeText();
    expect(welcomeText).toContain(`Welcome ${testData.user.username}`);

  // Wait for logout button to appear and click
  await login.logout();
});
