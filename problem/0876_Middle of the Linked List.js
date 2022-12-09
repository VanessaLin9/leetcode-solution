// Given the head of a singly linked list, return the middle node of the linked list.
//If there are two middle nodes, return the second middle node.

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
var middleNode = function(head) {
  let fast = head;
  let slow = head;
  while(fast !== null && fast.next !== null){
    fast = fast.next.next;
    slow = slow.next;
  }
  return slow;  
};