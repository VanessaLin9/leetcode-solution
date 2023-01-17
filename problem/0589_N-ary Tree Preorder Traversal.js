// Given the root of an n-ary tree, return the preorder traversal of its nodes' values.

// Nary-Tree input serialization is represented in their level order traversal. Each group of children is separated by the null value (See examples)

/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
var preorder = function(root) {
    const result = []
    const pre = (node) => {
        if(!node) return ;
        result.push(node.val)
        for(child of node.children){
            pre(child)
        }
    }
    pre(root);
    return result;
};