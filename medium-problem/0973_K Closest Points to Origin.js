// Given an array of points where points[i] = [xi, yi] represents a point on the X-Y plane and an integer k, return the k closest points to the origin (0, 0).

// The distance between two points on the X-Y plane is the Euclidean distance (i.e., √(x1 - x2)2 + (y1 - y2)2).

// You may return the answer in any order. The answer is guaranteed to be unique (except for the order that it is in).

/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */

// 使用內建 sort
// var kClosest = function(points, k) {
//     if(k === points.length) return points;
//     return points.sort((a, b) => square(a) - square(b)).slice(0, k)
// };
// function square(point){
//     return Math.pow(Math.abs(point[0]), 2) + Math.pow(Math.abs(point[1]), 2)
// }
// TC: ~ n log n (array.sort() TC 依照環境而定)
// MC: 1 

// min heap
var kClosest = function(points, k) {
    // build min heap
    for(let i=Math.floor((points.length-1)/2); i>=0 ; i--){
        minHeapify(i)
    }
    // minHeapify
    function minHeapify(i){
        let l = i*2+1;
        let r = i*2+2;
        let min = i
        if(l <points.length && distance(points[l]) < distance(points[i])){
            min = l
        } 
        if(r <points.length  && distance(points[r]) < distance(points[min])){
            min = r
        }
        if(min !== i){
            [points[i], points[min]] = [points[min], points[i]]
            minHeapify(min)
        }
    }

    // return 
    const result = []
    for(let j=0; j<k; j++){
        let temp = points[0]
        points[0] = points.pop()
        result.push(temp)
        minHeapify(0)
    }

    // distance
    function distance(point){
        return point[0]*point[0] + point[1]*point[1]
    }

    return result
};

// TC: n log n
// MC: k

console.log(kClosest())