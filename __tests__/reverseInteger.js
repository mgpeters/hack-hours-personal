const { reverseInteger } = require('../challenges/reverseInteger');

describe('reverseInteger test', () => {
  it('Should return correct conversion', () => {
    expect(reverseInteger(123)).toBe(321);
    expect(reverseInteger(-123)).toBe(-321);
    // expect(reverseInteger(153423646900).toBe(0));
  });

  it('Should ignore leading zeroes', () => {
    expect(reverseInteger(1230)).toBe(321);
  });
});
