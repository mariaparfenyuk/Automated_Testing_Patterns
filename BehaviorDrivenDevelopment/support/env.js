const { setWorldConstructor } = require('cucumber');

class CustomWorld {
  constructor() {
    this.calculator = null;
  }
}

setWorldConstructor(CustomWorld);
