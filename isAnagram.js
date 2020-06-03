// Given two strings s and t , write a function to
// determine if t is an anagram of s.

// Example 1:

// Input: s = "anagram", t = "nagaram"
// Output: true

// Example 2:

// Input: s = "rat", t = "car"
// Output: false

// Note:
// You may assume the string contains only lowercase alphabets.

// Follow up:
// What if the inputs contain unicode characters? How would you
// adapt your solution to such case?

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isAnagram = (s, t) => {
  const auxObj = {};

  for (let i = 0; i < s.length; i += 1) {
    if (!auxObj[s[i]]) auxObj[s[i]] = 1;
    else auxObj[s[i]] += 1;
  }

  for (let i = 0; i < t.length; i += 1) {
    if (auxObj[t[i]]) auxObj[t[i]] -= 1;
    else return false;
  }

  const values = Object.values(auxObj);

  for (let i = 0; i < values.length; i += 1) {
    if (values[i] !== 0) return false;
  }

  return true;
};

// console.log(isAnagram('anagram', 'nagaram'));
console.log(isAnagram('ba', 'ab'));

