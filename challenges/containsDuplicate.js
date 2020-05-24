// Given an array of integers, find if the array contains any duplicates.

// Your function should return true if any value appears at least twice
// in the array, and it should return false if every element is distinct.

// Example 1:

// Input: [1,2,3,1]
// Output: true
// Example 2:

// Input: [1,2,3,4]
// Output: false
// Example 3:

// Input: [1,1,1,3,3,4,3,2,4,2]
// Output: true

/**
 * @param {number[]} nums
 * @return {boolean}
 */

const containsDuplicate = (nums) => {
  const filterObj = {};

  for (let i = 0; i < nums.length; i += 1) {
    if (filterObj[nums[i]]) return true;
    if (!filterObj[nums[i]]) filterObj[nums[i]] = true;
  }

  return false;
};

console.log(containsDuplicate([1, 2, 3, 1])); // true
console.log(containsDuplicate([1, 2, 3, 4])); // false
console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])); // true
