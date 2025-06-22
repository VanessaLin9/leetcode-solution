// 11 Container With Most Water
// https://leetcode.com/problems/container-with-most-water/
// Tag: Array, Two Pointers, Medium


/**
 * @param {number[]} height
 * @return {number}
 */

// two pointer
var maxArea = function(height) {
    let ans = 0
    let l =0 ;
    let r = height.length -1;
    while(r>l){
        ans = Math.max(ans, calculate(l, r))
       if(height[r] > height[l]){
           l++
       } else if(height[r] < height[l]){
           r--
       } else {
           l++;
           r--;
       }
    }
    return ans

  function calculate(l, r){
    let width = r - l;
    let hei = Math.min(height[l], height[r])
    return width * hei
  }
};

console.log(maxArea([1,8,6,2,5,4,8,3,7])) //49