/**
 * @param {number[]} arr
 * @param {number[][]} mat
 * @return {number}
 */

//  AC
var firstCompleteIndex = function(arr, mat) {
    let row = mat.length
    let col = mat[0].length
    console.log(row, col)
    const hash = {}
    for(let i=0; i<row; i++){
        for(let j=0; j<col; j++){
            hash[mat[i][j]] = [i, j]
        }
    }
    const rowC = {}
    const colC = {}
    
    for(let k=0; k<arr.length; k++){
        let [currRow, currCol] = hash[arr[k]]
        if(!rowC[currRow]){
            rowC[currRow] = 0
        }
            rowC[currRow] ++;
        if(!colC[currCol]){
            colC[currCol] = 0
        }
        colC[currCol] ++;
        console.log(rowC, colC)
        if(rowC[currRow] >= col || colC[currCol] >= row){
            return k
        }
    }
};

console.log(firstCompleteIndex([1,4,5,2,6,3], [[4,3,5],[1,2,6]])) //1