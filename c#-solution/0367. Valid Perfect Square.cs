// 0367. Valid Perfect Square
// https://leetcode.com/problems/valid-perfect-square/
// // Tag: Binary Search, Math, Easy 

// burst force
public class Solution {
    public bool IsPerfectSquare(int num) {
        if(num == 1) return true;
        int haf = num/2;
        for(int i=1; i<=haf; i++){
            var sqr = i * i;
            if(sqr == num) return true;
        }
        return false;
    }
}
// TC: O(n)
// SC: O(1)



// Binary Search
public class Solution {
    public bool IsPerfectSquare(int num) {
        if(num == 1) return true;
        long l = 1;
        long r = num;
        while(r>=l){
            long mid = l + (r - l)/2;
            long sqr = mid * mid;
            if(sqr == num){
                return true;
            } else if (sqr > num){
                r = mid - 1;
            } else {
                l = mid + 1;
            }
        }
        return false;
    }
}
// TC: O(logn)
// SC: O(1)