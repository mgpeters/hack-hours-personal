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
const containsDuplicate = function (nums) {
  if (!Array.isArray(nums)) throw Error('Please submit an array of Numbers');
  const auxObj = {};

  for (let i = 0; i < nums.length; i += 1) {
    if (!auxObj[nums[i]]) auxObj[nums[i]] = true;
    else return true;
  }
  return false;
};

console.log(containsDuplicate([1, 2, 3, 1])); // true
console.log(containsDuplicate([1, 2, 3, 4])); // false
console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])); // true
console.log(containsDuplicate([0, 1, 1, 3, 3, 4, 3, 2, 4, 2])); // true

