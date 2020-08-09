// You are a professional robber planning to rob houses along a street.
// Each house has a certain amount of money stashed, the only constraint
// stopping you from robbing each of them is that adjacent houses have
// security system connected and it will automatically contact the police
// if two adjacent houses were broken into on the same night.

// Given a list of non-negative integers representing the amount of money
// of each house, determine the maximum amount of money you can rob tonight
// without alerting the police.

// Example 1:

// Input: nums = [1,2,3,1]
// Output: 4
// Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).
//              Total amount you can rob = 1 + 3 = 4.
// Example 2:

// Input: nums = [2,7,9,3,1]
// Output: 12
// Explanation: Rob house 1 (money = 2), rob house 3 (money = 9) and rob house 5 (money = 1).
//              Total amount you can rob = 2 + 9 + 1 = 12.

// Constraints:

// 0 <= nums.length <= 100
// 0 <= nums[i] <= 400

/**
 * @param {number[]} nums
 * @return {number}
 */
const rob = (nums) => {
  if (!Array.isArray(nums)) return 'Please submit an Array of Houses';
  if (nums.length === 0) return 0;

  let prevMax = 0;
  let currMax = 0;

  for (let i = 0; i < nums.length; i += 1) {
    let temp = currMax;
    currMax = Math.max(prevMax + nums[i], currMax);
    prevMax = temp;
  }

  return Math.max(currMax, prevMax);
};

console.log(rob([1, 2, 3, 1]));
console.log(rob([2, 7, 9, 3, 1]));
console.log(rob([2, 1, 1, 2]));
