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
  let backCounter = washedStr.length - 1;

  for (let i = 0; i < Math.ceil(washedStr.length / 2); i += 1) {
    if (washedStr[i] !== washedStr[backCounter]) return false;
    backCounter -= 1;
  }

  return true;
};

console.log(isPalindrome('A man, a plan, a canal: Panama'));
console.log(isPalindrome('race a car'));
