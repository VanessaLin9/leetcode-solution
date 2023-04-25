/**
 * @param {Function} fn
 * @return {Array}
 */
Array.prototype.groupBy = function(fn) {
    const ans = {}
    for(let n of this){
        const key = fn(n)
        if(!ans[key]) ans[key] = [];
        ans[key].push(n)
    }
    return ans
};

/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */