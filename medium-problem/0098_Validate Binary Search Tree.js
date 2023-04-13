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

// DFS
var isValidBST = function(root) {
    return valid(root, -Infinity, Infinity)
};

function valid(node, lower, upper){
    if(!node) return true;
    if((node.val>lower) && (node.val <upper)){
       return valid(node.left, lower, node.val) && valid(node.right, node.val, upper)
    } else {
        return false
    }
}

// TC: O(n)
// MC: O(n)