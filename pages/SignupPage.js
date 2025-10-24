export class SignupPage {
  constructor(page) {
    this.page = page;
    this.usernameInput = this.page.locator('#sign-username');
    this.passwordInput = this.page.locator('#sign-password');
    this.signupButton = this.page.locator('button[onclick="register()"]');
  }

  async goto() {
    await this.page.goto('https://www.demoblaze.com/');
    await this.page.click('#signin2'); // open signup modal
  }

  async signUp(username, password) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.signupButton.click();

    // Handle alert for success
    this.page.on('dialog', dialog => dialog.accept());
  }
}
