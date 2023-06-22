/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array[]}
 */

// slice
var chunk = function(arr, size) {
    const result = []
    let point = size
    let start = 0;
    while(point < arr.length){
        let temp = arr.slice(start, point)
        result.push(temp)
        start += size;
        point += size;
    }
    if(start <= arr.length-1){
        result.push(arr.slice(start))
    }
    return result
};
//自己改寫recursion
var chunk = function(arr, size) {
    if(arr.length === 0) return []
    if(arr.length <= size) return [arr]
    return [arr.splice(0, size)].concat([...chunk(arr, size)])
};


//  可以少用一個Pointer 縮寫一下
var chunk = function(arr, size) {
    const result = []
    let idx = 0
    while(idx < arr.length){
        result.push(arr.slice(idx, idx + size))
        idx += size
    }
    return result
};