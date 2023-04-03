/**
 * @param {string} s
 * @return {number}
 */

// sliding window
var lengthOfLongestSubstring = function (s) {
    let set = new Set();
    let left = 0;
    let maxSize = 0;

    if (s.length === 0) return 0;
    if (s.length === 1) return 1;

    for (let i = 0; i < s.length; i++) {

        while (set.has(s[i])) {
            set.delete(s[left])
            left++;
        }
        set.add(s[i]);
        maxSize = Math.max(maxSize, i - left + 1) //i-left+1 可以直接用set.size 計算
    }
    return maxSize;
}

// TC: n
// MC: n

// 自己寫的比較差的
var lengthOfLongestSubstring = function(s) {
    let set = new Set()
    let ans = 0;
    for(let i=0; i<s.length; i++){
        set.add(s[i])
        for(let j=i+1; j<s.length; j++){
            if(set.has(s[j])) {
                ans = Math.max(ans, set.size)
                set.clear() //清空set的語法
                break;
            }
            set.add(s[j])
        }
        ans = Math.max(ans, set.size)
    }
    return ans
};
// TC: n^2
// MC: n
// -----------------------------------------------

console.log(lengthOfLongestSubstring("abcabcbb")) // 3