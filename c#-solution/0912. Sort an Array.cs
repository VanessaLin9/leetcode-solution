public class Solution {
    public int[] SortArray(int[] nums) {
        Array.Sort(nums);
        return nums;
    }
}

// MergeSort

public class Solution
{
    public int[] SortArray(int[] nums)
    {
        int[] temp = new int[nums.Length];
        MergeSort(nums, temp, 0, nums.Length - 1);
        return nums;
    }

    private void MergeSort(int[] nums, int[] temp, int left, int right)
    {
        if (left < right)
        {
            int mid = (left + right) / 2;
            MergeSort(nums, temp, left, mid);
            MergeSort(nums, temp, mid + 1, right);
            Merge(nums, temp, left, mid, right);
        }
    }

    private void Merge(int[] nums, int[] temp, int left, int mid, int right)
    {
        int i = left;
        int j = mid + 1;
        int k = left;
        while (i <= mid && j <= right)
        {
            if (nums[i] <= nums[j])
            {
                temp[k++] = nums[i++];
            }
            else
            {
                temp[k++] = nums[j++];
            }
        }

        while (i <= mid)
        {
            temp[k++] = nums[i++];
        }

        while (j <= right)
        {
            temp[k++] = nums[j++];
        }

        for (int m = left; m <= right; m++)
        {
            nums[m] = temp[m];
        }
    }
}