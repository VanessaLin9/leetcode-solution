/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */

// brute force
// 迴圈練習(試著先寫固定三層)
// var combinationSum = function(candidates, target) {
//   const result = []
//     for(let i=0; i<candidates.length; i++){
//       let sum = candidates[i]
//       if(sum >target) continue;
//       if(sum === target){
//         result.push([candidates[i]])
//         continue;
//       }
//       for(let j=0; j<candidates[j]; j++){
//         sum += candidates[j]
//         if(sum >target) continue;
//         if(sum === target){
//           result.push([candidates[i], candidates[j]])
//           continue;
//         } else {
//           for(let k=0; k<candidates.length; k++){
//             sum += candidates[k]
//             if(sum >target) continue;
//             if(sum === target){
//               result.push([candidates[i], candidates[j], candidates[k]])
//               continue;
//             }
//           }
//         }
//       }
//     }
//     return result
// };

// backtracking 抽象化上面迴圈

var combinationSum = function(candidates, target) {
  const result = [];
  const stack = [];

  search(0, target)
  return result;
  
  function search(start, target){
    if(target < 0) return;
    if(target === 0) return result.push(stack.slice());
    if(start === candidates.length) return;

    stack.push(candidates[start]);
    search(start, target - candidates[start]);

    stack.pop()
    search(start+1, target)
  }
};


console.log(combinationSum([2,3,6,7], 7)) //[[2,2,3],[7]]