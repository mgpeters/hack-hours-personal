const { maximum69Number } = require('../challenges/maximum69Number');

describe('maximum69Number test', () => {
  it('Should return the maximum number you can get by changing at most one digit (6 becomes 9, and 9 becomes 6)', () => {
    expect(maximum69Number(9669)).toBe(9969);
    expect(maximum69Number(9996)).toBe(9999);
    expect(maximum69Number(9999)).toBe(9999);
  });
});
