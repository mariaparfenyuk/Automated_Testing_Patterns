class TestStrategy {
  execute() {
    throw new Error('This method should be overridden');
  }
}

class GUITestStrategy extends TestStrategy {
  execute() {
    console.log('Running GUI tests...');
  }
}

class APITestStrategy extends TestStrategy {
  execute() {
    console.log('Running API tests...');
  }
}

class UnitTestStrategy extends TestStrategy {
  execute() {
    console.log('Running unit tests...');
  }
}

module.exports = { GUITestStrategy, APITestStrategy, UnitTestStrategy };
