/*
Given a 32-bit signed integer, reverse digits of an integer.

Example 1:

Input: 123
Output: 321
Example 2:

Input: -123
Output: -321
Example 3:

Input: 120
Output: 21
Note:
Assume we are dealing with an environment which could only store integers within the 32-bit signed
integer range: [−231,  231 − 1]. For the purpose of this problem, assume that your function returns
0 when the reversed integer overflows.
*/

const reverseInteger = (input) => {
  const reversed = parseInt(Math.abs(input).toString().split('').reverse()
    .join(''), 10) * Math.sign(input);

  // takes care of overflow
  return (reversed <= 0x7fffffff && reversed >= -0x80000000) ? reversed : 0;
};

// console.log(reverseInteger(123)); // 321
// console.log(reverseInteger(-321)); // -123
// console.log(reverseInteger(1534236469000)); // 0 from Overflow

module.exports = { reverseInteger };
