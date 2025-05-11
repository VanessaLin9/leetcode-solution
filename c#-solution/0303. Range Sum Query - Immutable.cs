// 303. Range Sum Query - Immutable
// https://leetcode.com/problems/range-sum-query-immutable/description/
// Tag: Array, Prefix Sum, Easy


// 1. Brute Force
public class NumArray {

    new int [] arr;

    public NumArray(int[] nums) {
        arr = nums;
    }
    
    public int SumRange(int left, int right) {
        var sum = 0;
        for(int i = left; i<=right; i++){
            sum += arr[i];
        }
        return sum;
    }
}

// TC: O(n)
// SC: O(1)
// 2. Prefix Sum
public class NumArray {

    private int [] pre;

    public NumArray(int[] nums) { 
        pre = new int [nums.Length];
        pre[0] = nums[0];
        for(int i=1; i<nums.Length; i++){
            pre[i] = pre[i-1] + nums[i];
        }
    }
    
    public int SumRange(int left, int right) {
        if(left == 0){
            return pre[right];
        } else {
            return pre[right] - pre[left - 1];
        }
    }
}
// TC: O(n)
// SC: O(n)
