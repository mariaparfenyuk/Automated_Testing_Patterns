class MockDatabase {
  fetchUser(id) {
    return { id, name: 'Mock User' };
  }
}

module.exports = MockDatabase;
