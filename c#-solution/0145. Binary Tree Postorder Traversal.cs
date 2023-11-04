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
  public IList<int> PostorderTraversal(TreeNode root)
  {
    Stack<int> ans = new Stack<int>();
    Stack<TreeNode> stack = new Stack<TreeNode>();
    TreeNode node = root;

    if (node != null) stack.Push(node);

    while (stack.Count != 0)
    {
      node = stack.Pop();
      if (node != null)
      {
        ans.Push(node.val);
        stack.Push(node.left);
        stack.Push(node.right);
      }
    }
    return ans.ToList();

  }
}