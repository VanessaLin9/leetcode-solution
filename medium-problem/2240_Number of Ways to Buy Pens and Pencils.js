// You are given an integer total indicating the amount of money you have. You are also given two integers cost1 and cost2 indicating the price of a pen and pencil respectively. You can spend part or all of your money to buy multiple quantities (or none) of each kind of writing utensil.

// Return the number of distinct ways you can buy some number of pens and pencils.

/**
 * @param {number} total
 * @param {number} cost1
 * @param {number} cost2
 * @return {number}
 */

// brute force
var waysToBuyPensPencils = function(total, cost1, cost2) {
    let result = 0
    while(total >= 0){
        result += Math.floor(total/cost2) + 1
        total -= cost1
    }
    return result
};