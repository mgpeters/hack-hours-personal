const { sumZero } = require('../challenges/sumZero');

const sumArray = (array) => {
  return array.reduce((acc, curr) => acc + curr);
};

describe('sumZero test', () => {
  it('Should return an array of unique elements whos sum totals 0', () => {
    expect(sumArray(sumZero(5))).toStrictEqual(0);
    expect(sumArray(sumZero(3))).toStrictEqual(0);
    expect(sumArray(sumZero(2))).toStrictEqual(0);
    expect(sumArray(sumZero(1))).toStrictEqual(0);
    expect(sumArray(sumZero(9))).toStrictEqual(0);
  });
});
