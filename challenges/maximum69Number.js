// Given a positive integer num consisting only of digits 6 and 9.

// Return the maximum number you can get by changing at most one digit
// (6 becomes 9, and 9 becomes 6).


// Example 1:

// Input: num = 9669
// Output: 9969
// Explanation:
// Changing the first digit results in 6669.
// Changing the second digit results in 9969.
// Changing the third digit results in 9699.
// Changing the fourth digit results in 9666.
// The maximum number is 9969.
// Example 2:

// Input: num = 9996
// Output: 9999
// Explanation: Changing the last digit 6 to 9 results in the maximum number.
// Example 3:

// Input: num = 9999
// Output: 9999
// Explanation: It is better not to apply any change.

// Constraints:

// 1 <= num <= 10^4
// num's digits are 6 or 9.

/**
 * @param {number} num
 * @return {number}
 */

const maximum69Number = (num) => {
  if (num < 0) return new Error('Please provide a positive number.');

  let stringNumber = num.toString();

  for (let i = 0; i < stringNumber.length; i += 1) {
    if (stringNumber[i] === '6') {
      const workingStr = stringNumber.split('');
      workingStr[i] = '9';
      return Number(workingStr.join(''));
    }
    if (i === stringNumber.length - 1) {
      return Number(stringNumber);
    }
  }
};

console.log(maximum69Number(9669));
console.log(maximum69Number(9996));
console.log(maximum69Number(9999));

module.exports = { maximum69Number };
