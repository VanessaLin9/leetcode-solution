public class Solution
{
  public int ArrayPairSum(int[] nums)
  {
    int sum = 0;
    Array.Sort(nums);
    for (int i = 0; i < nums.Length; i += 2)
    {
      sum += nums[i];
    }
    return sum;
  }
}