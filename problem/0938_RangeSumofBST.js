// 938. Range Sum of BST
// https://leetcode.com/problems/range-sum-of-bst/description/
// Given the root node of a binary search tree and two integers low and high, return the sum of values of all nodes with a value in the inclusive range [low, high].

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
 * @param {number} low
 * @param {number} high
 * @return {number}
 */

// var rangeSumBST = function(root, low, high) {
//   const isInBetween = (val) => val >= low && val <= high;
//   const add = (val, sum) => isInBetween(val)? sum += val : sum;
//   const preOrder = (root, sum) => {
//     if(!root) return sum;
//     return add(root.val, sum) + preOrder(root.left, sum) + preOrder(root.right, sum)
//   } 
//   return preOrder(root, 0)   
// };

//
 var rangeSumBST = function(root, low, high) {
  let sum = 0;
  if (root === null) return sum;

  if(root.val > low) {
    sum += rangeSumBST(root.left, low, high)
  }

  if(high >= root.val && root.val >= low){
    sum += root.val;
  }

  if(root.val < high){
    sum += rangeSumBST(root.right, low, high)
  }

  return sum;
 }
