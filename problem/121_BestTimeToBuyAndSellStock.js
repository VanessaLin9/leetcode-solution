// 121_BestTimeToBuyAndSellStock
// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
// You are given an array prices where prices[i] is the price of a given stock on the ith day.

// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

/**
 * @param {number[]} prices
 * @return {number}
 */

// two pointer
var maxProfit = function(prices) {
  let buy = 0;
  let profit = 0;
  
  for(let i=0; i<prices.length; i++){
    if(prices[i] > prices[buy]) {
      let temp = prices[i] - prices[buy];
      profit = temp>profit? temp: profit;
    } else {
      buy = i
    }
  }
  return profit
};

console.log(maxProfit([7,1,5,3,6,4]))