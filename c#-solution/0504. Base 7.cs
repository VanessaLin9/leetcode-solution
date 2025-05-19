// 504. Base 7
// https://leetcode.com/problems/base-7/description/
// Tag: Easy, Math

public class Solution {
    public string ConvertToBase7(int num) {
        if(num == 0) return "0";
        bool isNegative = num <0;
        var result = new List<int>();
        num = Math.Abs(num);
        
        while(num > 0){
            int temp = num % 7;
            result.Add(temp);
            num /= 7;
        }
        result.Reverse();
        string r = string.Join("", result);
        return isNegative ? '-' + r : r;
    }
}

// string builder
public class Solution {
    public string ConvertToBase7(int num) {
        if(num == 0) return "0";
        bool isNegative = num < 0;
        num = Math.Abs(num);
        var sb = new StringBuilder();
        while(num > 0){
            sb.Insert(0, num % 7);
            num /= 7;
        }
        return isNegative? sb.Insert(0, "-").ToString(): sb.ToString();
    }
}