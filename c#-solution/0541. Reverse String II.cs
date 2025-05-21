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

// string builder
public class Solution {
    public string ReverseStr(string s, int k) {
    var sb = new StringBuilder();
        var p = 0;
        while(p<s.Length){
            int end = Math.Min(s.Length, p+k);
            for(int i=end-1; i>=p; i--){
                sb.Append(s[i]);
            }

            int remainStart = end;
            int remainEnd = Math.Min(p + 2*k, s.Length);
            for(int j=remainStart; j<remainEnd; j++){
                sb.Append(s[j]);
            }

            p+= 2*k;
        }

        return sb.ToString();
    }
}