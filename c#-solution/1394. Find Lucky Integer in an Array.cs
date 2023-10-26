public class Solution
{
  public int FindLucky(int[] arr)
  {
    SortedDictionary<int, int> hashMap = new();
    foreach (var num in arr)
    {
      if (!hashMap.ContainsKey(num))
      {
        hashMap.Add(num, 0);
      }
      hashMap[num]++;
    }
    int ans = -1;

    foreach (var freq in hashMap)
    {
      if (freq.Key == freq.Value)
      {
        ans = freq.Value;
      }
    }
    return ans;
  }
}