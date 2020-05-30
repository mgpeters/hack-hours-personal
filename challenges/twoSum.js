// Given an array of integers, return indices of the two
// numbers such that they add up to a specific target.

// You may assume that each input would have exactly one
// solution, and you may not use the same element twice.

// Example:

// Given nums = [2, 7, 11, 15], target = 9,

// Because nums[0] + nums[1] = 2 + 7 = 9,
// return [0, 1].

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = (nums, target) => {
  const auxObject = {};

  for (let i = 0; i < nums.length; i += 1) {
    const difference = target - nums[i];

    if (auxObject[difference] || auxObject[difference] === 0) {
      return [auxObject[difference], i];
    }
    auxObject[nums[i]] = i;
  }
  return null;
};

console.log(twoSum([2, 7, 11, 15], 9)); // [0, 1]
// console.log(twoSum([3, 2, 4], 6));
// console.log(twoSum([2, 7, 11, 15], 9));
