public class Solution
{
  public int LongestPalindrome(string s)
  {
    Dictionary<char, int> dict = new();
    int ans = 0;
    foreach (char c in s)
    {
      if (!dict.ContainsKey(c))
      {
        dict.Add(c, 1);
      }
      else
      {
        dict[c]++;
      }
    }
    foreach (KeyValuePair<char, int> kvp in dict)
    {
      ans += kvp.Value - (kvp.Value % 2);
    }
    return ans < s.Length ? ans + 1 : ans;
  }
}