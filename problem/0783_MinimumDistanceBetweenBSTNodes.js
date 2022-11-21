// 783. Minimum Distance Between BST Nodes
// **This question is the same as 530: https://leetcode.com/problems/minimum-absolute-difference-in-bst/

// Given the root of a Binary Search Tree (BST), return the minimum difference between the values of any two different nodes in the tree.

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
 * @return {number}
 */
var minDiffInBST = function(root) {
  let min = Infinity;
  let current = null;
  
   // inOrder
  const inOrder = (root) => {
    if(!root) return;

    inOrder(root.left)
    if(current){
      min = (root.val - current.val) < min ? (root.val - current.val):min;
    }
    current = root;
    inOrder(root.right);
  }
  inOrder(root);
  return min;
};