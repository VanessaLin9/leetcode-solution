// A binary tree is uni-valued if every node in the tree has the same value.

// Given the root of a binary tree, return true if the given tree is uni-valued, or false otherwise.

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
var isUnivalTree = function(root) {
    const value = root.val;
    return sameVal(root, value)
};

function sameVal(node, value){
    if(!node) return true;
    if (node.val !== value) return false;
    return sameVal(node.left, value) && sameVal(node.right, value)
}