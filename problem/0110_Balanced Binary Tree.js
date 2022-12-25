// Given a binary tree, determine if it is height-balanced.

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

// recursion
var isBalanced = function(root) {
  if(!root) return true;

  let height = (node) => {
    if(!node) return 0;
    return 1 + Math.max(height(node.left), height(node.right));
  }

  return Math.abs(height(root.left) - height(root.right)) < 2 && isBalanced(root.left) && isBalanced(root.right);
};
// T: O(n^2)

// postOrder
var isBalanced = function(root) {
  if(!root) return true;

  let dfs = (node) => {
    if(!node) return 0;
    let left = 1 + dfs(node.left);
    let right = 1 + dfs(node.right);

    if(Math.abs(left - right) > 1) return Infinity;
    return Math.max(left, right); 
  }
  return dfs(root) === Infinity? false: true;
};

// T: O(n)