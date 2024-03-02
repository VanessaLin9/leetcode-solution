namespace DefaultNamespace;

// sort solution
public class Solution {
    public bool IsAnagram(string s, string t) {
        var sArr = s.ToCharArray();
        var tArr = t.ToCharArray();
        Array.Sort(sArr);
        Array.Sort(tArr);
        return new string(sArr) == new string(tArr);
    }
}
// time complexity: O(nlogn)
// space complexity: O(n)

// hash table solution
public class Solution {
    public bool IsAnagram(string s, string t) {
        if (s.Length != t.Length) return false;
        var dict = new Dictionary<char, int>();
        for (int i = 0; i < s.Length; i++)
        {
            if (dict.ContainsKey(s[i]))
            {
                dict[s[i]]++;
            }
            else
            {
                dict[s[i]] = 1;
            }
            if (dict.ContainsKey(t[i]))
            {
                dict[t[i]]--;
            }
            else
            {
                dict[t[i]] = -1;
            }
        }
        return dict.Values.All(x => x == 0);
    }
}
// time complexity: O(n)
// space complexity: O(n)

// array solution
public class Solution {
    public bool IsAnagram(string s, string t) {
        if (s.Length != t.Length) return false;
        var arr = new int[26];
        for (int i = 0; i < s.Length; i++)
        {
            arr[s[i] - 97]++;
            arr[t[i] - 97]--;
        }
        return arr.All(x => x == 0);
    }
}
// time complexity: O(n)
// space complexity: O(1)

// linq solution
public class Solution {
    public bool IsAnagram(string s, string t) {
        return s.OrderBy(x => x).SequenceEqual(t.OrderBy(x => x));
    }
}
// time complexity: O(nlogn)
// space complexity: O(n)