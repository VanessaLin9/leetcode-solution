// 計算連續最大 & 最小和

function maxSum(arr, w){
  if(arr.length<w) return null;
  let result = -Infinity;
  
  for(let i=0; i<=arr.length-w; i++){
    let temp = 0
    for(let j=i; j<i+w; j++){
      temp += arr[j]
    }
   result = temp>result?temp: result;
  }
  return result
}

function minSum(arr, w){
  if(arr.length<w) return null;
  let result = Infinity;
  
  for(let i=0; i<=arr.length-w; i++){
    let temp = 0;
    for(let j=i; j<i+w; j++){
      temp += arr[j]
    }
   result = temp<result?temp: result;
  }
  return result
}

console.log(maxSum([2, 7, 3, 0, 6, 1, -5, -12, -11], 3)) //12
console.log(minSum([2, 7, 3, 0, 6, 1, -5, -12, -11], 3)) //-28