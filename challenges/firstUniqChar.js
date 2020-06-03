// Given a string, find the first non-repeating character
// in it and return it's index. If it doesn't exist, return -1.

// Examples:

// s = "leetcode"
// return 0.

// s = "loveleetcode",
// return 2.

// Note: You may assume the string contain only
// lowercase English letters.

/**
 * @param {string} s
 * @return {number}
 */
const firstUniqChar = (s) => {
  const auxObj = {};

  for (let i = 0; i < s.length; i += 1) {
    if (!auxObj[s[i]]) auxObj[s[i]] = 1;
    else auxObj[s[i]] += 1;
  }

  for (let i = 0; i < s.length; i += 1) {
    if (auxObj[s[i]] === 1) return i;
  }
  return -1;
};

console.log(firstUniqChar('leetcode'));
console.log(firstUniqChar('loveleetcode'));
console.log(firstUniqChar('ll'));
console.log(firstUniqChar('"aadadaad"'));
