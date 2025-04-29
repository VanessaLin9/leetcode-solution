// 28. Find the Index of the First Occurrence in a String
// https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/
// Tag: C#, String, Easy

// brute force
public class Solution {
    public int StrStr(string haystack, string needle) {
        int p =0;
        while(p<haystack.Length){
            
            if(haystack[p] == needle[0]){
                var b = true;
                for(int i=0; i<needle.Length; i++){
                    if(p+i >= haystack.Length || needle[i] != haystack[p+i]){
                        b = false;
                        break;
                    }
                }
                if(b) return p;
            }
            p++;
        }
        return -1;
    }
}
// TC: O(n*m)
// SC: O(1)