// Serialization is converting a data structure or object into
// a sequence of bits so that it can be stored in a file or memory
// buffer, or transmitted across a network connection link to be
// reconstructed later in the same or another computer environment.

// Design an algorithm to serialize and deserialize a binary
// search tree. There is no restriction on how your
// serialization/deserialization algorithm should work.
// You need to ensure that a binary search tree can be
// serialized to a string, and this string can be deserialized
// to the original tree structure.

// The encoded string should be as compact as possible.

// Example 1:

// Input: root = [2,1,3]
// Output: [2,1,3]
// Example 2:

// Input: root = []
// Output: []

// Constraints:

// The number of nodes in the tree is in the range [0, 104].
// 0 <= Node.val <= 104
// The input tree is guaranteed to be a binary search tree.

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
const serialize = function (root) {

};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
const deserialize = function (data) {

};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */

function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val)
  this.left = (left === undefined ? null : left)
  this.right = (right === undefined ? null : right)
}

const tree = new TreeNode(5);
tree.left = new TreeNode(8);
tree.right = new TreeNode(7);
tree.right.right = new TreeNode(10);

const stringified = JSON.stringify(tree);
console.log(JSON.parse(stringified))
