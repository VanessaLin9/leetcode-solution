// 0202. Happy Number
// https://leetcode.com/problems/happy-number/
// Tag: C#, Hash Table, Math, Easy

// brute force
public class Solution
{
    public bool IsHappy(int n)
    {
        HashSet<int> hash = new HashSet<int>();
        while (n != 1 && !hash.Contains(n))
        {
            hash.Add(n);
            int sum = 0;
            while (n > 0)
            {
                int digit = n % 10;
                sum += digit * digit;
                n /= 10;
            }
            n = sum;
        }
        return n == 1;
    }
}
// Time complexity: O(n)
// Space complexity: O(n)


// LINQ Select
public class Solution {
    public bool IsHappy(int n) {
        int sum = 0;
        var list = new List<int>(); // 不用先宣告長度的類似array的結構

        while(sum != 1){
            var digits = n.ToString().Select(c => c-'0'); // 先轉成字串格式，再轉成單個的數字格式，Select裡面是匿名函式，用ASCII 編碼去推回每個字元的數字，在ASCII編碼中，數字 '0' 的字符碼值是 48，而其他數字的字符碼值是依次遞增的。因此，對於數字字符 '0' 到 '9'，將其與字符 '0' 的字符碼值相減，可以得到對應的數字值。例如，將字符 '1' 減去字符 '0' 的結果是 1，將字符 '9' 減去字符 '0' 的結果是 9。
            sum = 0;
            foreach(var d in digits) {
                sum += d*d;
            }
            if(sum == 1){
                return true;
            }
            if(list.Contains(sum)){ //意思類似.has
                return false;
            }

            list.Add(sum);
            n = sum;
        }
        return false;
    }
}
// Time complexity: O(n)
// Space complexity: O(n)