const { expect } = require('chai');
const UserFactory = require('./userFactory');
const { User, AdminUser, RegularUser, GuestUser } = require('./user');

describe('UserFactory', () => {
  it('should create an AdminUser', () => {
    const factory = new UserFactory();
    const user = factory.createUser('admin', 'AdminUser');

    expect(user).to.be.an.instanceOf(AdminUser);
  });

  it('should create a RegularUser', () => {
    const factory = new UserFactory();
    const user = factory.createUser('regular', 'RegularUser');

    expect(user).to.be.an.instanceOf(RegularUser);
  });

  it('should create a GuestUser', () => {
    const factory = new UserFactory();
    const user = factory.createUser('guest', 'GuestUser');

    expect(user).to.be.an.instanceOf(GuestUser);
  });
});
