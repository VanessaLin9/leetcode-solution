// 263. Ugly Number
// https://leetcode.com/problems/ugly-number/
// Tag: C#, Math, Easy

// brute force
public class Solution
{
  public bool IsUgly(int n)
  {
    if (n <= 0) return false;
    while (n % 5 == 0) n /= 5;
    while (n % 3 == 0) n /= 3;
    while (n % 2 == 0) n /= 2;
    return n == 1;
  }
}