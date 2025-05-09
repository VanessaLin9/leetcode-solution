// 389. Find the Difference
// https://leetcode.com/problems/find-the-difference/
// Tag: Hash Table, String, Easy

// brute force
public class Solution {
    public char FindTheDifference(string s, string t) {
        var sets = new Dictionary<char, int>();
        var sett = new Dictionary<char, int>();
        for(int i=0; i<s.Length; i++){
            if(!sets.ContainsKey(s[i])){
                sets.Add(s[i], 0);
            }
            sets[s[i]] ++;
            if(!sett.ContainsKey(t[i])){
                sett.Add(t[i], 0);
            }
            sett[t[i]] ++;
        }
        if(!sett.ContainsKey(t[t.Length-1])){
            sett.Add(t[t.Length-1], 1);
        } else {
            sett[t[t.Length -1]] ++;
        }
  
        foreach(var tk in sett.Keys){
            if(!sets.ContainsKey(tk)) return tk;
            if(sets[tk] != sett[tk]) return tk;
        }
        return t[t.Length-1];
    }
}
// TC: O(n)
// SC: O(n)

//  同上但改成 LINQ 寫法
public class Solution {
    public char FindTheDifference(string s, string t) {
        var sets = s.GroupBy(c => c).ToDictionary(g => g.Key, g=> g.Count());
        var sett = t.GroupBy(c => c).ToDictionary(g => g.Key, g=> g.Count());

        var diff = sett.First(k => !sets.ContainsKey(k.Key) || sets[k.Key] != k.Value);
        return diff.Key;
    }
}


// one dictionary
public class Solution {
    public char FindTheDifference(string s, string t) {
        var count = new Dictionary<char, int>();
        foreach(var c in s){
            if(!count.ContainsKey(c)) count[c] = 0;
            count[c] ++;
        }
        foreach(var c in t){
            if(!count.ContainsKey(c)) return c;
            count[c] --;
            if(count[c] <0) return c;
        }
        return ' ';
    }
}
// 同上但改成 LINQ 寫法
public class Solution {
    public char FindTheDifference(string s, string t) {
        var count = s.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count());
        foreach(var c in t){
            if(!count.ContainsKey(c)) return c;
            count[c] --;
            if(count[c] < 0) return c;
        }
        return ' ';
    }
}

// Array
public class Solution {
    public char FindTheDifference(string s, string t) {
        var map = new int [26];
        for(int i =0; i<s.Length; i++){
            map[s[i] - 'a'] ++;
            map[t[i] - 'a'] --;
        }
        map[t[t.Length -1] - 'a'] --;
        for(int n =0; n<26 ; n++){
            if(map[n] == -1) return (char)('a' + n); 
        }
        return ' ';
    }
}