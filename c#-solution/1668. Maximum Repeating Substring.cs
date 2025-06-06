// 1668. Maximum Repeating Substring
// https://leetcode.com/problems/maximum-repeating-substring/
// Tag: C#, String, Easy


public class Solution {
    public int MaxRepeating(string sequence, string word) {
        int repeat = 0;
        string str = word;
        while(sequence.Contains(str))
        {
            repeat ++;
            str += word;
        }
        return repeat;
    }
}

// same logic but using StringBuilder
public class Solution {
    public int MaxRepeating(string sequence, string word) {
        var result = 0;
        var str = new StringBuilder(word);
        while(sequence.Contains(str.ToString())){
            result ++;
            str.Append(word);
        }
        return result;
    }
}