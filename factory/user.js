class User {
  constructor(name, role) {
    this.name = name;
    this.role = role;
  }

  getInfo() {
    return `User ${this.name} has role ${this.role}`;
  }
}

class AdminUser extends User {
  constructor(name) {
    super(name, 'Admin');
  }
}

class RegularUser extends User {
  constructor(name) {
    super(name, 'Regular');
  }
}

class GuestUser extends User {
  constructor() {
    super('Guest', 'Guest');
  }
}

module.exports = { User, AdminUser, RegularUser, GuestUser };
