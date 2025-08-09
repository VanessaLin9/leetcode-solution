// 494. Target Sum
// https://leetcode.com/problems/target-sum/
// Tag: C#, Array, Dynamic Programming, Medium


// dp
public class Solution {
    public int FindTargetSumWays(int[] nums, int target) {
        var sums = new Dictionary<int, int>();
        sums[0] = 1;

        foreach(var num in nums) {
            var next = new Dictionary<int, int>();

            foreach(var kv in sums){
                int sum = kv.Key;
                int count = kv.Value;

                int plus = sum + num;
                int minus = sum - num;

                if(!next.ContainsKey(plus)) next[plus] = 0;
                next[plus] += count;

                if(!next.ContainsKey(minus)) next[minus] = 0;
                next[minus] += count;
            }

            sums = next;
        }

        return sums.ContainsKey(target) ? sums[target] : 0;
    }
}

// subset sum problem
public class Solution {
    public int FindTargetSumWays(int[] nums, int target) {
        int total = 0;
        foreach(var x in nums) total += x;

        int need = target + total;
        if(need <0 || (need & 1) == 1) return 0;
        int s = need/2;

        var dp = new long[s+1];
        dp[0] =1;
        
        foreach(var num in nums){
            for(int i = s; i>= num; i--){
                dp[i] += dp[i - num];
            }
        }

        return (int)dp[s];
    }
}