/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function(node) {
    const map = {}
    return traverse(node)

    function traverse(node){
        if(!node) return node;
        if(!map[node.val]){
            map[node.val] = new Node(node.val);
            map[node.val].neighbors = node.neighbors.map(x =>traverse(x))
        }
        return map[node.val]
    }
};