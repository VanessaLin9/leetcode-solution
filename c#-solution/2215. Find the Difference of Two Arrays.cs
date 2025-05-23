// 2215. Find the Difference of Two Arrays
// https://leetcode.com/problems/find-the-difference-of-two-arrays/description/
// Tag: C#, Array, HashSet, LINQ, Easy

public class hashSetSolution {
    public IList<IList<int>> FindDifference(int[] nums1, int[] nums2) {
        var set1 = new HashSet<int>(nums1);
        var set2 = new HashSet<int>(nums2);

        return new List<IList<int>>{
            set1.Where(x => !set2.Contains(x)).ToList<int>(),
            set2.Where(x => !set1.Contains(x)).ToList<int>(),
        };
    }
}