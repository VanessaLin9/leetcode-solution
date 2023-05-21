/**
 * @param {string} s
 * @return {string}
 */
var makeSmallestPalindrome = function(s) {
    let arr = s.split('')
    let l, r;
    if(arr.length %2 === 1){
        l = Math.floor(arr.length/2)-1;
        r = l+2;
    } else{
        r = Math.floor(arr.length/2);
        l = r-1;
    }
    while(r<arr.length){
        if(arr[r] !== arr[l]){
            if(arr[r].charCodeAt()>arr[l].charCodeAt()){
                arr[r] = arr[l]
            } else {
                arr[l] = arr[r]
            }
        }
        r++;
        l--;
    }
    return arr.join('')
};