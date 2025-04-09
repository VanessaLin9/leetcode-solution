// 35. Search Insert Position
// https://leetcode.com/problems/search-insert-position/
// Tag: C#, Array, Binary Search, Easy

// binary search
public class Solution
{
  public int SearchInsert(int[] nums, int target)
  {
    int L = 0;
    int R = nums.Length - 1;
    while (R >= L)
    {
      int mid = (R + L) / 2;
      if (nums[mid] == target)
      {
        return mid;
      }
      else if (nums[mid] > target)
      {
        R = mid - 1;
      }
      else
      {
        L = mid + 1;
      }
    }
    return L;
  }
}
// Time complexity: O(logn)
// Space complexity: O(1)