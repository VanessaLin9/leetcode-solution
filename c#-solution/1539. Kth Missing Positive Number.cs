// 1539. Kth Missing Positive Number
// https://leetcode.com/problems/kth-missing-positive-number/
// Tag: Array, Binary Search, Easy

// brute force solution
public class Solution
{
    public int FindKthPositive(int[] arr, int k)
    {
        var miss = new List<int>();
        var p = 0;
        for (int i = 1; miss.Count() < k; i++)
        {
            if (p < arr.Length && arr[p] == i)
            {
                p++;
            }
            else
            {
                miss.Add(i);
            }
        }
        return miss[k - 1];
    }
}
// TC: O(n + k)
// SC: O(k)

// binary search solution
public class Solution
{
    public int FindKthPositive(int[] arr, int k)
    {
        int left = 0, right = arr.Length - 1;
        while (left <= right)
        {
            int mid = left + (right - left) / 2;
            if (arr[mid] - mid - 1 < k)
            {
                left = mid + 1;
            }
            else
            {
                right = mid - 1;
            }
        }
        return left + k;
    }
}
// TC: O(log n)
// SC: O(1)