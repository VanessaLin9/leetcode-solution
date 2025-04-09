// 0704. Binary Search
// https://leetcode.com/problems/binary-search/
// Tag: C#, Array, Binary Search, Easy

public class Solution {
    public int Search(int[] nums, int target) {
        int min = 0;
        int max = nums.Length -1;
        while(max >= min)
        {
            int mid = (max+min)/2;
            if(nums[mid] == target)
            {
                return mid;
            } else if(nums[mid] > target)
            {
                max = mid -1;
            } else 
            {
                min = mid +1;
            }
        }
        return -1;
    }
}