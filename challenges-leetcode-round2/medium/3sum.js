// Given an array nums of n integers, are there elements
// a, b, c in nums such that a + b + c = 0? Find all unique
// triplets in the array which gives the sum of zero.

// Notice that the solution set must not contain duplicate triplets.

// Example 1:

// Input: nums = [-1,0,1,2,-1,-4]
// Output: [[-1,-1,2],[-1,0,1]]
// Example 2:

// Input: nums = []
// Output: []
// Example 3:

// Input: nums = [0]
// Output: []

/**
 * @param {number[]} nums
 * @return {number[][]}
 */

const threeSum = (numsList) => {
  if (!Array.isArray(numsList)) throw Error('Please input typeof: array');

  numsList.sort((a, b) => a - b);

  const returnedArray = [];

  const twoSumII = (nums, i, list) => {
    let low = i + 1;
    let hi = nums.length - 1;

    while (low < hi) {
      const sum = nums[i] + nums[low] + nums[hi];

      if (sum < 0) low += 1;
      else if (sum > 0) hi -= 1;
      else {
        list.push([nums[i], nums[low], nums[hi]]);
        low += 1;
        hi -= 1;
        // avoid duplicate results
        while (low < hi && nums[low] === nums[low - 1]) {
          low += 1;
        }
      }
    }
  };

  for (let i = 0; i < numsList.length && numsList[i] <= 0; i += 1) {
    if (i === 0 || numsList[i - 1] !== numsList[i]) { // avoid duplicate results
      twoSumII(numsList, i, returnedArray);
    }
  }

  return returnedArray;
};

console.log(threeSum([-1, 0, 1, 2, -1, -4])); // [[-1,-1,2],[-1,0,1]]
console.log(threeSum([])); // []
console.log(threeSum([0])); // []
console.log(threeSum([0, 0, 0, 0])); // [[0,0,0]]
