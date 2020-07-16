// Given a binary tree, determine if it is a valid binary
// search tree (BST).

// Assume a BST is defined as follows:

// The left subtree of a node contains only nodes with keys
// less than the node's key.
// The right subtree of a node contains only nodes with keys
// greater than the node's key.
// Both the left and right subtrees must also be binary
// search trees.

// Example 1:

//     2
//    / \
//   1   3

// Input: [2,1,3]
// Output: true
// Example 2:

//     5
//    / \
//   1   4
//      / \
//     3   6

// Input: [5,1,4,null,null,3,6]
// Output: false
// Explanation: The root node's value is 5 but its
// right child's value is 4.

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
const isValidBST = (root) => {
  if (!root) return false;

  const dfsHelper = (root, lower, higher) => {
    if (root === null) return true;

    const val = root.val;

    if (lower !== null && val <= lower) return false;
    if (higher !== null && val >= higher) return false;

    if (!dfsHelper(root.right, val, higher)) return false;
    if (!dfsHelper(root.left, lower, val)) return false;

    return true;
  }

  return dfsHelper(root, null, null);
};

function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val)
  this.left = (left === undefined ? null : left)
  this.right = (right === undefined ? null : right)
}

const tree = new TreeNode(5);
tree.left = new TreeNode(8);
tree.right = new TreeNode(7);
tree.right.right = new TreeNode(10);

console.log(isValidBST(tree));