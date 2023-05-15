/**
 * @param {string} s
 * @return {string}
 */

// brute force
var longestPalindrome = function(s) {
   let ll =0;
   let rr =0;

   for(let i=0; i<s.length; i++){
       for(let j of [i, i+1]){
           for(let l = i, r = j; s[l] && s[l] === s[r]; l--, r++){
               [ll, rr] = (r-l+1) > (rr-ll + 1)? [l, r]: [ll, rr]
           }
       }
   } 
   return s.substring(ll, rr+1)
};
// TC: O(n^2)
// SC: O(n)

// Manacher's Algorithm
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    if(!s || !s.length) return '';
    let str = '#' + s.split('').join('#') + '#';
    let C = 0, max = 0, // max = C + P[i]
        P = new Array(str.length).fill(0);
    
    for(let i = 0; i < str.length; i++) {
        if(i > max) {
            P[i] = 1;
        } else {
            let j = (C - i + C) < 0 ? 0 : (C - i + C);
            P[i] = Math.min(P[j], max - i < 0 ? 1 : max - i);
        }
        let lo = i - P[i], hi = i + P[i];
        while(lo >= 0 && hi < str.length && str[lo] === str[hi]) {
            lo --, hi ++;
        }
        P[i] = hi - i;
        
        if(i + P[i] > max) {
            max = i + P[i];
            C = i;
        }
        
    }
    let len = Math.max(...P);
    let index = P.indexOf(len);
    let res = str.substring(index - len + 1, index + len);
    return res.split('#').join('');
};

// TC: O(n)
// SC: O(n)

// dynamic programming