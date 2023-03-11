// Given an array of non-negative integers arr, you are initially positioned at start index of the array. When you are at index i, you can jump to i + arr[i] or i - arr[i], check if you can reach to any index with value 0.

// Notice that you can not jump outside of the array at any time.

/**
 * @param {number[]} arr
 * @param {number} start
 * @return {boolean}
 */

//BFS
// var canReach = (arr, start) => {
//   const queue = [start];
//   console.log(queue)
//   for (let len = 0, max = arr.length; len < queue.length; ++len) {
//     const idx = queue[len];
//     if (arr[idx] === -1) continue;
//     if (arr[idx] === 0) return true;
//     idx + arr[idx] < max && queue.push(idx + arr[idx]);
//     idx - arr[idx] >= 0 && queue.push(idx - arr[idx]);
//     arr[idx] = -1;
//   }
//   return false;
// };
// TC:n MC:n

//DFS
var canReach = (arr, start) => {
  const val = arr[start];
  if (val === 0) return true;
  if (val === -1) return false;
  arr[start] = -1;
  return (start - val >= 0 && canReach(arr, start - val)) || (start + val < arr.length && canReach(arr, start + val));
};
// TC:n MC:n


console.log(canReach([4,2,3,0,3,1,2], 5)) //true