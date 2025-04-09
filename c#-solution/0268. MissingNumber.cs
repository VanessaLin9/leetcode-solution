// 0268. Missing Number
// https://leetcode.com/problems/missing-number/
// Tag: C#, Array, Math, Easy

public class Solution {
    public int MissingNumber(int[] nums) {
        Array.Sort(nums);
        for(int i=0; i<nums.Length; i++)
        {
            if(nums[i] != i) return i;
        }
        return nums.Length ;
    }
}