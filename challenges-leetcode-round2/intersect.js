// Given two arrays, write a function to
// compute their intersection.

// Example 1:

// Input: nums1 = [1,2,2,1], nums2 = [2,2]
// Output: [2,2]
// Example 2:

// Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// Output: [4,9]
// Note:

// Each element in the result should appear as
// many times as it shows in both arrays.

// The result can be in any order.
// Follow up:

// What if the given array is already sorted?
// How would you optimize your algorithm?
// What if nums1's size is small compared to
// nums2's size? Which algorithm is better?
// What if elements of nums2 are stored on disk,
// and the memory is limited such that you cannot
// load all elements into the memory at once?

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
const intersect = (nums1, nums2) => {
  // error checking
  if (!Array.isArray(nums1) || !Array.isArray(nums2)) {
    throw Error('Please submit arrays for argument');
  }

  const returnedArray = [];

  const longerArray = nums1.length >= nums2.length ? nums1 : nums2;
  const shorterArray = nums1.length >= nums2.length ? nums2 : nums1;

  // nums1.sort((a, b) => a - b);
  // nums2.sort((a, b) => a - b);

  let slowPointer = 0;
  let fastPointer = 0;

  while (shorterArray[slowPointer] !== undefined) {
    if (shorterArray[slowPointer] === longerArray[fastPointer]) {
      returnedArray.push(shorterArray[slowPointer]);
      slowPointer += 1;
      fastPointer += 1;
    } else if (longerArray[fastPointer] === undefined) {
      slowPointer += 1;
      fastPointer = slowPointer + 1;
    } else {
      fastPointer += 1;
    }
  }

  return returnedArray;
};

// console.log(intersect([1, 2, 2, 1], [2, 2]));
// console.log(intersect([4, 9, 5], [9, 4, 9, 8, 4]));
console.log(intersect([1, 2], [1, 1]));
