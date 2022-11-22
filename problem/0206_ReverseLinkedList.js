// 206. Reverse Linked List
// https://leetcode.com/problems/reverse-linked-list/

// Given the head of a singly linked list, reverse the list, and return the reversed list.

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
  let left = null;
  let current = head;

  while (head !== null) {
    head = head.next;
    current.next = left;

    left = current;
    current = head;
  }
  
  return left;
};