// 0014. Longest Common Prefix
// https://leetcode.com/problems/longest-common-prefix/
// Tag: C#, String, Array, Easy

// burst force
public class Solution
{
  public string LongestCommonPrefix(string[] strs)
  {
    string pre = "";
    for (int i = 0; i < strs[0].Length; i++)
    {
      char text = strs[0][i];
      for (int j = 1; j < strs.Length; j++)
      {
        if (i >= strs[j].Length || strs[j][i] != text)
        {
          return pre;
        }
      }
      pre += text;
    }
    return pre;
  }
}
// Time complexity: O(mn)
// Space complexity: O(1)

// StringBuilder 優化一下暴力解
// 在C#中，字串是不可變的。每次你使用 += 對字串進行連接時，都會在記憶體中創建一個新的字串實例。當連接大量字串時，這可能會很低效。
public class Solution
{
  public string LongestCommonPrefix(string[] strs)
  {
    StringBuilder pre = new StringBuilder();
    for (int i = 0; i < strs[0].Length; i++)
    {
      char text = strs[0][i];
      for (int j = 1; j < strs.Length; j++)
      {
        if (i >= strs[j].Length || strs[j][i] != text)
        {
          return pre.ToString();
        }
      }
      pre.Append(text);
    }
    return pre.ToString();
  }
}

// Substring
public class Solution
{
  public string LongestCommonPrefix(string[] strs)
  {
    if (strs.Length == 0) return "";
    string pre = strs[0];
    for (int i = 1; i < strs.Length; i++)
    {
      while (strs[i].IndexOf(pre) != 0)
      {
        pre = pre.Substring(0, pre.Length - 1);
      }
    }
    return pre;
  }
}

// list
public class Solution {
    public string LongestCommonPrefix(string[] strs) {
        var pre = new List<char>();
        for(int i=0; i<strs[0].Length; i++){
            var curr = strs[0][i];
            var flag = true;
            for(int j=0; j<strs.Length; j++){
                if( i >= strs[j].Length || strs[j][i] != curr) {
                    flag = false;
                    break;
                }
            }
            if(flag == true){
                pre.Add(curr);
            } else {
                break;
            }
        }
        return string.Concat(pre);
        // return new string(pre.ToArray());
    }
}
// TC: O(mn)
// SC: O(1)