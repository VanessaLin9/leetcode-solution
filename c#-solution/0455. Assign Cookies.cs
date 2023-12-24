public class Solution {
    public int FindContentChildren(int[] g, int[] s) {
        Array.Sort(g);
        Array.Sort(s);

        int gpoint = 0;
        int spoint = 0;
        int result = 0;
        while(spoint < s.Length && gpoint < g.Length)
        {
            if(s[spoint] >= g[gpoint])
            {
                result ++;
                gpoint ++;
            }
            spoint ++;
        }
        return result;
    }
}