// 136. Single Number
// https://leetcode.com/problems/single-number/
// Tag: C#, Array, Bit Manipulation, Easy

// bitwise
public class Solution {
    public int SingleNumber(int[] nums) {
        var result = 0;
        for(int i=0; i<nums.Length; i++){
            result ^= nums[i];
        }
        return result;
    }
}
// TC: O(n)
// MC: O(1)

// List
public class Solution
{
  public int SingleNumber(int[] nums)
  {
    List<int> lst = new List<int>();
    for (int i = 0; i < nums.Count(); i++)
    {
      if (lst.Contains(nums[i])) lst.Remove(nums[i]);
      else lst.Add(nums[i]);
    }
    return lst[0];
  }
}

// TC: O(n)
// MC: O(n)