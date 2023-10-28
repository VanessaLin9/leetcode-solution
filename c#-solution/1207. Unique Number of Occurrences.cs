public class Solution
{
  public bool UniqueOccurrences(int[] arr)
  {
    Dictionary<int, int> hash = new();
    foreach (int n in arr)
    {
      if (!hash.ContainsKey(n))
      {
        hash.Add(n, 1);
      }
      else
      {
        hash[n]++;
      }
    }
    HashSet<int> set = new(hash.Values);
    return hash.Count == set.Count;
  }
}