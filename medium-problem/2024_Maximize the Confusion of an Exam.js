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

// 自己用1004去寫的解法，TF分兩次跑
var maxConsecutiveAnswers = function(answerKey, k) {
    let countT = change(answerKey, k, "T")
    let countF = change(answerKey, k, "F")
    return Math.max(countT, countF)
};

function change(str, k, target){
    let l =0;
    for(let i=0; i<str.length; i++){
        if(str[i] === target) k--;
        if(k<0){
            if(str[l] === target) k++
            l++
        }
    }
    return str.length - l
}