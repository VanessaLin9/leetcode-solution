// 1. Two Sum
// https://leetcode.com/problems/two-sum/description/
//Tag: Array, Hash Table, Easy

public class Solution {
    public int[] TwoSum(int[] nums, int target) {
        var map = new Dictionary<int, int>();
        for(int i=0; i<nums.Length; i++){
            var n = nums[i];
            int find = target - n;
            if(map.ContainsKey(find)){
                return new int [2]{i, map[find]};
            } else {
                map[n] = i;
            }
        }
        return new int []{0, 0};
    }
}
// TC: O(n)
// SC: O(n)