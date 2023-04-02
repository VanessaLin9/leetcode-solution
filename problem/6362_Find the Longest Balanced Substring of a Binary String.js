/**
 * @param {string} s
 * @return {number}
 */
// var findTheLongestBalancedSubstring = function(s) {
//     if(s.length === 1) return 0;
//     let sum = 0;
//     let temp = 0;
//     let flag = false;
//     for(let i=0; i<s.length; i++){
//         let l = i*2+1;
//         let r = i*2+2;
//        if(s[i] === '0'){
//            temp +=1
//            if(s[l]==='1'){
//                temp +=1
//                flag = true
//            }
//            if(s[r]==='1'){
//                temp +=1
//                flag = true
//            }
//        } else {
//            temp = 0
//        }
//         sum = Math.max(temp, sum)
//     }
//     return flag?sum:0
// };

// AC 參考排行榜大神的解法
var findTheLongestBalancedSubstring = function(s) {
  let ans = 0;
  for(let i=0; i<s.length-1; i++){
    if(s[i]==='0' && s[i+1] ==='1'){
      let x = i;
      let len1 = 1;
      while(x>0 && s[x-1] === '0'){
        x--;
        len1++;
      }
      let y = i+1;
      let len2 = 1;
      while(y+1<s.length && s[y+1] === '1'){
        y++;
        len2 ++;
      }
      ans = Math.max(ans, Math.min(len1, len2)*2)
    }
  }
  return ans
}

console.log(findTheLongestBalancedSubstring("01000111")) //6
console.log(findTheLongestBalancedSubstring("00111")) //4
console.log(findTheLongestBalancedSubstring("001011")) //2