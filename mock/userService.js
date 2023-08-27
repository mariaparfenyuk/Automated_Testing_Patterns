class UserService {
  constructor(database) {
    this.database = database;
  }

  getUser(id) {
    return this.database.fetchUser(id);
  }
}

module.exports = UserService;
