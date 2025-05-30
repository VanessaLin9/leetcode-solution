// 788. Rotated Digits
// https://leetcode.com/problems/rotated-digits/
// Tag: C#, Math, String, Medium


// Math approach
// This approach checks each digit of the number and determines if it contains valid rotated digits.
public class Solution {
    public int RotatedDigits(int n) {
        int count = 0;
        for (int i = 1; i <= n; i++) {
            if (IsValid(i)) {
                count++;
            }
        }
        return count;
    }

    private bool IsValid(int num) {
        bool hasValidDigit = false;
        while (num > 0) {
            int digit = num % 10;
            if (digit == 3 || digit == 4 || digit == 7) {
                return false; // Contains invalid digit
            }
            if (digit == 2 || digit == 5 || digit == 6 || digit == 9) {
                hasValidDigit = true; // Contains a valid rotated digit
            }
            num /= 10;
        }
        return hasValidDigit; // Must contain at least one valid rotated digit
    }
}
// TC: O(n * d) where n is the number of integers from 1 to n and d is the number of digits in each integer
// SC: O(1) since we are using a constant amount of space for the variables


// string approach
// This approach converts each number to a string and checks each character.
public class Solution {
    public int RotatedDigits(int n) {
        var invalid = new HashSet<char>{ '3', '4', '7'};
        var validDiff = new HashSet<char>{ '2', '5', '6', '9'};
        int result = 0;

        for(int i=1; i<= n; i++){
            var str = i.ToString();
            var hasDiff = false;
            var isValid = true;

            foreach(var c in str){
                if(invalid.Contains(c)){
                    isValid = false;
                    break;
                }
                if(validDiff.Contains(c)){
                    hasDiff = true;
                }
            }
            if(isValid && hasDiff) result ++;
        }

        return result;
    }
}