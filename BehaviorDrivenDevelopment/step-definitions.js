const { Given, When, Then } = require('cucumber');
const { expect } = require('chai');

let calculator = {
  result: 0,
  add: function(a, b) {
    this.result = a + b;
  }
};

Given('I have entered {int} into the calculator', function (number) {
  this.calculator = calculator;
  this.calculator.addend1 = number;
});

When('I press add', function () {
  this.calculator.add(this.calculator.addend1, this.calculator.addend2);
});

Then('the result should be {int} on the screen', function (result) {
  expect(this.calculator.result).to.equal(result);
});
