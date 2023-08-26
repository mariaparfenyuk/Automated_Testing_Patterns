import { checkUserAge } from './helper';
const { expect } = require('chai');

describe('User Age Check', () => {
  testCases.forEach((testCase) => {
    it(`should return ${testCase.expected} for age ${testCase.age}`, () => {
      const result = checkUserAge(testCase.age);
      expect(result).to.equal(testCase.expected);
    });
  });
});
