// Given a binary tree, return the level order traversal
// of its nodes' values. (ie, from left to right, level by level).

// For example:
// Given binary tree [3,9,20,null,null,15,7],
//     3
//    / \
//   9  20
//     /  \
//    15   7
// return its level order traversal as:
// [
//   [3],
//   [9,20],
//   [15,7]
// ]

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
 * @return {number[][]}
 */
const levelOrder = (root) => {
  let maxDepth = 0;
  // check if root is valid
  if (!root) return maxDepth;

  const bfsPreHelper = (leaf) => {
    if (leaf === null) return 0; // check later

    maxDepth = Math.max(bfsPreHelper(leaf.left), bfsPreHelper(leaf.right)) + 1;

    return maxDepth;
  };

  return bfsPreHelper(root);
};

function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val);
  this.left = (left === undefined ? null : left);
  this.right = (right === undefined ? null : right);
}

const tree = new TreeNode(6);

tree.left = new TreeNode(3);
tree.right = new TreeNode(8);

tree.left.left = new TreeNode(2);
tree.left.right = new TreeNode(4);
// tree.left.right.right = new TreeNode(6);
// tree.left.right.right.right = new TreeNode(6);


tree.right.right = new TreeNode(10);
tree.right.right.right = new TreeNode(15);

console.log(levelOrder(tree)); // 3
