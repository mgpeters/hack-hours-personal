// Given an array, rotate the array to the right by
// k steps, where k is non-negative.

// Follow up:

// Try to come up as many solutions as you can, there
// are at least 3 different ways to solve this problem.

// Could you do it in-place with O(1) extra space?

// Example 1:

// Input: nums = [1,2,3,4,5,6,7], k = 3
// Output: [5,6,7,1,2,3,4]
// Explanation:
// rotate 1 steps to the right: [7,1,2,3,4,5,6]
// rotate 2 steps to the right: [6,7,1,2,3,4,5]
// rotate 3 steps to the right: [5,6,7,1,2,3,4]

// Example 2:

// Input: nums = [-1,-100,3,99], k = 2
// Output: [3,99,-1,-100]
// Explanation:
// rotate 1 steps to the right: [99,-1,-100,3]
// rotate 2 steps to the right: [3,99,-1,-100]

// Constraints:

// 1 <= nums.length <= 2 * 10^4
// It's guaranteed that nums[i] fits in a 32 bit-signed integer.
// k >= 0

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const rotate = (nums, k) => {
  // if (nums.length <= 1) return nums;
  // if (k > nums.length) k = nums.length;
  console.log(k)
  k %= nums.length;
  console.log(k)
  // Rotates array in place from start to end
  const rotateHelper = (array, start, end) => {
    while (start < end) {
      const temp = array[start];
      array[start] = array[end];
      array[end] = temp;
      start += 1;
      end -= 1;
    }
  };

  // rotate whole array in place
  rotateHelper(nums, 0, nums.length - 1);
  // Rotate up to k minus 1
  rotateHelper(nums, 0, k - 1);
  // Rotate from k to length of array
  rotateHelper(nums, k, nums.length - 1);

  return nums;
};

// console.log(rotate([1, 2, 3, 4, 5, 6, 7], 3)); // [5,6,7,1,2,3,4]
// console.log(rotate([-1, -100, 3, 99], 2)); // [3,99,-1,-100]
console.log(rotate([-1], 2));
console.log(rotate([1, 2], 3));
