// Given the root of a binary tree, return the postorder traversal of its nodes' values.

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

// postOrder: node.left -> node.right -> node
var postorderTraversal = function(root) {
  const result = [];
  const postorder = (node) => {
    if(!node) return;
    let L = postorder(node.left);
    let R = postorder(node.right);
    result.push(node.val);
  }
  postorder(root);
  return result;
};