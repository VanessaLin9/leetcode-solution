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
public class Solution
{
  public IList<int> PreorderTraversal(TreeNode root)
  {
    List<int> ans = new List<int>();
    Stack<TreeNode> stack = new Stack<TreeNode>();
    TreeNode node = root;

    if (node != null) stack.Push(node);
    while (stack.Count != 0)
    {
      node = stack.Pop();
      ans.Add(node.val);
      if (node.right != null)
      {
        stack.Push(node.right);
      }
      if (node.left != null)
      {
        stack.Push(node.left);
      }
    }
    return ans;
  }
}