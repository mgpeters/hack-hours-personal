// Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000
// For example, 2 is written as II in Roman numeral, just two one's added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

// Roman numerals are usually written largest to smallest from left to right.
// However, the numeral for four is not IIII. Instead, the number four is
// written as IV. Because the one is before the five we subtract it making four.
// The same principle applies to the number nine, which is written as IX. There
// are six instances where subtraction is used:

// I can be placed before V (5) and X (10) to make 4 and 9.
// X can be placed before L (50) and C (100) to make 40 and 90.
// C can be placed before D (500) and M (1000) to make 400 and 900.
// Given a roman numeral, convert it to an integer.

// Example 1:

// Input: s = "III"
// Output: 3
// Example 2:

// Input: s = "IV"
// Output: 4
// Example 3:

// Input: s = "IX"
// Output: 9
// Example 4:

// Input: s = "LVIII"
// Output: 58
// Explanation: L = 50, V= 5, III = 3.
// Example 5:

// Input: s = "MCMXCIV"
// Output: 1994
// Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.

// Constraints:

// 1 <= s.length <= 15
// s contains only the characters ('I', 'V', 'X', 'L', 'C', 'D', 'M').
// It is guaranteed that s is a valid roman numeral in the range [1, 3999].


/**
 * @param {string} s
 * @return {number}
 */
const romanToInt = function (str) {
  // input type checking
  if (typeof str !== 'string') throw Error('Input was not typeof: "string"');

  // var for returned number
  let returnedNum = 0;

  for (let i = 0; i < str.length; i += 1) {
    if (str[i] === 'I' && str[i + 1] === 'V') {
      returnedNum += 4;
      i += 1;
    } else if (str[i] === 'I' && str[i + 1] === 'X') {
      returnedNum += 9;
      i += 1;
    } else if (str[i] === 'X' && str[i + 1] === 'L') {
      returnedNum += 40;
      i += 1;
    } else if (str[i] === 'X' && str[i + 1] === 'C') {
      returnedNum += 90;
      i += 1;
    } else if (str[i] === 'C' && str[i + 1] === 'D') {
      returnedNum += 400;
      i += 1;
    } else if (str[i] === 'C' && str[i + 1] === 'M') {
      returnedNum += 900;
      i += 1;
    } else if (str[i] === 'I') returnedNum += 1;
    else if (str[i] === 'V') returnedNum += 5;
    else if (str[i] === 'X') returnedNum += 10;
    else if (str[i] === 'L') returnedNum += 50;
    else if (str[i] === 'C') returnedNum += 100;
    else if (str[i] === 'D') returnedNum += 500;
    else if (str[i] === 'M') returnedNum += 1000;
  }

  // return number
  return returnedNum;
};

// tests
console.log(romanToInt('III')); // 3
console.log(romanToInt('IV')); // 4
console.log(romanToInt('IX')); // 9
console.log(romanToInt('LVIII')); // 58
console.log(romanToInt('MCMXCIV')); // 1994
