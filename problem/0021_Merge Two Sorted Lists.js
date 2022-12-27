// You are given the heads of two sorted linked lists list1 and list2.

// Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.

// Return the head of the merged linked list.

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
//  pointer
var mergeTwoLists = function(l1, l2) {
    let mergehead = new ListNode()
    let meg = mergehead
    while(l1 && l2){
        if(l1.val > l2.val){
            meg.next = l2
            l2 = l2.next
        } else {
            meg.next = l1
            l1 = l1.next
        }
        meg = meg.next
    }
    meg.next = l1?l1:l2
    return mergehead.next
    
};