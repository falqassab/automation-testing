import { test } from '@playwright/test';
import { SignupPage } from '../../pages/SignupPage.js';
import testData from '../../data/test-data.json' assert { type: 'json' };

test('User can sign up successfully', async ({ page }) => {
  const signup = new SignupPage(page);
  const username = `${testData.user.username}${Date.now()}`;
  const password = testData.user.password;

  await signup.goto();
  await signup.signUp(username, password);

  page.once('dialog', async dialog => {
        expect(dialog.message()).toContain('Sign up successful');
        await dialog.accept();
  });
});
