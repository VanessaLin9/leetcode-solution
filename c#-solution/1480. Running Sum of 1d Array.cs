// for
public class Solution {
    public int[] RunningSum(int[] nums) {
        for(int i = 1; i < nums.Length; i++)
        {
            result[i] = result[i-1] + nums[i];
        }
        return result;
    }
}
// Time Complexity: O(n)
// Space Complexity: O(1)

// linq solution
public class Solution {
    public int[] RunningSum(int[] nums) {
        int c =0;
        return nums.Select(n => c += n).ToArray();
    }
}
// Time Complexity: O(n)
// Space Complexity: O(1)
