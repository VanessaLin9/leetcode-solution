// 168. Excel Sheet Column Title
// https://leetcode.com/problems/excel-sheet-column-title/
// Tag: C#, HashTable, String, Easy

// 1. Brute Force
public class Solution {
    public string ConvertToTitle(int columnNumber) {
        var dic = Enumerable.Range(0, 26).ToDictionary(i => i+1, i=> (char)('A' + i));

        //Console.WriteLine(String.Join(",", dic.Select(c => $"{c.Key}:{c.Value}")));
        var arr = new List<char>();
        int col = columnNumber;
        while(col > 0){
            int temp  = col % 26;
            if(temp == 0) temp =26;
            arr.Add(dic[temp]);
            col = (col - temp) /26;
        }
        arr.Reverse();
        return new String(arr.ToArray());
    }
}
// TC: O(log n)
// SC: O(log n)