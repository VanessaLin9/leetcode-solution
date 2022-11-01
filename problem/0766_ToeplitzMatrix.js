// 766_ToeplitzMatrix
// https://leetcode.com/problems/toeplitz-matrix/
// Given an m x n matrix, return true if the matrix is Toeplitz. Otherwise, return false.

// A matrix is Toeplitz if every diagonal from top-left to bottom-right has the same elements.

/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
var isToeplitzMatrix = function(arr) {
  for(let i=0; i<arr.length-1; i++){ //檢查Y軸
    for(let j=0; j<arr[i].length-1;j++){ //檢查X軸
      if(arr[i][j] !== arr[i+1][j+1]) return false
    }
  }
  return true
};

// arr[0][0] -> arr[1][1] -> arr[2][2] 要一樣

console.log(isToeplitzMatrix([[1,2,3,4],[5,1,2,3],[9,5,1,2]])) //true
console.log(isToeplitzMatrix([[1,2],[2,2]])) //false