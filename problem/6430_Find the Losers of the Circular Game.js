/**
 * @param {number} n
 * @param {number} k
 * @return {number[]}
 */
var circularGameLosers = function(n, k) {
    const map = new Map();
    const ans = [];
    let receive = 1;
    for(let i=0; i<n; i++){
        let step = i*k
        receive =  (receive + step) % n === 0?n : (receive + step)%n
        if(!map.has(receive)){
            map.set(receive, true)
        } else {
            break
        }
    }
    console.log(map)
    for(let j=1; j<=n; j++){
        if(!map.has(j)){
            ans.push(j)
        }
    }
    return ans
};

console.log(circularGameLosers(5, 3)) //[2, 3]
console.log(circularGameLosers(1, 1)) //[]