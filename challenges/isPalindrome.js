// Given a string, determine if it is a palindrome, considering
// only alphanumeric characters and ignoring cases.

// Note: For the purpose of this problem, we define empty string
// as valid palindrome.

// Example 1:

// Input: "A man, a plan, a canal: Panama"
// Output: true
// Example 2:

// Input: "race a car"
// Output: false

/**
 * @param {string} s
 * @return {boolean}
 */
const isPalindrome = function (s) {
  if (!s) return true;

  const washedStr = s.replace(/[^a-z0-9+]+/gi, '').toLowerCase();

  let buildStr = '';

  for (let i = washedStr.length - 1; i >= 0; i -= 1) {
    buildStr += washedStr[i];
  }

  return washedStr === buildStr;
};

console.log(isPalindrome('A man, a plan, a canal: Panama'));
console.log(isPalindrome('race a car'));
