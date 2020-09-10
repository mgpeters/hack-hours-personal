// Given an array nums, write a function to move all 0's
// to the end of it while maintaining the relative order
// of the non-zero elements.

// Example:

// Input: [0,1,0,3,12]
// Output: [1,3,12,0,0]
// Note:

// You must do this in-
// place without making a copy of the array.
// Minimize the total number of operations.

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const moveZeroes = (nums) => {
  // error checking input
  if (!Array.isArray(nums)) throw Error('Please input an array');

  // declare slow and fast pointers
  let slowPointer = 0;
  let fastPointer = 1;

  // loop with while
  while (nums[fastPointer] !== undefined) {
    // note: possible overlap term condition
    // check if slowP === 0
    if (nums[slowPointer] === 0 && nums[fastPointer] !== 0) {
      const temp = nums[fastPointer];
      nums[fastPointer] = 0;
      nums[slowPointer] = temp;
      slowPointer += 1;
      fastPointer += 1;
    } else if (nums[slowPointer] === 0 && nums[fastPointer] === 0) {
      fastPointer += 1;
    } else {
      slowPointer += 1;
      fastPointer += 1;
    }
  }

  // return to check but  erase when confirmed
  return nums;
};

console.log(moveZeroes([0, 1, 0, 3, 12])); // [1,3,12,0,0]
console.log(moveZeroes([0, 1])); // [1, 0]
console.log(moveZeroes([1, 0])); // [1, 0]
console.log(moveZeroes([1, 0, 1])); // [1, 1, 0]
