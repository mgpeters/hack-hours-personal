// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

// Example 1:

// Input: ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.
// Note:

// All given inputs are in lowercase letters a-z.

/**
 * @param {string[]} strs
 * @return {string}
 */

const longestCommonPrefix = (strs) => {
  if (!Array.isArray(strs)) {
    throw new Error('Please input an Array of Strings');
  }
  const rightPointer = 1;
  const buildStr = '';
  for (let outer = 0; outer < strs.length; outer += 1) {
    for (let inner = 0; inner < strs[outer].length; inner += 1) {

    }
  }
  return buildStr;
};

// console.log(longestCommonPrefix('flower')); // Error
console.log(longestCommonPrefix(['flower', 'flow', 'flight'])); // 'fl'
console.log(longestCommonPrefix(['dog', 'racecar', 'car'])); // '' || none

module.exports = { longestCommonPrefix };
