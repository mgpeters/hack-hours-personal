const lengthOfLongestSubstring = function (s) {
  // error handling
  if (typeof s !== 'string') return 'Please input a String';
  // edge case '' returns 0
  if (s.length === 0) return 0;

  const set = new Set();

  let p1 = 0;
  let p2 = 0;
  let longestCount = 0;

  while (p2 < s.length) {
    if (!set.has(s[p2])) {
      set.add(s[p2]);
      p2 += 1;
      longestCount = Math.max(longestCount, set.size);
    } else {
      set.delete(s[p1]);
      p1 += 1;
    }
  }

  return longestCount;
};

console.log(lengthOfLongestSubstring('abcabcbb')); // 3
console.log(lengthOfLongestSubstring('bbbbb')); // 1
console.log(lengthOfLongestSubstring('pwwkew')); // 3
