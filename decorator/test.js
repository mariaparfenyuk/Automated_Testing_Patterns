const { TestAction, LogDecorator } = require('./testFunctionality');

const baseTest = new TestAction();
console.log(baseTest.perform()); // Output: Performed test action

const testWithLog = new LogDecorator(baseTest);
console.log(testWithLog.perform()); // Output: Performed test action, Logged: Performed test action
