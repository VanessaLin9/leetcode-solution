// 226. Invert Binary Tree
// https://leetcode.com/problems/invert-binary-tree/
// Tag: Tree, Depth-first Search, Breadth-first Search, Binary Tree, Easy

// Given the root of a binary tree, invert the tree, and return its root.
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
 * @return {TreeNode}
 */
var invertTree = function(root) {
    if(root === null) return root;
    [root.left, root.right] = [invertTree(root.right), invertTree(root.left)];
    return root;
};