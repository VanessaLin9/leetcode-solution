// Given the root of a binary tree, return the length of the diameter of the tree.

// The diameter of a binary tree is the length of the longest path between any two nodes in a tree. This path may or may not pass through the root.

// The length of a path between two nodes is represented by the number of edges between them.

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

var diameterOfBinaryTree = function(root) {
    let diamiter = 0;
  const dfs = (node) => {
    if(node === null) return 0;
    let left = dfs(node.left);
    let right = dfs(node.right);
    diamiter = Math.max(diamiter, left + right)
    return 1 + Math.max(left, right)
  }
  dfs(root)
  return diamiter
};

console.log(diameterOfBinaryTree([1,2,3,4,5]))