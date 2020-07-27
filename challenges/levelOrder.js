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
  // error handling
  if (!root) return [];
  // create a returned array;
  const returnedArray = [];
  // push root node value into array
  returnedArray.push([root.val]);
  // create a 'queue' using an array
  const queue = [];
  // push root to queue
  queue.push(root);
  // iterate (while) BFS
  while (queue[0]) {
    // declare building array
    const subsetArray = [];
    // push both left and right to array and add to queue
    if (queue[0].left !== null) {
      queue.push(queue[0].left);
      subsetArray.push(queue[0].left.val);
    }
    if (queue[0].right !== null) {
      queue.push(queue[0].right);
      subsetArray.push(queue[0].right.val);
    }
    // shift off 0 element of array;
    queue.shift();
    // push in our build array
    if (subsetArray[0]) returnedArray.push(subsetArray);
  }
  // return built array BFS
  return returnedArray;
};

function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val)
  this.left = (left === undefined ? null : left)
  this.right = (right === undefined ? null : right)
}

const tree = new TreeNode(5);
tree.left = new TreeNode(3);
tree.right = new TreeNode(7);

tree.left.left = new TreeNode();
tree.left.right = new TreeNode(4);

tree.right.left = new TreeNode();
tree.right.right = new TreeNode(10);

// tree.right.right.left = new TreeNode(15);

console.log(levelOrder(tree));

