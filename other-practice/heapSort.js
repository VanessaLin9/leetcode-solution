// 3個function構成
// 1. build max heap
// 2. max heapify
// 3. heap sort

let heapSize;
let arr = [15, 3, 17, 18, 20, 2, 1, 666]

// build max heap
function buildMaxHeap(){
  heapSize = arr.length-1;
  for(let i = Math.floor(heapSize/2); i>=0; i--){ //(1/2n)
    maxHeapify(i); // (log2^n)
  }
} 

// max heapify
function maxHeapify(i){ //重複執行一個把最大換到最上面的步驟
  let largest;
  let l = i * 2 + 1;
  let r = i * 2 + 2;
  if(l<=heapSize && arr[l] > arr[i]){
    largest = l
  } else {
    largest = i
  }
  if(r<=heapSize && arr[r] > arr[largest]){
    largest = r
  }

  if(largest !== i){    // 有換的話就要往下檢查
    let temp = arr[i]
    arr[i] = arr[largest]
    arr[largest] = temp
    maxHeapify(largest)
  }
} // (log2^n)


// heap sort
function heapSort(){
  buildMaxHeap(); //跑完會得到最大值在arr[0]
  for(let i= arr.length-1; i>=0; i--){  //(n)
    //exchange arr[0] and arr[i] 把最大的換到最後面
    let temp = arr[0]
    arr[0] = arr[i]
    arr[i] = temp
    heapSize -=1;
    maxHeapify(0)  // (log2^n)
  }
  return arr
}  

heapSort()
console.log(arr)