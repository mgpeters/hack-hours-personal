// Given two sorted integer arrays nums1 and nums2,
// merge nums2 into nums1 as one sorted array.

// Note:

// The number of elements initialized in nums1 and
// nums2 are m and n respectively.
// You may assume that nums1 has enough space (size
// that is equal to m + n) to hold additional elements from nums2.

// Example:

// Input:
// nums1 = [1,2,3,0,0,0], m = 3
// nums2 = [2,5,6],       n = 3

// Output: [1,2,2,3,5,6]

// Constraints:

// -10^9 <= nums1[i], nums2[i] <= 10^9
// nums1.length == m + n
// nums2.length == n

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */

const merge = (nums1, m, nums2, n) => {
  // set up pointers to
  let pointer1 = m - 1;
  let pointer2 = n - 1;
  let length = m + n;

  while (length--) {
    length -= 1;
    if (pointer2 < 0 || nums1[pointer1] > nums2[pointer2]) {
      nums1[length] = nums1[pointer1];
      pointer1 -= 1;
    } else {
      nums1[length] = nums2[pointer2];
      pointer2 -= 1;
    }
  }
  console.log(nums1);
};

const numbers1 = [0];
const numbers2 = [1];

console.log(merge(numbers1, 0, numbers2, 1));