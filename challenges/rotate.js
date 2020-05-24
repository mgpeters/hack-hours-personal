// Given an array, rotate the array to the right by k steps, where
// k is non-negative.

// Follow up:

// Try to come up as many solutions as you can, there are at least
// 3 different ways to solve this problem.
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

const rotate1 = (nums, k) => {
  // if (k < 0) return Error('Please submit a positive number');
  // if (!k) return nums;

  // const left = nums.slice(k - nums.length);
  // const right = nums.slice(0, k - nums.length);

  // return left.concat(right);
};

// console.log(rotate1([1, 2, 3, 4, 5, 6, 7], 3));
// console.log(rotate1([-1, -100, 3, 99], 2));

// const rotate2 = (nums, k) => {
//   if (k < 0) return Error('Please submit a positive number');
//   if (!k) return nums;

//   let leftPointer = 0;
//   let rightPointer = nums.length + 1 - k;

//   console.log(rightPointer);

//   for (let i = rightPointer; i < nums.length; i += 1) {
//     let temp = nums[leftPointer];
//     nums[leftPointer] = nums[rightPointer];
//     nums[rightPointer] = temp;

//     leftPointer += 1;
//   }

//   return nums;
// };

const rotate2 = (nums, k) => {
  if (k < 0) return Error('Please submit a positive number');
  if (!k) return nums;

  for (let i = 0; i < k; i += 1) {
    const temp = nums[nums.length - 1];
    let j = nums.length - 2;
    while (j >= 0) {
      nums[j + 1] = nums[j];
      nums[j] = temp;
      j -= 1;
    }
  }
  return nums;
};

// console.log(rotate2([1, 2, 3, 4, 5, 6, 7], 3));
// console.log(rotate2([-1, -100, 3, 99], 2));

const rotate3 = (nums, k) => {
  k %= nums.length;
  console.log(k);

  const reverse = (inums, start, end) => {
    while (start < end) {
      const temp = inums[start];
      inums[start] = inums[end];
      inums[end] = temp;
      start += 1;
      end += 1;
    }
  };

  reverse(nums, 0, nums.length - 1);
  reverse(nums, 0, k - 1);
  reverse(nums, k, nums.length - 1);
};

console.log(rotate3([1, 2, 3, 4, 5, 6, 7], 3));
// console.log(rotate3([-1, -100, 3, 99], 2));
