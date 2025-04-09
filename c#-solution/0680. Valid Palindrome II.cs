// 0680. Valid Palindrome II
// https://leetcode.com/problems/valid-palindrome-ii/
// Tag: C#, String, Two Pointers, Recursion, Easy

public class Solution {
    public bool ValidPalindrome(string s) {
        int start = 0;
        int end = s.Length-1;
        bool skipped = false;

        return IsValidPalindrome(s, start, end, skipped);
    }

    private bool IsValidPalindrome(string str, int start,int end,bool skipped)
    {
        while(end > start)
        {
            if(str[start] == str[end])
            {
                start ++;
                end --;
            } 
            else {
                if(skipped)
                {
                    return false;
                }
                else {
                    return IsValidPalindrome(str, start +1, end, true) ||
                           IsValidPalindrome(str, start, end -1, true) ;
                }
            }
        }
        return true;
    }
}