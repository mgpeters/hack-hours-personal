// Shuffle a set of numbers without duplicates.

// Example:

// // Init an array with set 1, 2, and 3.
// int[] nums = {1,2,3};
// Solution solution = new Solution(nums);

// // Shuffle the array [1,2,3] and return its result.
// Any permutation of [1,2,3] must equally likely to be returned.
// solution.shuffle();

// // Resets the array back to its original configuration [1,2,3].
// solution.reset();

// // Returns the random shuffling of array [1,2,3].
// solution.shuffle();

/**
 * @param {number[]} nums
 */
const Solution = function (nums) {
  // Clone a copy of original array;
  this.original = [...nums];
  console.log(this.original);
  // have a bank of shuffled numbers
  this.shuffled = [...nums];
};

/**
 * Resets the array to its original configuration and return it.
 * @return {number[]}
 */
Solution.prototype.reset = function () {
  this.shuffled = [...this.original];
  return this.shuffled;
};

/**
 * Returns a random shuffling of the array.
 * @return {number[]}
 */
Solution.prototype.shuffle = function () {
  for (let i = this.shuffled.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * i);
    const temp = this.shuffled[i];
    this.shuffled[i] = this.shuffled[j];
    this.shuffled[j] = temp;
  }
  return this.shuffled;
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */

const numTest = [1, 2, 3];

const obj = new Solution(numTest);
console.log(obj.reset());
console.log(obj.shuffle());
console.log(obj.reset());
console.log(obj.shuffle());
console.log(obj.reset());
console.log(obj.shuffle());
console.log(obj.reset());
console.log(obj.shuffle());
