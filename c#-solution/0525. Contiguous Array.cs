// 525. Contiguous Array
// https://leetcode.com/problems/contiguous-array/
// Tag: Medium, Hash Table, Array


public class Solution {
    public int FindMaxLength(int[] nums) {
       var map = new Dictionary<int, int>(); //<sum, firstIndex>
        map[0] = -1;

        int sum = 0;
        int maxLen = 0;

        for(int i=0; i<nums.Length; i++){
            sum += nums[i] == 0? -1 : 1;

            if(map.ContainsKey(sum)){
                int pre = map[sum];
                maxLen = Math.Max(maxLen, i-pre);
            } else {
                map[sum] = i;
            }
        }
        return maxLen;
    }
}