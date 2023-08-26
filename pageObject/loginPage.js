class LoginPage {
  get usernameInput() { return $('#username'); }
  get passwordInput() { return $('#password'); }
  get loginButton() { return $('#login-button'); }

  open() {
    browser.url('/login');
  }

  login(username, password) {
    this.usernameInput.setValue(username);
    this.passwordInput.setValue(password);
    this.loginButton.click();
  }
}

module.exports = new LoginPage();
