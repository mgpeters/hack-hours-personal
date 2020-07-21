// Given a binary tree, check whether it is a mirror of itself
// (ie, symmetric around its center).

// For example, this binary tree [1,2,2,3,4,4,3] is symmetric:

//     1
//    / \
//   2   2
//  / \ / \
// 3  4 4  3


// But the following [1,2,2,null,3,null,3] is not:

//     1
//    / \
//   2   2
//    \   \
//    3    3


// Follow up: Solve it both recursively and iteratively.

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

// Recursive solution
const isSymmetricRecursive = (root) => {
  // recursive helper for mirror check
  const isMirror = (tree1, tree2) => {
    // Termination case: If both trees are null
    if (tree1 === null && tree2 === null) return true;
    // Termination case: If one tree is null
    if (tree1 == null || tree2 === null) return false;

    return (tree1.val === tree2.val)
      && isMirror(tree1.right, tree2.left)
      && isMirror(tree1.left, tree2.right);
  }

  return isMirror(root, root);
};

// Iterative solution
const isSymmetricIterative = (root) => {
  // Will confirm symmetry with an array/queue
  const queue = [];

  // will push both root's to queue off the bat
  queue.push(root);
  queue.push(root);

  // loop through nodes
  while (queue[0]) {
    const t1 = queue.shift();
    const t2 = queue.shift();

    if (t1 === null && t2 === null) continue;
    if (t1 === null || t2 === null) return false;
    if (t1.val !== t2.val) return false;
    queue.push(t1.left);
    queue.push(t2.right);
    queue.push(t1.right);
    queue.push(t2.left);
  }

  return true;
};

function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val)
  this.left = (left === undefined ? null : left)
  this.right = (right === undefined ? null : right)
}

const tree = new TreeNode(5);
tree.left = new TreeNode(7);
tree.right = new TreeNode(7);
tree.right.right = new TreeNode(10);
tree.left.left = new TreeNode(10);

// console.log(isSymmetricRecursive(tree, tree));
console.log(isSymmetricIterative(tree, tree));

// console.log(Boolean([]));