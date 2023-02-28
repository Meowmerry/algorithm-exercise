// set node strucure
class Node {
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

// link each node to each other
const a = new Node('A');
const b = new Node('B');
const c = new Node('C');
const d = new Node('D');

// set next node 
a.next = b;
b.next = c;
c.next = d;

//  A--> B --> C --> D ---> NULL
// cur

// For loop
const printLinkedList = (head)=>{
    //console.log('head-->', head);
    // set current
    let current = head;
    // check how far we have to go thro
    while(current !== null){
        console.log(current.val);
        current = current.next;
    }
    return current;
}
// console.log(printLinkedList(a))
// recuresive
const printLinkedListRecur = (head)=>{
    // base case
    if(head===null) return;
    console.log(head.val)
    printLinkedListRecur(head.next)
}

console.log(printLinkedListRecur(a))
