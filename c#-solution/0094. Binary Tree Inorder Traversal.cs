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
  public IList<int> InorderTraversal(TreeNode root)
  {
    List<int> ans = new List<int>();
    Stack<TreeNode> stack = new Stack<TreeNode>();
    while (stack.Count != 0 || root != null)
    {
      if (root != null)
      {
        stack.Push(root);
        root = root.left;
      }
      else
      {
        root = stack.Pop();
        ans.Add(root.val);
        root = root.right;
      }
    }
    return ans;
  }
}

// not clear solution
public class Solution {
  List<int> resultList = new List<int>();
  public IList<int> InorderTraversal(TreeNode root) {
    if(root == null) return new List<int>();

    InorderTraversal(root.left);
    resultList.Add(root.val);
    InorderTraversal(root.right);
    return resultList;
  }
}