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

// dfs
var longestUnivaluePath = function(root) {
    if(!root)return 0;
    let dia = 0;
    function dfs(par, curr){
        if(!curr) return 0;
        let left = dfs(curr.val, curr.left);
        let right = dfs(curr.val, curr.right);
        dia = Math.max(dia, left + right)
        return curr.val === par?Math.max(left, right)+1 : 0
    }
    dfs(root.val, root)
    return dia
};