// 56. Merge Intervals
// https://leetcode.com/problems/merge-intervals/
// Tags: Array, Sort, Greedy, Medium


// brute force solution
public class Solution
{
    public int[][] Merge(int[][] intervals)
    {
        var arr = intervals.OrderBy(x => x[0]).ToArray();
        var curr = arr[0];
        var list = new List<int[]>();
        list.Add(curr);
        for (int i = 1; i < arr.Length; i++)
        {
            var next = arr[i];
            if (curr[1] >= next[0])
            {
                curr[1] = Math.Max(curr[1], next[1]);
            }
            else
            {
                curr = next;
                list.Add(next);
            }
        }
        return list.ToArray();
    }
};
// TC: O(n log n) for sorting, O(n) for merging
// SC: O(n) for the output list