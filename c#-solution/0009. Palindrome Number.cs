public class Solution {
    public bool IsPalindrome(int x) {
        var i = x.ToString().ToCharArray();
        Array.Reverse(i);
        return x.ToString() == new string(i);
    }
}
// TC: O(n);
// SC: O(n);

// Math solution
public class Solution {
    public bool IsPalindrome(int x) {
        if (x < 0) return false;
        var i = x, j = 0;
        while (i != 0) {
            j = j * 10 + i % 10;
            i /= 10;
        }
        return x == j;
    }
}

// TC: O(n); 
// SC: O(1);