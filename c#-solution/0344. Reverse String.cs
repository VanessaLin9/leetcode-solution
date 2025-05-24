// 0344 Reverse String
// https://leetcode.com/problems/reverse-string/description/
// Tag: Array, Two Pointers, String, Easy

public class Solution {
    public void ReverseString(char[] s) {
        int haf = s.Length/2;

        for(int i=0; i<haf; i++){
            var c = s[i];
            s[i] = s[s.Length -1 - i];
            s[s.Length -1 -i] = c;
        }
    }
}

// use span
public class Solution {
    public void ReverseString(char[] s) {
        s.AsSpan().Reverse();
    }
}