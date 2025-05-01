// 645. Set Mismatch
// https://leetcode.com/problems/set-mismatch/description/
// Tag: C#, Array, HashSet, LINQ, Easy

public class hashSetSolution {
    public int[] FindErrorNums(int[] nums) {
        var set = new HashSet<int>();
        var result = new int [2];
        foreach(int n in nums){
            if(!set.Add(n)){ // 不論有沒有加入成功都會試著加入，成功則返回true，失敗則返回false
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

public class Solution {
    public int[] FindErrorNums(int[] nums) {
        var set = new HashSet<int>();
        var result = new int [2];
        int numsSum = 0;
        foreach(int n in nums){
            if(!set.Add(n)){
                result[0] = n;
            } else {
                numsSum += n;
            }
        }
        int l = nums.Length;
        int expectedSum = (l +1)*l/2; // 等差數列求和公式: (a1 + an) * n / 2
        result[1] = expectedSum - numsSum;
        return result;
    }
}