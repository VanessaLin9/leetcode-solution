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

//Dictionary solution
public class Solution
{
  public int FindLucky(int[] arr)
  { 
    var dict = new Dictionary<int, int>();
    foreach (int n in arr)
    {
      dict[n] = dict.GetValueOrDefault(n, 0) + 1;
    }

    var list = dict.Where(c => c.Key == c.Value);
      
      if(list.Count() == 0)
      {
        return -1;
      }
      else
      {
        return list.Select(s => s.Key).OrderByDescending(s => s).First();
      }
  }
}

//LINQ solution and Dictionary
public class Solution {
  public int FindLucky(int[] arr) {
    var list = new Dictionary<int, int>();
    foreach(int i in arr){
        list[i] = list.GetValueOrDefault(i, 0) + 1;
    }
    return list
            .Where(x => x.Key == x.Value)
            .Select(x => x.Key)
            .DefaultIfEmpty(-1)
            .Max();
  }
}