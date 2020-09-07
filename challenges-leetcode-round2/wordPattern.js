// Given a pattern and a string str, find if str follows the same pattern.

// Here follow means a full match, such that there is a bijection between
// a letter in pattern and a non-empty word in str.

// Example 1:

// Input: pattern = "abba", str = "dog cat cat dog"
// Output: true
// Example 2:

// Input:pattern = "abba", str = "dog cat cat fish"
// Output: false
// Example 3:

// Input: pattern = "aaaa", str = "dog cat cat dog"
// Output: false
// Example 4:

// Input: pattern = "abba", str = "dog dog dog dog"
// Output: false
// Notes:
// You may assume pattern contains only lowercase letters,
// and str contains lowercase letters that may be separated by a single space.

/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */

const wordPattern = function (pattern, str) {
  // Input error checking
  if (typeof pattern !== 'string' || typeof str !== 'string') {
    throw Error('Please submit a string as input');
  }

  // create aux object for str[i][pattern];

  const filterObj = {};

  // split pattern and str into arrays
  const patternSplit = pattern.split('');
  const strSplit = str.split(' ');

  if (patternSplit.length !== strSplit.length) return false;

  // loop over with two pointers, adding to the aux object and checking
  // key val pairs

  for (let i = 0; i < patternSplit.length; i += 1) {
    // check ig aux obj has value, if not... add it
    if (!filterObj[strSplit[i]]) filterObj[strSplit[i]] = patternSplit[i];
    else if (filterObj[strSplit[i]])
  }

  // console.log(strSplit, patternSplit);
  return true;
};

// console.log(wordPattern('abba', 'dog cat cat dog'));
