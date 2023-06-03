/**
 * @param {Array} arr
 * @return {Generator}
 */
var inorderTraversal = function*(arr) {
    for(let ele of arr){
        if(Array.isArray(ele)){
            yield*inorderTraversal(ele)
        } else {
            yield ele
        }
    }
};