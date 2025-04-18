// 283. Move Zeroes
// https://leetcode.com/problems/move-zeroes/description/
// Tag: Array, Two Pointers, Easy

public class Solution {
    public void MoveZeroes(int[] nums) {
        int temp = 0;
        for(int i=0; i<nums.Length; i++){
            if(nums[i] != 0){
                nums[temp] = nums[i];
                nums[i] = i == temp? nums[i]: 0;
                temp ++;
            }
        }
    }
}