// Given two arrays, write a function to compute their intersection.

// Example 1:

// Input: nums1 = [1,2,2,1], nums2 = [2,2]
// Output: [2,2]
// Example 2:

// Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// Output: [4,9]
// Note:

// Each element in the result should appear as many times as it shows in both arrays.
// The result can be in any order.
// Follow up:

// What if the given array is already sorted? How would you optimize your algorithm?
// What if nums1's size is small compared to nums2's size? Which algorithm is better?
// What if elements of nums2 are stored on disk, and the memory is limited such that
// you cannot load all elements into the memory at once?

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */

// const intersect = (nums1, nums2) => {
//   // set two pointers for each nums arry
//   const returnedArray = [];
//   // let pointer1 = 0;
//   // let pointer2 = 0;
//   // set variable for the longest length array
//   // const longestLength = nums1.length > nums2.length ? nums1.length : nums2.length;
//   const shorterNums = nums1.length > nums2.length ? nums2 : nums1;
//   const longerNums = nums1.length < nums2.length ? nums2 : nums1;

//   for (let i = 0; i < shorterNums.length; i += 1) {
//     for (let j = i + 1; j < longerNums.length; j += 1) {
//       if (shorterNums[i] === longerNums[j]) {
//         returnedArray.push(shorterNums[i]);
//         break;
//       }
//     }
//   }
//   return returnedArray;
// };

// const intersect = (nums1, nums2) => {
//   // set two pointers for each nums arry
//   const returnedArray = [];
//   let pointer = 0;
//   // let pointer2 = 0;
//   // set variable for the longest length array
//   const shorterNums = nums1.length > nums2.length ? nums2 : nums1;
//   const longerNums = nums1.length < nums2.length ? nums2 : nums1;

//   for (let i = 0; i < longerNums.length; i += 1) {
//     // if (returnedArray.length === shorterNums.length) break;
//     if (longerNums[i] === shorterNums[pointer]) {
//       returnedArray.push(shorterNums[pointer]);
//       pointer += 1;
//     }
//   }
//   return returnedArray;
// };

// const intersect = (nums1, nums2) => {
//   nums1.sort((a, b) => a - b);
//   nums2.sort((a, b) => a - b);

//   const returnedArray = [];

//   let pointer = 0;

//   const shorterNums = nums1.length > nums2.length ? nums2 : nums1;
//   const longerNums = shorterNums === nums1 ? nums2 : nums1;

//   for (let i = 0; i < longerNums.length; i += 1) {
//     if (longerNums[i] === shorterNums[pointer]) {
//       returnedArray.push(shorterNums[pointer]);
//       pointer += 1;
//     }
//     if (longerNums[i] > shorterNums[pointer]) {
//       pointer += 1;
//     }
//   }

//   return returnedArray;
// };

const intersect = (nums1, nums2) => {
  const auxObject = {};
  const returnedArray = [];

  const shorterNums = nums1.length > nums2.length ? nums2 : nums1;
  const longerNums = shorterNums === nums1 ? nums2 : nums1;

  for (let i = 0; i < shorterNums.length; i += 1) {
    if (!auxObject[shorterNums[i]]) {
      auxObject[shorterNums[i]] = 1;
    } else {
      auxObject[shorterNums[i]] += 1;
    }
  }

  for (let i = 0; i < longerNums.length; i += 1) {
    if (auxObject[longerNums[i]] && auxObject[longerNums[i]] !== 0) {
      returnedArray.push(longerNums[i]);
      auxObject[longerNums[i]] -= 1;
    }
  }

  return returnedArray;
};

console.log(intersect([1, 2, 2, 1], [2, 2]));
console.log(intersect([4, 9, 5], [9, 4, 9, 8, 4]));
console.log(intersect([1, 1], [1, 2]));
