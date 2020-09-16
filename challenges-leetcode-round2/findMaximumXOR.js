// Given a non-empty array of
// numbers, a0, a1, a2, … , an-1, where 0 ≤ ai < 231.

// Find the maximum result of ai XOR aj, where 0 ≤ i, j < n.

// Could you do this in O(n) runtime?

// Example:

// Input: [3, 10, 5, 25, 2, 8]

// Output: 28

// Explanation: The maximum result is 5 ^ 25 = 28.

/**
 * @param {number[]} nums
 * @return {number}
 */
const findMaximumXOR = (nums) => {
  let maximumXOR = 0;

  for (let i = 0; i < nums.length; i += 1) {
    for (let j = 0; j < nums.length; j += 1) {
      if (i !== j && (nums[i] ^ nums[j]) > maximumXOR) {
        maximumXOR = nums[i] ^ nums[j];
      }
    }
  }
  return maximumXOR;
};

// console.log(findMaximumXOR([3, 10, 5, 25, 2, 8])); // 28

// console.log(31 ^ 0);
