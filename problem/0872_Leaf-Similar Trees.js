// Consider all the leaves of a binary tree, from left to right order, the values of those leaves form a leaf value sequence.

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var leafSimilar = function(root1, root2) {
    let result1 = leafVal(root1).join(',')
    let result2 = leafVal(root2).join(',')
    return result1 === result2
};

function  leafVal(node) {
    const result = [];
    const leaf = (node) =>{
        if(!node) return;
        if(!node.left && !node.right){
            result.push(node.val)
        }
        leaf(node.left);
        leaf(node.right);
    }
    leaf(node)
    console.log(result)
    return result
}

