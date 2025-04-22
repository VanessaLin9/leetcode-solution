// 205. Isomorphic Strings
// https://leetcode.com/problems/isomorphic-strings/description/
// Tag: C#, HashTable, String, Easy

public class Solution {
    public bool IsIsomorphic(string s, string t) {
        if(s.Length != t.Length)return false;
        var map1 = new Dictionary<char, char>();
        var map2 = new Dictionary<char, char>();

        for(int i=0; i<s.Length; i++){
            if(!map1.ContainsKey(s[i])){
                map1.Add(s[i], t[i]);
            } else {
                if(map1[s[i]] != t[i]) return false;
            }
            if(!map2.ContainsKey(t[i])){
                map2.Add(t[i], s[i]);
            } else {
                if(map2[t[i]] != s[i]) return false;
            }
        }
        return true;
    }
}
// TC: O(n)
// SC: O(n)