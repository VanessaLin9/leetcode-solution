// You are given an array of non-overlapping intervals intervals where intervals[i] = [starti, endi] represent the start and the end of the ith interval and intervals is sorted in ascending order by starti. You are also given an interval newInterval = [start, end] that represents the start and end of another interval.

// Insert newInterval into intervals such that intervals is still sorted in ascending order by starti and intervals still does not have any overlapping intervals (merge overlapping intervals if necessary).

// Return intervals after the insertion.

/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */

// [merge intervals]
var insert = function(intervals, newInterval) {
    let [start, end] = newInterval
    const left = []
    const right = []
    for(let interval of intervals) {
        const [first, lest] = interval
        if(lest < start) {
            left.push(interval)
        } else if(first > end ) {
            right.push(interval)
        } else {
            start = Math.min(first, start)
            end = Math.max(lest, end)
        }
    }
    return [...left, [start, end], ...right]
};

// TC: n
// MC: n