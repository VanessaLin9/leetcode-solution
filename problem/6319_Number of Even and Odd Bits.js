// You are given a positive integer n.

// Let even denote the number of even indices in the binary representation of n (0-indexed) with value 1.

// Let odd denote the number of odd indices in the binary representation of n (0-indexed) with value 1.

// Return an integer array answer where answer = [even, odd].

/**
 * @param {number} n
 * @return {number[]}
 */
//  -AC
var evenOddBit = function(n) {
    let b = n.toString(2).split('').reverse()
    // console.log(b)
    let result = [0, 0]
    for(let i=0; i<b.length; i++){
      // console.log(i)
        if(b[i] === "1"){
          // console.log(b.length)
            if(i%2 === 0){
                result[0] ++
            } else {
                result[1] ++
            }
        }
    }
    return result
  }

console.log(evenOddBit(17)) //[2, 0]
 console.log(evenOddBit(2)) //[0, 1]