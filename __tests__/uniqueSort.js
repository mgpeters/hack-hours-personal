const { uniqSort } = require('../challenges/uniqueSort');

describe('reverseInteger test', () => {
  it('Should return correct conversion', () => {
    expect(uniqSort([4, 2, 2, 3, 2, 2, 2])).toStrictEqual([2, 3, 4]);
    expect(uniqSort([4, 2, 2, 3, 5, 2, 3])).toStrictEqual([2, 3, 4, 5]);
    expect(uniqSort([1, 2, 3, 4, 4, 4, 5, 6])).toStrictEqual([1, 2, 3, 4, 5, 6]);
  });
});
