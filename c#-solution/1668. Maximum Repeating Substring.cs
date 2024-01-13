public class Solution {
    public int MaxRepeating(string sequence, string word) {
        int repeat = 0;
        string str = word;
        while(sequence.Contains(str))
        {
            repeat ++;
            str += word;
        }
        return repeat;
    }
}