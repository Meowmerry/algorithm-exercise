/*
92. Reverse Linked List II

Given the head of a singly linked list and two integers left and right 
where left <= right, reverse the nodes of the list from position left to position right, 
and return the reversed list.

 Input: head = [1,2,3,4,5], left = 2, right = 4
Output: [1,4,3,2,5]

Input: head = [5], left = 1, right = 1
Output: [5]
*/
class Node {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

var reverseBetween = function (list, left, right) {
    // creat dummy node with 
    const dummy = new Node(0, list);
    let head = dummy;
    let curr = 1;

    while (curr++ < left) head = head.next;

    let tail = head.next;
    while (left++ < right) {
        const next = tail.next;
        tail.next = next.next;
        next.next = head.next;
        head.next = next;
    }
    return dummy.next;
};


function printLL(head) {
    const result = [];
    while (head) {
        result.push(head.val);
        head = head.next;
    }
    return result;
}

const head = new Node(1, new Node(2, new Node(3, new Node(4, new Node(5)))));
console.log(printLL(reverseBetween(head, 2, 4)));  //[ 1, 4, 3, 2, 5 ]
const head1 = new Node(1);
console.log(printLL(reverseBetween(head1, 1, 1))); // [5]