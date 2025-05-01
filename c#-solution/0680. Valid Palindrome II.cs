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

// one run no recursion
public class Solution {
    
    public bool ValidPalindrome(string s) {
        int left = 0, right = s.Length - 1;
        while (left < right) {
            if (s[left] == s[right]) {
                left++;
                right--;
            } else {
                return IsPalindrome(s, left + 1, right) || IsPalindrome(s, left, right - 1);
            }
        }
        return true;
    }

    private bool IsPalindrome(string s, int left, int right) {
        while (left < right) {
            if (s[left] != s[right]) return false;
            left++;
            right--;
        }
        return true;
    }

}