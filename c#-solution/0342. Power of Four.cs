// 342. Power of Four
// https://leetcode.com/problems/power-of-four/
// Tag: C#, Math, Bit Manipulation, Easy


// brute force
public class Solution {
    public bool IsPowerOfFour(int n) {
        if(n == 1) return true;
        if(n % 2 != 0) return false;
        
        int p = n/4;
        int power = 1;
        for(int i=1; i<=p; i++){
            power *= 4;
            if(power == n) return true; 
        }
        return false;
    }
}


public class Solution {
    public bool IsPowerOfFour(int n) {
        if(n <= 0) return false;
        while(n % 4 == 0){
            n /= 4;
        }
        return n == 1;
    }
}