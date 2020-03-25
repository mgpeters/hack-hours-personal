const { removeDuplicates } = require('../challenges/removeDuplicates');

describe('removeDuplicates test', () => {
  it('Should remove duplicated in place, returning new length', () => {
    expect(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4])).toBe(5);
    expect(removeDuplicates([1, 1])).toBe(1);
    expect(removeDuplicates([0, 0, 0, 0, 0])).toBe(1);
  });
});
