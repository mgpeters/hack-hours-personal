// Given a non-empty array of integers, every element appears
// twice except for one. Find that single one.

// Note:

// Your algorithm should have a linear runtime complexity.
// Could you implement it without using extra memory?

// Example 1:

// Input: [2,2,1]
// Output: 1
// Example 2:

// Input: [4,1,2,1,2]
// Output: 4

/**
 * @param {number[]} nums
 * @return {number}
 */
const singleNumber = (nums) => {
  const auxObj = {};

  for (let i = 0; i < nums.length; i += 1) {
    if (!auxObj[nums[i]]) auxObj[nums[i]] = 0;
    auxObj[nums[i]] += 1;
  }

  return Number(Object.entries(auxObj).filter((obj) => obj[1] === 1)[0][0]);
};

// console.log(singleNumber([2, 2, 1])); // 1
console.log(singleNumber([4, 1, 2, 1, 2])); // 4
