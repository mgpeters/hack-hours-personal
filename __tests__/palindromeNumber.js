const { palindromeNumber } = require('../challenges/palindromeNumber');

describe('palindromeNumber test', () => {
  it('Should return boolean if is Palendrome', () => {
    expect(palindromeNumber(121)).toBe(true);
    expect(palindromeNumber(-121)).toBe(false);
    expect(palindromeNumber(10)).toBe(false);
  });
});
