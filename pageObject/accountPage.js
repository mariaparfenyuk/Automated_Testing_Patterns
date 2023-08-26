class AccountPage {
  get welcomeMessage() { return $('.welcome-message'); }
  get profileLink() { return $('#profile-link'); }
  get logoutButton() { return $('#logout-button'); }

  getWelcomeMessageText() {
    return this.welcomeMessage.getText();
  }

  goToProfile() {
    this.profileLink.click();
  }

  logout() {
    this.logoutButton.click();
  }
}

module.exports = new AccountPage();
