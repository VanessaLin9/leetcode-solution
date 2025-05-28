// 905. Sort Array By Parity
// https://leetcode.com/problems/sort-array-by-parity/
// Tag: C#, Array, Two Pointers, Sorting, Easy

// two pointer approach
public class Solution {
    public int[] SortArrayByParity(int[] nums) {
        int left = 0; 
        int right = nums.Length -1;
        while(right >= left)
        {
            if(nums[left] %2 == 1 && nums[right] % 2 == 0)
            {
                var temp = nums[right];
                nums[right] = nums[left];
                nums[left] = temp;
            }
            if(nums[left]%2 == 0)
            {
                left ++;
            }
            if(nums[right]%2 == 1)
            {
                right --;
            }
        }
        return nums;
    }
    // TC: O(n)
    // SC: O(1)
    

    
    // AddRange approach
    // 內部實作會先根據你要加的元素數量「擴容一次」，然後逐一填入。
    // 因為 List 的 Capacity 是可以提前設定的，所以可以大幅減少記憶體重分配與拷貝次數。
    public int[] SortArrayByParity(int[] nums) {
        List<int> evenNumbers = nums.Where(x => x%2 == 0).ToList();
        List<int> oddNumbers = nums.Where(x => x%2 == 1).ToList();

        evenNumbers.AddRange(oddNumbers);
        return evenNumbers.ToArray();
    }
    // TC: O(n)
    // SC: O(n)


    // LINQ approach
    // 效能較差
    // 因為 LINQ 的 Where 和 Concat 方法會產生新的 IEnumerable 物件，並且在 ToArray() 時需要遍歷兩次。
    // GC（垃圾回收）也會因為這些額外的物件而增加負擔。
    // 這樣的實作方式會增加額外的記憶體使用量，並且在處理大數據時可能會導致效能下降，雖然TIME和SPACE的複雜度仍然是 O(n) 和 O(n)，
    // 但實際上會比兩個 List 的 AddRange 方法更慢。
    // 但這種寫法更簡潔，易於閱讀和維護。
    public int[] SortArrayByParity(int[] nums) {
        return nums.Where(x => x%2 ==0)
        .Concat(nums.Where(y => y%2 != 0))
        .ToArray();
    }
    // TC: O(n)
    // SC: O(n)

}