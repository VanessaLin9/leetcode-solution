// Given two n x n binary matrices mat and target, return true if it is possible to make mat equal to target by rotating mat in 90-degree increments, or false otherwise.

/**
 * @param {number[][]} mat
 * @param {number[][]} target
 * @return {boolean}
 */

// burst force
var findRotation = function(mat, target) {
  if(checkEqual(mat, target)) return true;
  let arr = rotation(mat)
  for(let i=0; i<3 ; i++){
    if(checkEqual(arr, target)){
      return true;
    } else {
      arr = rotation(arr)
    }
  }
  return false;
};

function rotation(arr){
  let temp = []
  let n = arr.length

  for(let i=0; i<n; i++){
    temp.push([])
    for(let j=0; j<arr[i].length; j++){
     temp[i].push(arr[j][n-1-i])
    }
  }
  return temp

}

function checkEqual(arr1, arr2){
  if(arr1.length !== arr2.length) return false
  for(let i=0; i<arr1.length; i++){
    if(arr1[i].join('') !== arr2[i].join('')) return false;
  }
  return true;
}

console.log(findRotation([[0, 1], [1, 0]], [[1, 0], [0, 1]]))

//  i, j  =>  j  n-1-i
// [0, 0] => [0, 1] 
// [0, 1] => [1, 1] 
// [1, 0] => [0, 0] 
// [1, 1] => [1, 0] 