// 387. First Unique Character in a String
// https://leetcode.com/problems/first-unique-character-in-a-string/
// Tag: C#, Hash Table, String, Easy

public class Solution {
    public int FirstUniqChar(string s) {
        var map = new Dictionary<char, int>();
        foreach(char c in s){
            if(!map.ContainsKey(c)) map.Add(c, 1);
            else map[c] += 1;
        }
        for(int i=0; i<s.Length; i++){
            var temp = s[i];
            if(map[temp] == 1) return i;
        }
        return -1;
    }
}
// TC: O(n)
// MC: O(n)