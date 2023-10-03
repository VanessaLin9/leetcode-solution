// 
public class Solution
{
  public int Fib(int n)
  {
    if (n <= 1) return n;
    int[] nums = new int[n + 1];
    nums[1] = 1;
    for (int i = 2; i <= n; i++)
    {
      nums[i] = nums[i - 1] + nums[i - 2];
    }
    return nums[n];
  }
}
// TC: O(n)
// SC: O(n)
