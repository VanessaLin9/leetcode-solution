/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function(nums1, nums2) {
    const set1 = new Set(nums1);
    const set2 = new Set(nums2);
    for(let i=0; i<nums1.length; i++){
        if(set2.has(nums1[i])){
            set1.delete(nums1[i])
            set2.delete(nums1[i])
        }
    }
    return [[...set1], [...set2]]
};
// TC: O(n) //GPT說 set.delete() 的時間複雜度是O(1) 
// MC: O(n)

var findDifference = function(nums1, nums2) {
    const s1 = new Set(nums1);
    const s2 = new Set(nums2);
    
    const a1 = [...s1].filter(x => !s2.has(x));
    const a2 = [...s2].filter(x => !s1.has(x));
    
    return [a1, a2];
};

// TC: O(n)
// MC: O(n)