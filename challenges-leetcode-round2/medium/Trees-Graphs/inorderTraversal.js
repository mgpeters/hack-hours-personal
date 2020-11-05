// Given the root of a binary tree, return the inorder
// traversal of its nodes' values.

// Example 1:

// Input: root = [1,null,2,3]
// Output: [1,3,2]

// Example 2:
// Input: root = []
// Output: []

// Example 3:
// Input: root = [1]
// Output: [1]

// Example 4:
// Input: root = [1,2]
// Output: [2,1]

// Example 5:
// Input: root = [1,null,2]
// Output: [1,2]

// Constraints:

// The number of nodes in the tree is in the range [0, 100].
// -100 <= Node.val <= 100

// Follow up:

// Recursive solution is trivial, could you do it iteratively?

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
 * @return {number[]}
 */

function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val);
  this.left = (left === undefined ? null : left);
  this.right = (right === undefined ? null : right);
}

const inorderTraversalRecursive = (root) => {
  const returnedArray = [];

  if (!root) return returnedArray;

  const traverse = (leaf) => {
    if (leaf) {
      if (leaf.left) {
        traverse(leaf.left);
      }

      returnedArray.push(leaf.val);

      if (leaf.right) {
        traverse(leaf.right);
      }
    }
  };

  traverse(root);

  return returnedArray;
};

const inorderTraversalIterative = (root) => {
  const returnedArray = [];
  const stack = [];

  let currNode = root;

  while (currNode !== null || stack.length !== 0) {
    while (currNode !== null) {
      stack.push(currNode);
      currNode = currNode.left;
    }

    currNode = stack.pop();
    returnedArray.push(currNode.val);
    currNode = currNode.right;
  }

  return returnedArray;
};

const bt = new TreeNode(1);
bt.right = new TreeNode(2);
bt.right.left = new TreeNode(3);

console.log(inorderTraversalRecursive(bt));
console.log(inorderTraversalIterative(bt));
