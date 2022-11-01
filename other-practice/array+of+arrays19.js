let arrs = [[[["a", [["b", ["c"]], ["d"]]], [["e"]], [[["f", "g", "h"]]]]]];

// 拆解一個很複雜的arr，把裡面的直都拿出放到一個一維的array裡面
// Array.isArray() 內建函式，判斷是否為array


function collector(arr) {
  const result =[]
  clean(arr) //保持pure function

  function clean(arr2){
    for(let i=0; i<arr2.length; i++){
      if(Array.isArray(arr2[i])){
        clean(arr2[i])
      } else {
        result.push(arr2[i])
      }
    }
  }
  return result
}

console.log(collector(arrs));
