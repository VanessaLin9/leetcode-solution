// 0026. Remove Duplicates from Sorted Array
// https://leetcode.com/problems/remove-duplicates-from-sorted-array/description/
// Tag: C#, Array, Two Pointers, Easy

// two pointers
public class Solution
{
  public int RemoveDuplicates(int[] nums)
  {
    int l = 1;
    int pre = nums[0];
    for (int i = 1; i < nums.Length; i++)
    {
      if (nums[i] != pre)
      {
        nums[l] = nums[i];
        l++;
      }
      pre = nums[i];
    }
    return l;
  }
}

// Time complexity: O(n)
// Space complexity: O(1)