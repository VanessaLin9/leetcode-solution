/**
 * @param {number} rowsCount
 * @param {number} colsCount
 * @return {Array<Array<number>>}
 */

// 討論區參考
Array.prototype.snail = function(rowsCount, colsCount) {
    if(this.length !==  rowsCount * colsCount) return [];
    let result = Array(rowsCount).fill([]).map(() => []);
    for(let j = 0; j < this.length; j++){
        const i = Math.floor(j / rowsCount);
        if(i % 2 === 0){
            result[j % rowsCount][i] = this[j];
        }else{
            result[rowsCount - j % rowsCount - 1][i] = this[j];
        }
    }
    return result;
}

// 自己寫的
Array.prototype.snail = function(rowsCount, colsCount) {
    if(this.length !== rowsCount*colsCount) return []
    const ans = new Array(rowsCount).fill([]).map(()=> [])
    let p =0;
    for(let col=0; col<colsCount; col++){
        if(col%2 === 0){
            for(let row=0; row<rowsCount; row++){
                ans[row][col] = this[p]
                p++
            }
        } else {
            for(let row=rowsCount-1; row >=0; row--){
                ans[row][col] = this[p]
                p++
            }
        }
    }

    return ans
}

/**
 * const arr = [1,2,3,4];
 * arr.snail(1,4); // [[1,2,3,4]]
 */