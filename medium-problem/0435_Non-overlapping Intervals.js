/**
 * @param {number[][]} intervals
 * @return {number}
 */
// greedy
var eraseOverlapIntervals = function(intervals) {
    intervals.sort((a, b) => a[1]-b[1])
    console.log(intervals)
    let prev = intervals[0]
    let ans = 0
    for(let i=1; i<intervals.length; i++){
        let curr = intervals[i]
        if(curr[0] < prev[1]){
            ans +=1;
            
        } else {
            prev = curr
        }
    }
    return ans
};

// TC: O(n log n)
// MC: O(1)