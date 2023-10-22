public class Solution
{
  public bool ContainsDuplicate(int[] nums)
  {
    HashSet<int> set = new HashSet<int>(nums);
    return nums.Length != set.Count;
  }
}
// TC: O(n)
// SC: O(n)