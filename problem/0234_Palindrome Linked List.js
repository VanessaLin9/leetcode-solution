//234. Palindrome Linked List
// https://leetcode.com/problems/palindrome-linked-list/
// Tag: Linked List, Two Pointers, Recursion, Easy

// Given the head of a singly linked list, return true if it is a 
// palindrome or false otherwise.
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */

// string 
var isPalindrome = function(head) {
    let a = "";
    let r = "";
    while(head !== null){
        a = a + head.val;
        r = head.val + r;
        head = head.next;
    }
    return a === r
};

// two pointers (fast & slow)
var isPalindrome = function(head) {
    let fast = head;
    let slow = head;
    while(fast && fast.next){
        fast = fast.next.next;
        slow = slow.next;
    }

    let left = slow;
    let temp;
    slow = slow.next;
    left.next = null;

    while(slow){
        temp = slow.next;
        slow.next = left;
        
        left = slow;
        slow = temp;
    }
    fast = head;
    slow = left;
    while(slow){
        if(fast.val !== slow.val)return false
        fast = fast.next;
        slow = slow.next;
    }
    return true;
};

// T: O(n)
// S: O(1)