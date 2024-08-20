/*
Q. Given an unsorted linked list, find the element with the largest value.

Examples:
• Given a linked list: 1 ➞ 4 ➞ 5 ➞ 1 // returns 5
• Given a linked list: 1  // returns 1

*/

class ListNode {
    constructor(value = 0, next = null) {
        this.value = value;
        this.next = next;
    }
}

function findMax(node) {
    // Write your code here.
    return -1;
}

// Test Cases
var LL1 = new ListNode(1, new ListNode(4, new ListNode(5, new ListNode(1))));
var LL2 = new ListNode(7, new ListNode(1, new ListNode(5, new ListNode(1))));
var LL3 = new ListNode(-1, new ListNode(-3, new ListNode(-5, new ListNode(0, new ListNode(-11)))));
console.log(findMax(LL1)); // 5
console.log(findMax(LL2)); // 7
console.log(findMax(LL3)); // 0
console.log(findMax(new ListNode(1))); // 1