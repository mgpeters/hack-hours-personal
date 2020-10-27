// Given a string s, return the longest palindromic substring in s.

// Example 1:

// Input: s = "babad"
// Output: "bab"
// Note: "aba" is also a valid answer.
// Example 2:

// Input: s = "cbbd"
// Output: "bb"
// Example 3:

// Input: s = "a"
// Output: "a"
// Example 4:

// Input: s = "ac"
// Output: "a"

// Constraints:

// 1 <= s.length <= 1000
// s consist of only digits and English letters (lower-case and/or upper-case),

/**
 * @param {string} s
 * @return {string}
 */

const longestPalindrome = (s) => {
  // input checking
  // if (typeof s !== 'string') throw Error('Please input typeof: string');
  // // normalize string
  // const str = s.toLowerCase();
  // // pointers
  // let p1 = 0;
  // let p2 = 0;

  // let longest = 0;

  // while (p1 < p2) {

  // }

  // return longest pal string

  // if (s === null || s.length < 1) return '';

  // let start = 0;
  // let end = 0;

  // const expandAroundCenter = (str, left, right) => {
  //   let l = left;
  //   let r = right;

  //   while (l >= 0 && r < str.length && str[l] === str[r]) {
  //     l -= 1;
  //     r += 1;
  //   }

  //   return r - l - 1;
  // };

  // for (let i = 0; i < s.length; i += 1) {
  //   const len1 = expandAroundCenter(s, i, i);
  //   const len2 = expandAroundCenter(s, i, i + 1);
  //   const len = Math.max(len1, len2);

  //   if (len > end - start) {
  //     start = i - (len - 1) / 2;
  //     end = i + len / 2;
  //   }
  // }

  // return s.slice(start, end + 1);

  let maxStr = '';

  for (let i = 0; i < s.length; i += 1) {
    for (let j = 0; j < 2; j += 1) {
      let left = i;
      let right = i + j;

      while (s[left] && s[left] === s[right]) {
        left -= 1;
        right += 1;
      }

      if ((right - left - 1) > maxStr.length) {
        maxStr = s.substring(left + 1, right);
      }
    }
  }

  return maxStr;
};

console.log(longestPalindrome('babad')); // "bab"
console.log(longestPalindrome('cbbd')); //  "bb"
console.log(longestPalindrome('a')); // "a"
console.log(longestPalindrome('ac')); // "a"
