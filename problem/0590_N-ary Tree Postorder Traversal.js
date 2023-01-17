// Given the root of an n-ary tree, return the postorder traversal of its nodes' values.

// Nary-Tree input serialization is represented in their level order traversal. Each group of children is separated by the null value (See examples)

/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */

// 題組 with 589 一起做
var postorder = function(root) {
    const res = [];
    traverse(root);
    return res;
    
    function traverse(node) {
        if (!node) return;
        for(child of node.children) {
            traverse(child);
        }
        res.push(node.val);
    } 
};