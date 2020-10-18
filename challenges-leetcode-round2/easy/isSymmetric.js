
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
const isSymmetric = (root) => {
  if (!root) return true;

  // recursive helper function
  const checkSymmetry = (leftNode, rightNode) => {
    if (leftNode === null && rightNode === null) return true;
    if (leftNode === null || rightNode === null) return false;

    return (leftNode.val === rightNode.val)
      && checkSymmetry(leftNode.left, rightNode.right)
      && checkSymmetry(rightNode.right, leftNode.left);
  };

  return checkSymmetry(root, root);
};

function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val);
  this.left = (left === undefined ? null : left);
  this.right = (right === undefined ? null : right);
}

const tree = new TreeNode(6);

tree.left = new TreeNode(3);
tree.right = new TreeNode(3);

tree.left.left = new TreeNode(10);
// tree.left.right = new TreeNode(4);

tree.right.right = new TreeNode(10);

console.log(isSymmetric(tree));
