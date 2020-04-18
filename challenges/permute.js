// Given a collection of distinct integers, return all possible permutations.

// Example:

// Input: [1,2,3]
// Output:
// [
//   [1,2,3],
//   [1,3,2],
//   [2,1,3],
//   [2,3,1],
//   [3,1,2],
//   [3,2,1]
// ]

const permute = (nums) => {
  const returnedArray = [];

  if (nums === 0) return returnedArray;

  const permHelper = (current, throws) => {
    if (!throws) return returnedArray.push(current);
console.log(throws)
    const filterCurrent = [current[0]];

    for (let i = 0; i < nums.length; i += 1) {
      if (nums[i] !== nums[i - 1]) permHelper(current.concat(nums[i]), throws.shift());
    }
  };

  permHelper([], nums);

  return returnedArray;
};

const input = [1, 2, 3];

console.log(permute(input));

module.exports = { permute };
