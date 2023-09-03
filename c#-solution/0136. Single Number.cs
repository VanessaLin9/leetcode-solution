
public class Solution {
    public int SingleNumber(int[] nums) {
        var result = 0;
        for(int i=0; i<nums.Length; i++){
            result ^= nums[i];
        }
        return result;
    }
}
