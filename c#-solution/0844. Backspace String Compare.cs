// 084. Backspace String Compare
// https://leetcode.com/problems/backspace-string-compare/
// Tag: C#, Stack, String, Easy

public class Solution {
    public bool BackspaceCompare(string s, string t) {
        return BackspaceString(s).Equals(BackspaceString(t));
    }
    
    public string BackspaceString(string s){
        Stack<char> stack = new Stack<char>();
        foreach(char n in s){
            if(n == '#'){
                if(stack.Count > 0){
                    stack.Pop();
                }
            } else {
                stack.Push(n);
            }
        }
        return new string(stack.ToArray());
    }
}