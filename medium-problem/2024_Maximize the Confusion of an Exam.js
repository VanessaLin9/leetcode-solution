/**
 * @param {string} answerKey
 * @param {number} k
 * @return {number}
 */
var maxConsecutiveAnswers = function(arr, k) {
    let l = 0;
    let r = 0;
    let maxcount = 0;
    let numT = 0;
    let numF = 0;

    while(r <arr.length){
        arr[r] === "T"?numT++ : numF++;
        if(numT <= k || numF <= k){
            maxcount = Math.max(maxcount, numT + numF)
        }
        while(numT > k && numF > k){
            arr[l] ==="T"? numT--: numF--;
            l++
        }
        r++
    }

    return maxcount
};