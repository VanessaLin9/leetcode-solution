namespace DefaultNamespace;

// string convert solution
public class Solution {
    public int HammingWeight(uint n) {
        string str = Convert.ToString(n, 2);
        return str.Count(x => x =='1');
    }
}
// bit manipulation solution
public class Solution {
    public int HammingWeight(uint n) {
        int count = 0;
        while(n != 0){
            n &= (n - 1);
            count++;
        }
        return count;
    }
}

