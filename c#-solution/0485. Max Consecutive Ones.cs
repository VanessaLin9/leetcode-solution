// 485. Max Consecutive Ones
// https://leetcode.com/problems/max-consecutive-ones/
// Tag: C#, Array, Binary Search, Easy

public class Solution {
    public int FindMaxConsecutiveOnes(int[] nums) {
        int ans = 0;
        int temp = 0;
        for(int i =0; i<nums.Length; i++){
            if(nums[i] == 1){
                temp ++;
                ans = Math.Max(ans, temp);
            } else {
                temp = 0;
            }
        }
        return ans;
    }
}

// split solution
public class Solution {
    public int FindMaxConsecutiveOnes(int[] nums) {
        string s = String.Join("", nums);
        string [] strs = s.Split('0');
        return (from str in strs select str.Length).Max();
    }
}