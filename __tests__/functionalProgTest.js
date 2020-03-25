const { minMaxArray, mixedPotions, addOne, subtractOne } = require('../challenges/functionalProgTest');

describe('minMaxArray', () => {
  it('should return an array with the lowest and highest number', () => {
    expect(minMaxArray([-1, 45, 100, 56, 7])).toStrictEqual([-1, 100]);
    expect(minMaxArray([1000, 5000, 200, 1])).toStrictEqual([1, 5000]);
  });
});

describe('mixedPotions', () => {
  it('should add one to any number proceeding A', () => {
    expect(mixedPotions('452A697B12')).toBe('45369612');
    expect(mixedPotions('567B125A')).toBe('566126');
    expect(mixedPotions('2A4587B745')).toBe('34586745');
  });

  it('should subtract one to any number proceeding B', () => {
    expect(mixedPotions('452A697B12')).toBe('45369612');
    expect(mixedPotions('567B125A')).toBe('566126');
    expect(mixedPotions('2A4587B745')).toBe('34586745');
  });

  it('should return a string', () => {
    expect(typeof mixedPotions('452A697B12')).toBe('string');
  });
});

describe('addOne', () => {
  it('should return one plus the inputted number', () => {
    expect(addOne(100)).toBe(101);
    expect(addOne(1)).toBe(2);
    expect(addOne(699)).toBe(700);
  });
});

describe('subtractOne', () => {
  it('should return one minus the inputted number', () => {
    expect(subtractOne(99)).toBe(98);
    expect(subtractOne(1000)).toBe(999);
    expect(subtractOne(785)).toBe(784);
  });
});
