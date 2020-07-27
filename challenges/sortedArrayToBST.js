// Given an array where elements are sorted in ascending order,
// convert it to a height balanced BST.

// For this problem, a height-balanced binary tree is defined as
// a binary tree in which the depth of the two subtrees of every
// node never differ by more than 1.

// Example:

// Given the sorted array: [-10,-3,0,5,9],

// One possible answer is: [0,-3,9,-10,null,5], which represents
// the following height balanced BST:

//       0
//      / \
//    -3   9
//    /   /
//  -10  5

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/**
 * @param {number[]} nums
 * @return {TreeNode}
 */

function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val)
  this.left = (left === undefined ? null : left)
  this.right = (right === undefined ? null : right)
}

const sortedArrayToBST = (nums) => {
  if (!nums.length) return null;

  const middle = Math.floor(nums.length / 2);
  const root = new TreeNode(nums[middle]);

  root.left = sortedArrayToBST(nums.slice(0, middle));
  root.right = sortedArrayToBST(nums.slice(middle + 1));

  return root;
}

// const sortedArrayToBST = (nums) => {
//   // error checking
//   if (nums === undefined || nums[0] === undefined) return undefined;
//   // find the middle of the array for the root node
//   const middle = Math.floor(nums.length / 2);
//   // console.log(middle);

//   // create root node
//   const root = new TreeNode(nums[middle]);
//   console.log(root)
//   // create node pointer;
//   let pointer = root;
//   // loop backwards to add left nodes;
//   for (let i = middle - 1; i > 0; i -= 1) {
//     if (pointer.)
//   }
//   // reset pointer to root;
//   pointer = root;
//   // loop from middle to end of array;
//   for (let i = middle + 1; i < nums.length; i += 1) {

//   }

//   return root;
// };

const testArray = [-10, -3, 0, 5, 9];

console.log(sortedArrayToBST(testArray));