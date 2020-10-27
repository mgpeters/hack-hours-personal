// Given a string s, find the length of the longest substring without repeating characters.


// Example 1:

// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.
// Example 2:

// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.
// Example 3:

// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
// Example 4:

// Input: s = ""
// Output: 0


// Constraints:

// 0 <= s.length <= 5 * 104
// s consists of English letters, digits, symbols and spaces.

const lengthOfLongestSubstring = function (s) {
  // error handling
  if (typeof s !== 'string') return 'Please input a String';
  // edge case '' returns 0
  if (s.length === 0) return 0;

  const set = new Set();
  let p1 = 0;
  let p2 = 0;
  let longestString = 0;

  while (p2 < s.length) {
    if (!set.has(s[p2])) {
      set.add(s[p2]);
      p2 += 1;
      longestString = Math.max(longestString, set.size);
    } else {
      set.delete(s[p1]);
      p1 += 1;
    }
  }

  return longestString;
};

console.log(lengthOfLongestSubstring('abcabcbb')); // 3
console.log(lengthOfLongestSubstring('bbbbb')); // 1
console.log(lengthOfLongestSubstring('pwwkew')); // 3
console.log(lengthOfLongestSubstring(' ')); // 1
