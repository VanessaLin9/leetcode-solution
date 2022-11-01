// 實作 algorithm bubbleSort
function bubbleSort(arr){
  for(let j =0; j<arr.length-1; j++){
    for(let i=arr.length-1; i>j; i--){
      if(arr[i-1]>arr[i]){
        let temp = arr[i]
        arr[i] = arr[i-1]
        arr[i-1] = temp
      }
    }
  }
  return arr
}

console.log(bubbleSort([9, 4, 5, 1, 7, 0, 2, 3, 8]))