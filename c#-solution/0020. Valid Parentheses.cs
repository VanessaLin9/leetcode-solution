public class Solution {
    public bool IsValid(string s) {
        var map = new Dictionary<char, char>{
            {'(', ')'},
            {'{', '}'},
            {'[', ']'},
        };
        Stack<char> stack = new Stack<char>();
        foreach(char n in s){
            if(map.ContainsKey(n)){
                stack.Push(map[n]);
            } else {
                Console.WriteLine(n);
                if(stack.Count == 0){
                    return false;
                }
                if(stack.Pop() != n){
                    return false;
                }
                continue;
            }
        }
        return stack.Count == 0;
    }
}