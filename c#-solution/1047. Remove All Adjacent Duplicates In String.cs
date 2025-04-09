// 1047. Remove All Adjacent Duplicates In String
// https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string/
// Tag: C#, Stack, String, Easy

public class Solution {
    public string RemoveDuplicates(string s)
    {
        var stack = new Stack<char>();
        foreach (var ch in s)
        {
            if (stack.Count > 0 && stack.Peek() == ch)
            {
                stack.Pop();
            }
            else
            {
                stack.Push(ch);
            }
        }
        return new string(stack.Reverse().ToArray());
    }
}

// string builder solution
    public string RemoveDuplicates(string s) {
        if(s.Length<2) return s;
        var str = new StringBuilder();
        for(var i =0; i<s.Length; i++){
            if(str.Length >0 && str[str.Length -1] == s[i]){
                str.Remove(str.Length -1, 1);
            }else{
                str.Append(s[i]);
            }
        }
          return str.ToString();
    }