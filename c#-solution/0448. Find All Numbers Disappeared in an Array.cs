namespace DefaultNamespace;
// Counting sort solution
public class Solution {
    public IList<int> FindDisappearedNumbers(int[] nums) {
        int n = nums.Length;
        var list = new int[n+1];
        for(int i=0; i<nums.Length; i++){
            list[nums[i]] ++;
        }
      
        var ans = new List<int>();
        for(int j=1; j<list.Length; j++){
            if(list[j] == 0) ans.Add(j);
        }
        return ans;
    }
}
// time complexity: O(n)
// space complexity: O(n)

// HashSet solution
public class Solution {
    public IList<int> FindDisappearedNumbers(int[] nums) {
        var set = new HashSet<int>(nums);
        var ans = new List<int>();
        for(int i=1; i<=nums.Length; i++){
            if(!set.Contains(i)) ans.Add(i);
        }
        return ans;
    }
}
// time complexity: O(n)
// space complexity: O(n)

// In-place solution
public class Solution {
    public IList<int> FindDisappearedNumbers(int[] nums) {
        return Enumerable.Range(1, nums.Length).Except(nums).ToList();
    }
}