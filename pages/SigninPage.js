export class SignInPage {
    constructor(page) {
        this.page = page;
        this.usernameInput = this.page.locator('#loginusername');
        this.passwordInput = this.page.locator('#loginpassword');
        this.loginButton = this.page.locator('button[onclick="logIn()"]');
        this.logoutButton = this.page.locator('#logout2');
        this.userWelcome = this.page.locator('#nameofuser'); 
    }

    async goto() {
        await this.page.goto('https://www.demoblaze.com/');
        await this.page.click('#login2');
    }

    async login(username, password) {
        
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginButton.click();

        // Wait for welcome message to appear
        await this.userWelcome.waitFor({ state: 'visible', timeout: 10000 });
   
  }

      async isWelcomeVisible() {
        return await this.userWelcome.isVisible();
    }

    async getWelcomeText() {
        return await this.userWelcome.textContent();
    }

    async logout() {
        await this.logoutButton.click();
    }


}