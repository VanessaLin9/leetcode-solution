// 0169. Majority Element
// https://leetcode.com/problems/majority-element/description/
// Tag: C#, Array, Bit Manipulation, Easy, LINQ


public class Solution {
    public int MajorityElement(int[] nums) {
        Array.Sort(nums);
        int leng = nums.Length/2;
        return nums[leng];
    }
}
// TC: O(n log n)
// MC: O(1)

// LINQ
public class Solution {
    public int MajorityElement(int[] nums) {
        return nums
        .GroupBy(x => x)
        .OrderByDescending(x => x.Count())
        .First()
        .Key;
    }
}
// TC: O(n)
// MC: O(n)