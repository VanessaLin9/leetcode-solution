// 541. Reverse String II
// https://leetcode.com/problems/reverse-string-ii/description/
// Tag: Array, String, Two Pointers, Easy

// two pointers
public class Solution {
    public string ReverseStr(string s, int k) {

        var arr = s.ToCharArray();
        for(int i=0; i<s.Length; i+=2*k){
            int l = i;
            int r = Math.Min(s.Length -1, i+k-1);
            while(r > l){
                (arr[r], arr[l]) = (arr[l], arr[r]);
                l++;
                r--;
            }
        }
        return new String(arr);
    }
}
// TC: O(n)
// SC: O(n)