public class Solution {
    public int MaximumProduct(int[] nums) {
        Array.Sort(nums);
        int num1 = 0;
        int num2 = 0;
        num1 = nums[0] * nums[1] * nums[nums.Length-1];
        num2 = nums[nums.Length-1] * nums[nums.Length-2] * nums[nums.Length-3];

        if(num1 > num2){
            return num1;
        } else {
            return num2;
        };
    }
}