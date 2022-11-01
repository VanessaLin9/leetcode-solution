// 實作 algorithm insertionSort
function insertionSort(arr){
  for(let i=0; i<arr.length; i++){
    let key = arr[i]
    let j =i-1
    while(j>=0 && arr[j]>key){
      arr[j+1] = arr[j]
      j -=1
    }
    arr[j+1] = key
  }
  return arr
}


console.log(insertionSort([9, 4, 5, 1, 7, 0, 2, 3, 8]))