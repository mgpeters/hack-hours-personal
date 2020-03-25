const { strStr } = require('../challenges/strStr');

describe('strStr test', () => {
  it('Should return the index of the needle within haystack', () => {
    expect(strStr('hello', 'll')).toBe(2);
    expect(strStr('mufasa', 'fas')).toBe(2);
    expect(strStr('aaaaa', 'll')).toBe(-1);
    expect(strStr('empty', '')).toBe(0);
  });
});
