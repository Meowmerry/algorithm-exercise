/*
Q. Given an unsorted linked list, count the number of elements (iteratively or recursively).

Examples:
• Given a linked list: 1 ➞ 4 ➞ 5 // returns 3
• Given a linked list: 0 // returns 1


*/

class ListNode {
    constructor(value = 0, next = null) {
        this.value = value;
        this.next = next;
    }
}

function count(head) {
    // Write your code here.
    return -1;
}

// Test Cases
var LL1 = new ListNode(1, new ListNode(4, new ListNode(5)));
console.log(count(null)); // 0
console.log(count(LL1)); // 3
console.log(count(new ListNode())); // 1