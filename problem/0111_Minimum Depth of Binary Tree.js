// Given a binary tree, find its minimum depth.

// The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node.

// Note: A leaf is a node with no children.

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root * @return {number}
 */
var minDepth = function(root) {
    if(!root) return 0;
    return dep(root)
};

function dep(node) {
    if(!node)return 0;
    if(!node.left) return 1 + dep(node.right);
    if(!node.right) return 1 + dep(node.left);
    return 1 + Math.min(dep(node.left), dep(node.right));
}