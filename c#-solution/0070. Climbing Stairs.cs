// 0070. Climbing Stairs
// https://leetcode.com/problems/climbing-stairs/description/
// Tag: C#, Array, Dynamic Programming, Easy


public class Solution {
    public int ClimbStairs(int n) {
        if(n<=2)
        {
            return n;
        }
        int[] step = new int [n+1];
        for(int i=0; i<=n; i++){
            if(i<=2)
            {
                step[i] = i;
            } else {
                step[i] = step[i-1] + step[i-2];
            }
        }
        return step[n];
    }
}