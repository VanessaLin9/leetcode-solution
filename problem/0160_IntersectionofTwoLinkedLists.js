// 160. Intersection of Two Linked Lists
// https://leetcode.com/problems/intersection-of-two-linked-lists/description/

// Given the heads of two singly linked-lists headA and headB, return the node at which the two lists intersect. If the two linked lists have no intersection at all, return null.

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    let a = headA;
    let b = headB;
    while(a !== b && (a.next || b.next)){
        if(a.next === null){
            a = headB;
        } else {
            a = a.next;
        }
        if(b.next === null){
            b = headA;
        } else {
            b = b.next;
        }
    }

    if(a === b) return a;    
    return null;
};