// Given a string s consists of upper/lower-case alphabets and empty
// space characters ' ', return the length of last word (last word
// means the last appearing word if we loop from left to right) in the string.

// If the last word does not exist, return 0.

// Note: A word is defined as a maximal substring
// consisting of non-space characters only.

// Example:

// Input: "Hello World"
// Output: 5

/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLastWord = (s) => {
  const splitString = s.split(' ');

  for (let i = splitString.length - 1; i >= 0; i -= 1) {
    if (splitString[i].length !== 0) return splitString[i].length;
  }

  return 0;
};

console.log(lengthOfLastWord('Hello World'));
console.log(lengthOfLastWord('a '));
// console.log();
