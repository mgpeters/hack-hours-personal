// Given an array containing n distinct numbers taken
// from 0, 1, 2, ..., n, find the one that is missing
// from the array.

// Example 1:

// Input: [3,0,1]
// Output: 2
// Example 2:

// Input: [9,6,4,2,3,5,7,0,1]
// Output: 8
// Note:
// Your algorithm should run in linear runtime complexity.
// Could you implement it using only constant extra space
// complexity?

/**
 * @param {number[]} nums
 * @return {number}
 */
const missingNumber = (nums) => {
  let numsSum = 0;
  let actualSum = 0;
  let lowest = Infinity;
  let highest = -Infinity;

  for (let i = 0; i < nums.length; i += 1) {
    if (nums[i] < lowest) lowest = nums[i];
    if (nums[i] > highest) highest = nums[i];
    numsSum += nums[i];
  }

  for (let i = lowest; i <= highest; i += 1) {
    actualSum += i;
  }

  console.log(numsSum);
  console.log(actualSum)

  return numsSum === actualSum ? numsSum + 1 : actualSum - numsSum;
};

// console.log(missingNumber([3, 0, 1])); // 2
// console.log(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1])); // 8
// console.log(missingNumber([0])); // 1
console.log(missingNumber([1])); // 1

