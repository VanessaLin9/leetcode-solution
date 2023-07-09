public class Solution {
    public bool IsPalindrome(int x) {
        var i = x.ToString().ToCharArray();
        Array.Reverse(i);
        return x.ToString() == new string(i);
    }
}