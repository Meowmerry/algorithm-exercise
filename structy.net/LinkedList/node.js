class Node {
    constructor(val, next = null) {
        this.val = val;
        this.next = next;
    }
}

const a = new Node('A', new Node('B', new Node('C', new Node('D'))));
// const a = new Node('A');
// const b = new Node('B');
// const c = new Node('C');
// const d = new Node('D');

// a.next = b;
// b.next = c;
// c.next = d;

// A -> B -> C -> D -> NULL

const printLinkedList = (head) => {
    let current = head;
    while (current !== null) {
        console.log(current.val);
        current = current.next;
    }
    // return current;
    return head;
};
console.log(printLinkedList(a)); // a is a head Node

const printLinkedListRecursive = (head) => {
    if (head === null) return;
    console.log(head.val);
    return printLinkedListRecursive(head.next);
};
console.log(printLinkedListRecursive(a)); // a is a head Node

