// 0965. Univalued Binary Tree
// https://leetcode.com/problems/univalued-binary-tree/
// Tag: C#, Tree, Depth-first Search, Binary Tree, Easy, DFS
// Related: 100. Same Tree, 101. Symmetric Tree, 226. Invert Binary Tree

/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     public int val;
 *     public TreeNode left;
 *     public TreeNode right;
 *     public TreeNode(int val=0, TreeNode left=null, TreeNode right=null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
public class Solution {
    public bool IsUnivalTree(TreeNode root) {
        bool isSam(TreeNode node, int val)
        {
            if(node == null) return true;
            if(node.val != val) return false;
            return isSam(node.left, val) && isSam(node.right, val);
        }
        return isSam(root, root.val);
    }
}