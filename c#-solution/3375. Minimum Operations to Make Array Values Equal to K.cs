// Naive solution
public class Solution {
    public int MinOperations(int[] nums, int k) {
        var min = nums.Min();
        if(min < k)return -1;
        var result = nums.GroupBy(x => x)
                        .Count();
        return min == k ?result -1:result;
    }
}