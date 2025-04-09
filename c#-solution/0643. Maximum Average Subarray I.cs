// 0643. Maximum Average Subarray I
// https://leetcode.com/problems/maximum-average-subarray-i/
// Tag: C#, Array, Sliding Window, Easy

public class Solution {
    public double FindMaxAverage(int[] nums, int k) {
        double sum = 0;
        for(int i =0; i<k; i++)
        {
            sum += nums[i];
        }
        double avg = sum/k;
        if(k<nums.Length){
            for(int j=k; j<nums.Length; j++)
            {
                sum = sum + nums[j] - nums[j-k];
                avg = Math.Max(avg, sum/k);
            }
        }
        return avg;
    }
}