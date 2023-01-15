// Given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).

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

var isSymmetric = function(root) {
   if(!root) return;
   return isSame(root.left, root.right);
};

function isSame(node1, node2) {
    if(!node1 || !node2) return !node1 && !node2;
    if(node1.val !== node2.val) return false;
    return isSame(node1.left, node2.right) && isSame(node1.right, node2.left);
}