namespace DefaultNamespace;

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