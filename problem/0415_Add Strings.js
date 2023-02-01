// Given two non-negative integers, num1 and num2 represented as string, return the sum of num1 and num2 as a string.

// You must solve the problem without using any built-in library for handling large integers (such as BigInteger). You must also not convert the inputs to integers directly.
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
    let log = num1.length > num2.length? num1: num2;
    let short = log === num1? num2:num1;
    log = log.split('').reverse().map(parseFloat)
    short = short.split('').reverse().map(parseFloat)

    let next = 0;
    let add;

     for(let i=0; i<log.length; i++){
      
      if(!short[i]){
        add = log[i]? log[i]:0;
      } else {
        add = log[i] + short[i]
      }
      log[i] = add + next;
      if(log[i]<10){
        next = 0;
      } else {
        log[i] -= 10;
        next = 1;
      }
    }
    if(next !== 0){
      log.push(1)
    }
    
    let result = log.reverse().join('')
    return result
};

// console.log(addStrings("584", "18")) //602
console.log(addStrings("2498002655", "5186493004848")) //"5188991007503"
console.log(addStrings("1", "9"))