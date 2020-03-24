const { longestCommonPrefix } = require('../challenges/longestCommonPrefix');

describe('longestCommonPrefix test', () => {
  it('Should return a string of the longest common prefix', () => {
    expect(longestCommonPrefix(['flower', 'flow', 'flight'])).toBe('fl');
    expect(longestCommonPrefix(['dog', 'racecar', 'car'])).toBe('');
  });
});
