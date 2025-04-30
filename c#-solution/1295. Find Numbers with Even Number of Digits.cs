// 1295. Find Numbers with Even Number of Digits
// https://leetcode.com/problems/find-numbers-with-even-number-of-digits/
// Tag: C#, Array, Easy

// 1. Brute Force
public class Solution {
    public int FindNumbers(int[] nums) {
        int result = 0;
        foreach(int n in nums){
            if(n < 100 && n >9){
                result ++;
            } else if(n<10000 && n>999 || n == 100000){
                result ++;
            }
        }
        return result;
    }
}
// TC: O(n)
// SC: O(1)

// 2. String
public class Solution {
    public int FindNumbers(int[] nums) {
        int result = 0;
        foreach(int n in nums){
            var s = n.ToString();
            if(s.Length % 2 ==0) result ++;
        }
        return result;
    }
}
// TC: O(n)
// SC: O(1)

// 3. Math
public class Solution {
    public int FindNumbers(int[] nums) {
        int result = 0;
        foreach(int n in nums){
            int dig = (int)Math.Floor(Math.Log10(n)) + 1;
            if(dig %2 == 0) result ++;
        }
        return result;
    }
}