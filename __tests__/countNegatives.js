const countNegatives = require('../challenges/countNegatives');

describe('countNegatives test', () => {
  it('Should return the number of negatives in a sorted matrix', () => {
    expect(countNegatives([[4, 3, 2, -1], [3, 2, 1, -1], [1, 1, -1, -2], [-1, -1, -2, -3]])).toEqual(8);
    expect(countNegatives([[3, 2], [1, 0]])).toEqual(0);
    expect(countNegatives([[1, -1], [-1, -1]])).toEqual(3);
    expect(countNegatives([[-1]])).toEqual(1);
  });
});
