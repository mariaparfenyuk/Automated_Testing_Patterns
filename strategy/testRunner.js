const { GUITestStrategy, APITestStrategy, UnitTestStrategy } = require('./testStrategies');

class TestRunner {
  constructor(strategy) {
    this.strategy = strategy;
  }

  setStrategy(strategy) {
    this.strategy = strategy;
  }

  runTests() {
    this.strategy.execute();
  }
}

const testRunner = new TestRunner(new GUITestStrategy());

testRunner.runTests(); // Output: Running GUI tests...

testRunner.setStrategy(new APITestStrategy());
testRunner.runTests(); // Output: Running API tests...

testRunner.setStrategy(new UnitTestStrategy());
testRunner.runTests(); // Output: Running unit tests...
