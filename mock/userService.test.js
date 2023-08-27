const UserService = require('./userService');
const MockDatabase = require('./database');

describe('UserService', () => {
  it('should return a user using a MockDatabase', () => {
    const mockDatabase = new MockDatabase();
    const userService = new UserService(mockDatabase);

    const user = userService.getUser(1);

    expect(user).toEqual({ id: 1, name: 'Mock User' });
  });
});
