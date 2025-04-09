// 0746. Min Cost Climbing Stairs
// https://leetcode.com/problems/min-cost-climbing-stairs/description/
// Tag: C#, Array, Dynamic Programming, Easy, DP

public class Solution {
    public int MinCostClimbingStairs(int[] cost) {
        for(int i=cost.Length-3; i>=0; i--){
            cost[i] +=  Math.Min(cost[i+1], cost[i+2]);
        }
        return Math.Min(cost[0], cost[1]);
    }
}