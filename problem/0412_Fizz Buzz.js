/**
 * @param {number} n
 * @return {string[]}
 */

// brute force
var fizzBuzz = function(n) {
    const ans = []
    for(let i=1; i<=n; i++){
        if(i%3 === 0 && i%5 === 0){
            ans.push("FizzBuzz")
        } else if(i%3 === 0){
            ans.push("Fizz")
        } else if(i%5 === 0){
            ans.push("Buzz")
        } else {
            ans.push(i+"")
        }
    }
    return ans
};
// TC: O(n)
// MC: O(n)

// map
var fizzBuzz = function(n) {
    const ans = new Array(n).fill(0)
    return ans.map((a, i) => (++i%3 === 0?"Fizz":'')+(i%5===0?"Buzz":'') || i+"")
};
// TC: O(n)
// MC: O(n)