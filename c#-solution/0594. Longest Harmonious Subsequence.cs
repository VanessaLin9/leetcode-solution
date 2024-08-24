namespace DefaultNamespace;

public class Solution {
    public int FindLHS(int[] nums)
    {
        var hash = new Dictionary<int, int>();
        foreach (var i in nums)
        {
            if (!hash.ContainsKey(i))
            {
                hash[i] = 0;
            }
            hash[i]++;
        }

        var result = 0;
        foreach (var j in hash.Keys)
        {
            if (hash.ContainsKey(j + 1))
            {
                var temp = hash[j] + hash[j + 1];
                result = Math.Max(temp, result);
            }
        }

        return result;
    }
    
}