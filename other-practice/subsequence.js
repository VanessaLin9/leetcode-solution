// two pointer

function subsequence(str1, str2) {
  if(str1.length === 0) return true
  let strS = str1.length > str2.length? str2:str1;
  let strL = strS===str2? str1: str2
  let pointS = 0;
  let pointL = 0;

  while(pointS <strS.length && pointL <strL.length ){
    if (strS[pointS] === strL[pointL]) {
      pointS++;
    } 
    pointL++;
  }
  return pointS === strS.length
}

console.log(subsequence("book", "brooklyn"))
// console.log(subsequence("abc", "bac"))