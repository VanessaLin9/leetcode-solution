//sliding window + hash table

function uniqueLetterString (str) {
  let start = 0;
  let end = 0;
  let result = -Infinity;
  const hash ={};
  
  while(end < str.length){
    if(hash[str[end]]){ //利用value=0時，在if判斷式會被強制轉型成false的招式
      // 找的到時: 持續移動左窗口
      hash[str[start]] --;
      start++
    } else {
      //找不到時: 持續移動右窗口
      hash[str[end]] = 1;
      end++
      result = (end-start)>result?(end-start):result;
    }
  }
  if(result === -Infinity) console.log('cannot find unique string')
  return result
}


console.log(uniqueLetterString ('thisishowwedoit')) //6
