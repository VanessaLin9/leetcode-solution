// 977. Squares of a Sorted Array
// https://leetcode.com/problems/squares-of-a-sorted-array/description/
// Tag: Array, Two Pointers, Sorting, Easy, String

// brute force
public class Solution {
    public int[] SortedSquares(int[] nums) {
        for(int i=0; i<nums.Length; i++){
            nums[i] = nums[i] * nums[i];
        }
        return nums.OrderBy(n => n).ToArray();
    }
}
// TC: O(nlogn)
// SC: O(n)

// Two Pointers
public class Solution {
    public int[] SortedSquares(int[] nums) {
        int n = nums.Length;
        int [] result = new int [n];
        int left = 0, right = n-1;
        int pos = n-1;

        while(right >= left){
            int lsqu = nums[left] * nums[left];
            int rsqu = nums[right] * nums[right];
            if(lsqu > rsqu){
                result[pos] = lsqu;
                left ++;
            } else {
                result[pos] = rsqu;
                right --;
            }
            pos --;
        }
        return result;
    }
}
// TC: O(n)
// SC: O(n)