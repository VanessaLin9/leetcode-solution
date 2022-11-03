function mergeSort(arr){
  if(arr.length === 1) return arr;

  let middle = Math.floor(arr.length/2)
  let left = arr.slice(0, middle)
  let right = arr.slice(middle)
  return merge(mergeSort(left), mergeSort(right))
}

function merge(a1, a2){  //合併
  let result =[]
  let i =0;
  let j =0;
  while( i<a1.length && j<a2.length ){
    if(a1[i] < a2[j]){
      result.push(a1[i])
      i++
    } else {
      result.push(a2[j])
      j++
    }
  }
  while(i<a1.length){
    result.push(a1[i])
    i++
  }
  while(j<a2.length){
    result.push(a2[j])
    j++
  }
  return result
}

// T: O(n log n)
// S: O(n)

// console.log(merge([5, 9, 10], [8, 81, 44, 66, 36]))
console.log(mergeSort([9, 4, 5, 1, 7, 38, 0, 2, 3, 8]))