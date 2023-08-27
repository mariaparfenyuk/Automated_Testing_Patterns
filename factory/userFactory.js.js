class UserFactory {
  createUser(type, name) {
    switch (type) {
      case 'admin':
        return new AdminUser(name);
      case 'regular':
        return new RegularUser(name);
      default:
        return new GuestUser();
    }
  }
}

module.exports = UserFactory;
