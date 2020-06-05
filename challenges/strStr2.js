// Implement strStr().

// Return the index of the first occurrence of needle in haystack,
// or -1 if needle is not part of haystack.

// Example 1:

// Input: haystack = "hello", needle = "ll"
// Output: 2
// Example 2:

// Input: haystack = "aaaaa", needle = "bba"
// Output: -1

// Clarification:

// What should we return when needle is an empty string? This is a
// great question to ask during an interview.

// For the purpose of this problem, we will return 0 when needle is
// an empty string. This is consistent to C's strstr() and Java's indexOf().

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
const strStr = (haystack, needle) => {
  if (!needle) return 0;

  let advanceCounter = 0;

  for (let i = 0; i < haystack.length; i += 1) {
    if (haystack[i] === needle[0] && haystack[i + needle.length - 1] === needle[needle.length - 1]) {
      for (let j = 0; j < needle.length; j += 1) {
        if (haystack[i + j] === needle[j]) advanceCounter += 1;
      }
      if (advanceCounter === needle.length) return i;
      advanceCounter = 0;
    }
  }
  return -1;
};

console.log(strStr('hello', 'll'));
console.log(strStr('aaaaa', 'bba'));
