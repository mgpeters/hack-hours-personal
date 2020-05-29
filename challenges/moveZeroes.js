// Given an array nums, write a function to move all
// 0's to the end of it while maintaining the relative
// order of the non-zero elements.

// Example:

// Input: [0,1,0,3,12]
// Output: [1,3,12,0,0]
// Note:

// You must do this in-place without making a copy of the array.
// Minimize the total number of operations

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const moveZeroes = (nums) => {
  let pointer1 = 0;
  let pointer2 = 1;

  while (nums[pointer2] !== undefined) {
    // if (nums[pointer1] === 0 && nums[pointer2] === 0) {
    //   pointer2 += 1;
    // } else
    // if (nums[pointer1] !== 0) {
    //   pointer1 += 1;
    //   // pointer2 += 1;
    // }
    if (nums[pointer1] === 0 && nums[pointer2] !== 0) {
      nums[pointer1] = nums[pointer2];
      nums[pointer2] = 0;
      pointer1 += 1;
      pointer2 = pointer1 + 1;
    } else if (nums[pointer1] !== 0) {
      pointer1 += 1;
      pointer2 = pointer1 + 1;
    } else {
      pointer2 += 1;
    }
  }

  return nums;
};

console.log(moveZeroes([0, 1, 0, 3, 12]));
console.log(moveZeroes([0, 1, 1, 0]));
console.log(moveZeroes([1, 0, 1]));
console.log(moveZeroes([0, 1]));



