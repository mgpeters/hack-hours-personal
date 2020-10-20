// Given an array of strings strs, group the anagrams together.
// You can return the answer in any order.

// An Anagram is a word or phrase formed by rearranging the
// letters of a different word or phrase, typically using all
// the original letters exactly once.

// Example 1:

// Input: strs = ["eat","tea","tan","ate","nat","bat"]
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
// Example 2:

// Input: strs = [""]
// Output: [[""]]
// Example 3:

// Input: strs = ["a"]
// Output: [["a"]]

// Constraints:

// 1 <= strs.length <= 104
// 0 <= strs[i].length <= 100
// strs[i] consists of lower-case English letters.

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
const groupAnagrams = (strs) => {
  // input checking
  if (!Array.isArray(strs)) throw Error('Please input typeof: Array');

  // edge cases
  if (strs.length === 0) return [[]];
  if (strs.length === 1) return [[strs[0]]];

  const buildObj = {};

  // loop through and sort each index of strings
  for (let i = 0; i < strs.length; i += 1) {
    let key = [...strs[i]].sort().join('');

    if (!buildObj[key]) {
      buildObj[key] = [strs[i]];
    } else {
      buildObj[key].push(strs[i]);
    }
  }

  return Object.values(buildObj);
};

console.log(groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat'])); // [["bat"],["nat","tan"],["ate","eat","tea"]]
console.log(groupAnagrams([''])); // [[""]]
console.log(groupAnagrams(['a'])); // [["a"]]
console.log(groupAnagrams([])); // [[]]
