// 645. Set Mismatch
// https://leetcode.com/problems/set-mismatch/description/
// Tag: C#, Array, HashSet, LINQ, Easy

public class hashSetSolution {
    public int[] FindErrorNums(int[] nums) {
        var set = new HashSet<int>();
        var result = new int [2];
        foreach(int n in nums){
            if(!set.Add(n)){
                result[0] = n;
            }
        }
        for(int i=1; i<=nums.Length; i++){
            if(!set.Contains(i)){
                result[1] = i;
            }
        }
        return result;
    }
}
// TC: O(n)
// SC: O(n)
// Note: The solution uses a HashSet to track the numbers seen so far.