// 0697. Degree of an Array
// https://leetcode.com/problems/degree-of-an-array/description/
// Tag: C#, Array, HashSet, LINQ, Easy

public class Solution {
    public int FindShortestSubArray(int[] nums) {
        var list = nums.GroupBy(x => x).OrderByDescending(y => y.Count());
        int lon = list.First().Count();
        var check = new List<int>();
        foreach(var y in list){
            if(y.Count() >= lon){
                check.Add(y.Key);
            }
        }
        int result = nums.Length;
        foreach(int x in check){
            Console.WriteLine(x);
            int start = 0;
            int end = 0;
            for(int i =0; i<nums.Length; i++){
                if(nums[i] == x){
                    start = i;
                    break;
                }
            }
            for(int j=nums.Length-1; j>=0; j--){
                if(nums[j] == x){
                    end = j;
                    break;
                }
            }
            result = Math.Min(result, (end - start) +1);
        }
        return result;
    }
}
// TC: O(n log n + n^2)
// SC: O(n)

// 整理上面的用更簡潔的LINQ寫法
public class Solution {
    public int FindShortestSubArray(int[] nums) {
        var group = nums.GroupBy(x => x).OrderByDescending(y => y.Count());
        int maxfreq = group.First().Count();
        var check = group.Where(g => g.Count() == maxfreq).Select(e => e.Key);

        int result = nums.Length;
        foreach(int n in check){
            int s = Array.IndexOf(nums, n);
            int end = Array.LastIndexOf(nums, n);

            result = Math.Min(result, end - s +1);
        }
        return result;
    }
}
// TC: O(n log n + n^2)
// SC: O(n)


// dictionary solution
public class Solution {
    public int FindShortestSubArray(int[] nums) {
        var count = new Dictionary<int, int>();
        var first = new Dictionary<int, int>();
        var last = new Dictionary<int, int>();
        int degree = 0;

        for(int i =0; i<nums.Length; i++){
            var num = nums[i];    
            if(!first.ContainsKey(num)){
                first[num] = i;
            }
            last[num] = i;
            
            if(!count.ContainsKey(num)){
                count[num] = 0;
            }
            count[num] ++;
            degree = Math.Max(degree, count[num]);
        }

        int result = nums.Length;
        foreach(var k in count.Keys){
            if(count[k] == degree){
                result = Math.Min(result, last[k] - first[k] +1);
            }
        }
        return result;
    }
}
// TC: O(n)
// SC: O(n)
// Note: The solution uses a Dictionary to track the first and last index of each number.