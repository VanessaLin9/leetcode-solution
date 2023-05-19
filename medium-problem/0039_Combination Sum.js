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
    // console.log(start, target) 全部的console在下面解釋
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

// 試圖理解所以跟著一步一步走一次
//     stack
// 0 7 [2]
// 0 5 [2, 2] ------------------------------------> pop-> [2] start = 1
// 0 3 [2, 2, 2] ----------------------------> pop -> [2, 2] start = 1
// 0 1 [2, 2, 2, 2] ->pop -> [2, 2, 2] start =1
// 0 -1 return
// 1 1 [2, 2, 2, 3] -> pop -> [2, 2, 2] start =2
// 1 -2 return
// 2 1 [2, 2, 2, 6] ->pop -> [2, 2, 2] start =3
// 2 -5 return
// 3 1 [2, 2, 2, 7] -> pop -> [2, 2, 2] start =4
// 3 -6 return
// 4 1 start===length return
// 1 3 [2, 2, 3] -> pop > [2, 2] start =2
// 1 0 push([2, 2, 3]) return
// 2 3 [2, 2, 6] -> pop -> [2, 2] start =3
// 2 -3 return
// 3 3 [2, 2, 7] -> pop -> [2, 2] start =4
// 3 -4 return
// 4 3 start ===length return
// 1 5 
// 1 2
// 1 -1
// 2 2
// 2 -4
// 3 2
// 3 -5
// 4 2
// 2 5
// 2 -1
// 3 5
// 3 -2
// 4 5
// 1 7
// 1 4
// 1 1
// 1 -2
// 2 1
// 2 -5
// 3 1
// 3 -6
// 4 1
// 2 4
// 2 -2
// 3 4
// 3 -3
// 4 4
// 2 7
// 2 1
// 2 -5
// 3 1
// 3 -6
// 4 1
// 3 7
// 3 0
// 4 7