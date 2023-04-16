/**
 * @param {number[][]} mat
 * @return {number[]}
 */
var rowAndMaximumOnes = function(mat) {
  const ans = [0, 0]
  let count = 0;
  let n = mat.length
  let m = mat[0].length

  for(let i=0; i<n; i++){
    let temp =0
    for(let j=0; j<m;j++){
      if(mat[i][j] === 1) temp++
      // console.log(mat[i][j] )
    }
    // console.log(temp)
    if(temp>count){
      count = temp
      ans[0] = i;
      ans[1] = temp
    }
  }

  return ans
};

console.log(rowAndMaximumOnes([[0,0],[1,1],[0,0]])) //[1, 2]