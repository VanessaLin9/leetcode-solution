// Given the root of a binary tree, return the preorder traversal of its nodes' values.

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

// preOrder: node -> node.left -> node.right
var preorderTraversal = function(root) {
  const result = [];
  const preorder = (node) => {
    if(!node) return;
    result.push(node.val);
    let L = preorder(node.left);
    let R = preorder(node.right);
  }
  preorder(root);
  return result;
};