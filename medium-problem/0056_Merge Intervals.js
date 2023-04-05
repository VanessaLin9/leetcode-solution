// Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */

var merge = function(intervals) {
  if(intervals.length < 2) return intervals; 
  intervals.sort((a,b) => a[0] - b[0]) //Arr have smaller element come first
  for(let i = 1; i < intervals.length; i ++){
    curr = intervals[i];
    prev = intervals[i-1];
    if(curr[0] <= prev[1]){
      intervals[i] = [Math.min(prev[0],curr[0]), Math.max(prev[1],curr[1])]
      intervals.splice(i-1,1);
      i--;  // After merge, the arr become shorter
    }
  }
  return intervals
};

console.log(merge([[2,3],[2,2],[3,3],[1,3],[5,7],[2,2],[4,6]])) //[[1,3],[4,7]]