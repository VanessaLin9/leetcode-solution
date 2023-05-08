// Write a function that takes an unsigned integer and returns the number of '1' bits it has (also known as the Hamming weight).

/**
 * @param {number} n - a positive integer
 * @return {number}
 */

// brute force
// var hammingWeight = function(n) {
//   let nBi = n.toString(2) + ''
//   let result = 0;
//   for(let i=0; i<=32; i++){
//     if(nBi[i] === "1") result ++;
//   }
//   return result
// };
// 


// RegEx 
var hammingWeight = function(int) {
    const str = int.toString(2)
    return str === '0' ? 0 : (str.match(/1/g)).length; 
};

// replace
var hammingWeight = function(int) {
    return int.toString(2).replaceAll("0", "").length;   //也可以用replace(/0/g, '') 
};



console.log(hammingWeight(00000000000000000000000000001011)) //3