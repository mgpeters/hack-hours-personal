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
const threeSum = (nums) => {
  // input checking
  if (!Array.isArray(nums)) throw Error('Please input typeof: Array');
  // create a build/returned array
  const returnedArray = [];
  // edge case
  if (nums.length <= 2) return returnedArray;

  // sort input array


  return returnedArray;
};

console.log(threeSum([-1, 0, 1, 2, -1, -4])); // [[-1,-1,2],[-1,0,1]]
console.log(threeSum([])); // []
console.log(threeSum([0])); // []


/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// const threeSum = function (nums) {
//   const rtn = [];
//   if (nums.length < 3) {
//     return rtn;
//   }
//   nums = nums.sort((a, b) => a - b);
//   for (let i = 0; i < nums.length - 2; i++) {
//     if (nums[i] > 0) {
//       return rtn;
//     }
//     if (i > 0 && nums[i] == nums[i - 1]) {
//       continue;
//     }
//     for (let j = i + 1, k = nums.length - 1; j < k;) {
//       if (nums[i] + nums[j] + nums[k] === 0) {
//         rtn.push([nums[i], nums[j], nums[k]]);
//         j++;
//         k--;
//         while (j < k && nums[j] == nums[j - 1]) {
//           j++;
//         }
//         while (j < k && nums[k] == nums[k + 1]) {
//           k--;
//         }
//       } else if (nums[i] + nums[j] + nums[k] > 0) {
//         k--;
//       } else {
//         j++;
//       }
//     }
//   }
//   return rtn;
// };
