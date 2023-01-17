// Given the root of a binary tree, return the inorder traversal of its nodes' values.

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

// inOrder: node.left -> node -> node.right
var inorderTraversal = function(root) {
    const result = [];
    const inorder = (node) => {
        if(!node) return;
        let l = inorder(node.left)
        result.push(node.val)
        let r = inorder(node.right)
    };
    inorder(root);
    return result;
};