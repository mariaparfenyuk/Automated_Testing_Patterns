const LoginPage = require('./loginPage');
const AccountPage = require('./accountPage');

describe('Login and Account Management', () => {
  it('should login and navigate to account page', () => {
    LoginPage.open();
    LoginPage.login('username', 'password');

    const welcomeMessage = AccountPage.getWelcomeMessageText();
    expect(welcomeMessage).toContain('Welcome');

    AccountPage.goToProfile();
    // additional validations and actions on the account page
  });

  it('should logout successfully', () => {
    AccountPage.logout();
    // additional validations after logout
  });
});
