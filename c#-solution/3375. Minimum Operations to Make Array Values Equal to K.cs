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
// TC: O(n log n);
// SC: O(n);

// Linq + distinct solution 
public class Solution {
    public int MinOperations(int[] nums, int k) {
        if(nums.Any(x => x<k)) return -1;
        var result = nums.Where(x => x > k).Distinct().Count();
        return result;
    }
}
// TC: O(n);
// SC: O(n);