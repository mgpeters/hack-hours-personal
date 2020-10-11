// Given an integer, write a function to determine
// if it is a power of three.

// Example 1:

// Input: 27
// Output: true
// Example 2:

// Input: 0
// Output: false
// Example 3:

// Input: 9
// Output: true
// Example 4:

// Input: 45
// Output: false
// Follow up:
// Could you do it without using any loop / recursion?

/**
 * @param {number} n
 * @return {boolean}
 */
const isPowerOfThreeIterative = function (n) {
  // input checking
  if (typeof n !== 'number') throw Error('Please input type of: "number"');

  let multiplyer = 1;

  while (multiplyer <= n) {
    multiplyer *= 3;
    if (multiplyer === n) return true;
  }

  return false;
};

console.log(isPowerOfThreeIterative(27)); // true
console.log(isPowerOfThreeIterative(0)); // false
console.log(isPowerOfThreeIterative(9)); // true
console.log(isPowerOfThreeIterative(45)); // false
