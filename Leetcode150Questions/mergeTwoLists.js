/*
21. Merge Two Sorted Lists
You are given the heads of two sorted linked lists list1 and list2.

Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.

Return the head of the merged linked list.
*/
class Node {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

var mergeTwoLists = function (list1, list2) {

};


function printLL(head) {
    const result = [];
    while (head) {
        result.push(head.val);
        head = head.next;
    }
    return result;
}

const list1 = new Node(1, new Node(2, new Node(4)));
const list2 = new Node(1, new Node(3, new Node(4)));
console.log(printLL(mergeTwoLists(list1, list2))); // [1,1,2,3,4,4]


const list3 = new Node(null);
const list4 = new Node(null);
console.log(printLL(mergeTwoLists(list3, list4))); // []

const list5 = new Node(null);
const list6 = new Node(0);
console.log(printLL(mergeTwoLists(list5, list6))); // [0]