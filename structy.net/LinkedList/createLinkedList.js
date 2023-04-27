/*
create linked list
Write a function, createLinkedList, that takes in an array of values as an argument. The function should create a linked list containing each element of the array as the values of the nodes. The function should return the head of the linked list.

test_00:
createLinkedList(["h", "e", "y"]);
// h -> e -> y
test_01:
createLinkedList([1, 7, 1, 8]);
// 1 -> 7 -> 1 -> 8
test_02:
createLinkedList(["a"]);
// a
test_03:
createLinkedList([]);
// null
*/

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}
// === Iterative ======
// const createLinkedList = (values) => {
//     const dummyNode = new Node(null);
//     let tail = dummyNode;
//     for (const val of values) {
//         tail.next = new Node(val);
//         tail = tail.next;
//     }
//     return dummyNode.next;
// };
// === Recursive ======
const createLinkedList = (values, i = 0) => {
    if (values.length === i) return null;

    const head = new Node(values[i]);
    head.next = createLinkedList(values, i + 1);
    return head;
};

function printLL(head) {

    let output = '';
    while (head) {
        output += head.val + ' -> ';
        head = head.next;
    }
    return output;
}

console.log(printLL(createLinkedList(["h", "e", "y"]))); // h -> e -> y
console.log(printLL(createLinkedList([1, 7, 1, 8]))); // 1 -> 7 -> 1 -> 8
console.log(printLL(createLinkedList(["a"]))); // a
console.log(printLL(createLinkedList([]))); // null