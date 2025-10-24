import { test } from '@playwright/test';
import { SignupPage } from '../../pages/SignupPage.js';
import testData from '../../data/test-data.json' assert { type: 'json' };

test.describe('Sign Up functionality', ()=> {

  test('TC-SU-001 User can sign up successfully', async ({ page }) => {
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

  test('TC-SU-002 User cannot sign up with existing username', async ({ page }) => {
    const signup = new SignupPage(page);

    await signup.goto();
    await signup.signUp(testData.user.username, testData.user.password);

    page.once('dialog', async dialog => {
      expect(dialog.message()).toContain('This user already exists.');
      await dialog.accept();
    });

  });

  test('TC-SU-003 User cannot sign up with empty username', async ({ page }) => {
    const signup = new SignupPage(page);

    await signup.goto();
    await signup.signUp("", testData.user.password);

    page.once('dialog', async dialog => {
      expect(dialog.message()).toContain('Please fill out Username and Password.');
      await dialog.accept();
    });
  
  });

  test('TC-SU-004 User cannot sign up with empty password', async ({ page }) => {
    const signup = new SignupPage(page);

    await signup.goto();
    await signup.signUp(testData.user.username, "");

    page.once('dialog', async dialog => {
      expect(dialog.message()).toContain('Please fill out Username and Password.');
      await dialog.accept();
    });
    
  });

});
