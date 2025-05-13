// 206. Reverse Linked List
// https://leetcode.com/problems/reverse-linked-list/
// Tag: C#, Linked List, Easy


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
    public ListNode ReverseList(ListNode head) {
        ListNode prev = null;
        ListNode curr = head;

        while(curr != null){
            head = head.next;
            curr.next = prev;
            prev = curr;
            curr = head;
        }
        return prev;
    }
}