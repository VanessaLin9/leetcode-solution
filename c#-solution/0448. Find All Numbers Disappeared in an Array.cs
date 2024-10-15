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

//-----------------------------------------------------------------------------------------------
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

//-----------------------------------------------------------------------------------------------
// In-place solution
public class Solution {
    public IList<int> FindDisappearedNumbers(int[] nums) {
        return Enumerable.Range(1, nums.Length).Except(nums).ToList();
    }
}
//-----------------------------------------------------------------------------------------------
// SortedSet solution
public class Solution {
    public IList<int> FindDisappearedNumbers(int[] nums) {
        // 創建 SortedSet 將輸入的數字去重並排序
        var set = new SortedSet<int>(nums);
        Console.WriteLine("Set contents: " + string.Join(",", set));
        
        var ans = new List<int>();
        int p = 1;

        // 使用 foreach 遍歷 set 中的數字
        foreach(var i in set) {
            // 當前的 p 和 set 中的數字 i 不匹配，則 p 是缺失的數字
            while(p < i) {
                ans.Add(p);
                p++;
            }
            p++;  // 當 p == i，移到下一個數字
        }

        // 如果還有數字沒遍歷到，將它們加到結果中
        while(p <= nums.Length) {
            ans.Add(p);
            p++;
        }
        return ans;
    }
}
// time complexity: O(nlogn)
// space complexity: O(n)