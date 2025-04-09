// 905. Sort Array By Parity
// https://leetcode.com/problems/sort-array-by-parity/
// Tag: C#, Array, Two Pointers, Sorting, Easy

// two pointer approach
public class Solution {
    public int[] SortArrayByParity(int[] nums) {
        int left = 0; 
        int right = nums.Length -1;
        while(right >= left)
        {
            if(nums[left] %2 == 1 && nums[right] % 2 == 0)
            {
                var temp = nums[right];
                nums[right] = nums[left];
                nums[left] = temp;
            }
            if(nums[left]%2 == 0)
            {
                left ++;
            }
            if(nums[right]%2 == 1)
            {
                right --;
            }
        }
        return nums;
    }
    
    // AddRange approach 
    public int[] SortArrayByParity(int[] nums) {
        List<int> evenNumbers = nums.Where(x => x%2 == 0).ToList();
        List<int> oddNumbers = nums.Where(x => x%2 == 1).ToList();

        evenNumbers.AddRange(oddNumbers);
        return evenNumbers.ToArray();
    }
}