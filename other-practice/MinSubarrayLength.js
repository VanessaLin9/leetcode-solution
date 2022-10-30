function minSubArr(arr, sum){
  let start = 0;
  let end = 0;
  let total = 0;
  let result = Infinity;
  while( start < arr.length){
    if ( total < sum && end < arr.length){
      total += arr[end];
      end++;
    } else if (total >= sum){
      let currL = end - start;
      result = result>currL?currL:result;
      total -=arr[start];
      start++
    } else if (end >= arr.length){
      break;
    }
  }

  if(result === Infinity) {
    console.log('cannot find subarray sum up to given number')
    return -1
  } else {
    return result
  }
};

console.log(minSubArr([8, 1, 6, 15, 3, 16, 5, 7, 14, 30, 12], 70))