import { test, expect } from '@playwright/test';
import { SignInPage } from '../../pages/SigninPage.js';
import testData from '../../data/test-data.json' assert { type: 'json' };

test.describe('Login functionality', ()=> {

  test('TC-LI-001 User can sign in successfully', async ({ page },testInfo) => {
    testInfo.video = `videos/${testInfo.title.replace(/\s+/g, '_')}.webm`;

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

test('TC-LI-002 User cannot sign in with incorrect password', async ({ page }) => {
  const login = new SignInPage(page);

  // Set up dialog listener before login
  page.once('dialog', async dialog => {
    expect(dialog.message()).toContain("Wrong password");
    await dialog.accept();
  });

  await login.goto();
  await login.login(testData.user.username, "wrongpassword", { expectWelcome: false });
});

test('TC-LI-003 User cannot log in with unregistered username', async ({ page }, testInfo) => {
      testInfo.video = `videos/${testInfo.title.replace(/\s+/g, '_')}.webm`;

  const login = new SignInPage(page);

  page.once('dialog', async dialog => {
    expect(dialog.message()).toContain('User does not exist');
    await dialog.accept();
  });

  await login.goto();
  await login.login('nonexistent_user', 'anyPassword',{ expectWelcome: false });
});

test('TC-LI-004 User cannot log in with empty username and password', async ({ page }) => {
  const login = new SignInPage(page);
  await login.goto();

  // Handle the dialog with expected message
  page.once('dialog', async dialog => {
    expect(dialog.message()).toContain('Please fill out Username and Password.');
    await dialog.accept();
  });

  // Attempt login with both fields empty
  await login.login("", "", { expectWelcome: false });
});

test('TC-LI-005 User cannot log in with empty username', async ({ page }) => {
  const login = new SignInPage(page);
  await login.goto();

  page.once('dialog', async dialog => {
    expect(dialog.message()).toContain('Please fill out Username and Password.');
    await dialog.accept();
  });
  
  await login.login("", testData.user.password, { expectWelcome: false });
});

test('TC-LI-006 User cannot log in with empty password', async ({ page }) => {
  const login = new SignInPage(page);
  await login.goto();

  page.once('dialog', async dialog => {
    expect(dialog.message()).toContain('Please fill out Username and Password.');
    await dialog.accept();
  });
  
  await login.login(testData.user.username, "", { expectWelcome: false });
});


});
