namespace DefaultNamespace;
/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     public int val;
 *     public ListNode next;
 *     public ListNode(int val=0, ListNode next=null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */
public class Solution {
    public ListNode MiddleNode(ListNode head) {
        ListNode fast = head;
        ListNode slow = head;
        ListNode temp = head;
        int len = 0;
        while(temp != null){
            temp = temp.next;
            len ++;
        }
        while(fast.next != null && fast.next.next != null){
            fast = fast.next.next;
            slow = slow.next;
        }
        if(len %2 ==0){
            return slow.next;
        }
        return slow;
    }
}