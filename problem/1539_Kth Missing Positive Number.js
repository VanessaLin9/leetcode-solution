// 1539. Kth Missing Positive Number
// https://leetcode.com/problems/kth-missing-positive-number/
// Tag: Array, Binary Search, Hash Table, Two Pointers, Easy


// Given an array arr of positive integers sorted in a strictly increasing order, and an integer k.
// Return the kth positive integer that is missing from this array.
/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */


// set
var findKthPositive = function(arr, k) {
    const set = new Set(arr)
    let count = 0;
    for(let i=1; i<=arr[arr.length-1]+k; i++){
        if(!set.has(i)){
            count ++
            if(count === k) return i
        }
    }
};
// TC: O(n+k)
// MC: O(n)


//burst force
var findKthPositive = function(arr, k) {
    let a = 0;
    let p = 0;
    for(let i=0; i<=(arr[arr.length-1] + k); i++){
        if(arr[p] !== i){
            if(a === k) return i
            a++
        } else {
            p++
        }
    }
    return -1
};

// TC: O(n+k)
// MC: O(1)

// 討論區看到解法，算是liner search 的一種(?GPT說的)
var findKthPositive = function(arr, k) {
    let prev = 0;
    
    for(let i = 0; i < arr.length; i++) {
        const diff = arr[i] - prev - 1; // 當前的跟上一個應該相差1，超過的話是多的差額
        if(k > diff) k -= diff;
        else return prev + k;
        prev = arr[i];
    }
    return prev + k     
};

// TC: O(n)
// MC: O(1)

// binary search

//arr[i]   1 4 5 7 11
//i+1      1 2 3 4 5  // if no number's missing, arr[i] should be i+1.
//missing  0 2 2 3 6

var findKthPositive = function(arr, k) {
    let l =0;
    let r = arr.length;
    while(r>l){
        let mid = l + Math.floor((r-l)/2)
        console.log(mid, arr[mid])
        if(arr[mid] -mid -1 <k){
            l = mid+1
        } else {
            r = mid
        }
    }
    return k + l
};

// TC: O(log n)
// MC: O(1)

var findKthPositive = function(arr, k) {
    let p = 0;
    const miss = [];
    for(let i=1; miss.length < k; i++){
        if(p<arr.length && arr[p] === i){
            p++
        } else {
            miss.push(i);
        }
    }
    return miss[k-1];
};


console.log(findKthPositive([2,3,4,7,11], 5)) //9