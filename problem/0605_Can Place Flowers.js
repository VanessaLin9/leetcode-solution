// You have a long flowerbed in which some of the plots are planted, and some are not. However, flowers cannot be planted in adjacent plots.

// Given an integer array flowerbed containing 0's and 1's, where 0 means empty and 1 means not empty, and an integer n, return if n new flowers can be planted in the flowerbed without violating the no-adjacent-flowers rule.

/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */

// [brute force] -AC 58ms
var canPlaceFlowers = function(flowerbed, n) {
    for(let i=0; i<flowerbed.length; i++){
        if(flowerbed[i] === 0){
            if(flowerbed[i-1] === 0 || (i-1)<0){
                if(flowerbed[i+1] === 0 || (i+1) >= flowerbed.length ){
                    flowerbed[i] = 1;
                    n -= 1;
                }
            }
        }
    }
    return n <= 0
};
// TC: n
// MC: 1