// 191. Number of 1 Bits
// https://leetcode.com/problems/number-of-1-bits/
// Tag: C#, Bit Manipulation, Easy

// string convert solution
public class Solution {
    public int HammingWeight(uint n) {
        string str = Convert.ToString(n, 2);
        return str.Count(x => x =='1');
    }
}
// bit manipulation solution
public class Solution {
    public int HammingWeight(uint n) {
        int count = 0;
        while(n != 0){
            n &= (n - 1);
            count++;
        }
        return count;
    }
}

