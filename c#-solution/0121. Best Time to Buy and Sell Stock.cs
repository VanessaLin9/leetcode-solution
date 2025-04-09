// 0121. Best Time to Buy and Sell Stock
// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
// Tag: C#, Array, Dynamic Programming, Easy

public class Solution
{
  public int MaxProfit(int[] prices)
  {
    int buy = 0;
    int pofit = 0;
    for (int sell = 0; sell < prices.Length; sell++)
    {
      if (prices[sell] <= prices[buy])
      {
        buy = sell;
      }
      else if ((prices[sell] - prices[buy]) > pofit)
      {
        pofit = (prices[sell] - prices[buy]);
      }
    }
    return pofit;
  }
}