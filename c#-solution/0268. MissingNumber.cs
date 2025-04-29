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
// TC: O(n^2)
// SC: O(1)

// hashset
public class Solution {
    public int MissingNumber(int[] nums) {
        var set = new HashSet<int>(nums);
        for(int i=0; i<nums.Length; i++){
            if(!set.Contains(i)) return i;
        }
        return nums.Length ;
    }
}
// TC: O(n)
// SC: O(n)

// math
public class Solution {
    public int MissingNumber(int[] nums) {
        int sum = nums.Length;
        int curr = 0;
        for(int i=0; i<nums.Length; i++){
            curr += nums[i];
            sum += i;
        }
        return sum - curr;
    }
}
// TC: O(n)
// SC: O(1)