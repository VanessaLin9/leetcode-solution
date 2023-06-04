/**
 * @param {number} n
 * @param {number[][]} queries
 * @return {number}
 */

// burst force -- LTE
var matrixSumQueries = function(n, queries) {
    const arr = new Array(n).fill(0).map(x => x=new Array(n).fill(0))
    let sum = 0;
    let i = 0;
    while(i<queries.length){
        const [type, idx, val] = queries[i]
        if(type === 0){
            for(let i=0; i<n; i++){
                sum -= arr[idx][i]
                arr[idx][i] = val
                sum += val
            }
        } else {
            for(let i=0; i<n; i++){
                sum -= arr[i][idx]
                arr[i][idx] = val
                sum += val
            }
        }
        i++
    }
    return sum 
};