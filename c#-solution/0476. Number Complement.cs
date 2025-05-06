// 0476. Number Complement
// https://leetcode.com/problems/number-complement/
// Tag: C#, Bit Manipulation, Easy

// string
public class Solution {
    public int FindComplement(int num) {
        var n = Convert.ToString(num, 2);
        var s = new StringBuilder();
        foreach(char i in n){
            var c = i =='1' ? '0' : '1' ;
            s.Append(c);
        }
        return Convert.ToInt32(s.ToString(), 2);
    }
}