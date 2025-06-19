// 1044. Longest Duplicate Substring
// https://leetcode.com/problems/longest-duplicate-substring/
// Tag: C#, Hash Table, Binary Search, Rolling Hash, String, Hard

// Binary Search + Rolling Hash(Rabin-Karp hash)
public class Solution
{
    private const int HASH_NUM = 31;
    private const long MOD = 1000000007;

    // binary search to find the longest duplicate substring
    // using rolling hash to check if there is a duplicate substring of a given size
    public string LongestDupSubstring(String s)
    {
        var answer = "";
        var left = 1;
        var right = s.Length - 1;

        while (left <= right)
        {
            //binary search to finding largest size of substring
            int mid = left + (right - left) / 2;

            var duplicate = getDuplicate(mid, s);

            if (duplicate != null)
            {
                answer = duplicate;
                left = mid + 1;
            }
            else
            {
                right = mid - 1;
            }
        }

        return answer;
    }

    // Get a duplicate substring of a given size using rolling hash
    private string getDuplicate(int size, string s)
    {
        long h = hash(s.Substring(0, size));
        var map = new Dictionary<long, List<int>>();
        map[h] = new List<int> { 0 };

        long pow = 1;
        for (int i = 1; i < size; i++)
        {
            pow = (pow * HASH_NUM) % MOD;
        }

        int n = s.Length;
        for (int i = 1; i <= n - size; i++)
        {
            h = nextHash(pow, h, s[i - 1], s[i + size - 1]);

            if (map.ContainsKey(h))
            {
                foreach (var prevIndex in map[h])
                {
                    if (s.Substring(prevIndex, size) == s.Substring(i, size))
                    {
                        return s.Substring(i, size);
                    }
                }
                map[h].Add(i);
            }
            else
            {
                map[h] = new List<int> { i };
            }
        }

        return null;
    }



    // Calculate the hash value of a string using rolling hash technique
    // H(0 ~ L-1) = s[0]·B^(L-1) + s[1]·B^(L-2) + ... + s[L-1]·B^0
    private long hash(string s)
    {
        long h = 0;
        long a = 1;
        int n = s.Length;

        for (int i = n; i >= 1; i--)
        {
            char ch = s[i - 1];
            h = (h + ((ch - 'a' + 1) * a) % MOD) % MOD;
            a = (a * HASH_NUM) % MOD;
        }

        return h;
    }

    // Calculate the next hash value by removing the leftmost character and adding the rightmost character
    private long nextHash(long pow, long hash, char left, char right)
    {
        hash = (hash - ((left - 'a' + 1) * pow) % MOD + MOD) % MOD;
        hash = (hash * HASH_NUM + (right - 'a' + 1)) % MOD;
        return hash;
    }
}
// TC: O(n log n)
// SC: O(n)