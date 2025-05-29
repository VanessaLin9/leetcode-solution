// 560. Subarray Sum Equals K
// https://leetcode.com/problems/subarray-sum-equals-k/
// Tag: C#, Array, Hash Table, Prefix Sum, Medium


// brute force approach
public class Solution {
    public int SubarraySum(int[] nums, int k) {
        var result =0;
        for(int i=0; i<nums.Length; i++){
            var sum = 0;
            for(int j=i; j<nums.Length; j++){
                sum += nums[j];
                if(sum == k) result ++;
            }
        }

        return result;
    }
}
// TC: O(n^2)
// SC: O(1)


// prefix sum + hash table approach
public class Solution {
    public int SubarraySum(int[] nums, int k) {
        var result = 0;
        var prefixSum = new Dictionary<int, int>();
        prefixSum[0] = 1; // Initialize with sum 0

        var currentSum = 0;
        for (int i = 0; i < nums.Length; i++) {
            currentSum += nums[i];
            if (prefixSum.ContainsKey(currentSum - k)) {
                result += prefixSum[currentSum - k];
            }
            if (prefixSum.ContainsKey(currentSum)) {
                prefixSum[currentSum]++;
            } else {
                prefixSum[currentSum] = 1;
            }
        }

        return result;
    }
}
// TC: O(n)
// SC: O(n)