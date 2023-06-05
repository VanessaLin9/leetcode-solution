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
 * @return {number[][]}
 */

// bfs
var levelOrder = function(root) {
    const result = []
    const q = [root]
    while(q[0]){
        let len = q.length 
        let temp = []
        for(let i=0; i<len; i++){
            let node = q.shift()
            temp.push(node.val)
            if(node.left) q.push(node.left)
            if(node.right) q.push(node.right)
        }
        result.push(temp)
    }
    return result
};