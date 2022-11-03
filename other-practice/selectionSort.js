// 我自己先寫的
// function selectionSort(nums){
//   const result = []
//   while (nums.length >1){
//     let a = nums.indexOf(selection(nums))
//     result.push(nums.splice(a, 1)[0])
//   }
//   return result
// }

// function selection(arr){ //每次找到最小的丟到第一格
//   let min = arr[0]
//   for(let i=1; i<arr.length; i++){
//     min = arr[i]<min? arr[i]: min;
//   }
//   return min
// }

// 課裡教的
function selectionSort(nums){
  
  for(let i=0; i<=nums.length-2; i++){
    let minidx = i;
    for(let j=i; j<nums.length; j++){
      if(nums[j]<nums[minidx]) minidx = j
    }
    // swap 
    
    if(i !== minidx){
      let temp = nums[i];
      nums[i] = nums[minidx]
      nums[minidx] = temp
    }
  }
  return nums
}

console.log(selectionSort([9, 4, 5, 1, 7, 0, 2, 3, 8]))