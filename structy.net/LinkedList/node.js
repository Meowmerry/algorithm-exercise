class Node{
    constructor(val){
        this.val = val;
        this.next  = null;
    }
}

const a = new Node('A');
const b = new Node('B');
const c = new Node('C');
const d = new Node('D');

a.next = b;
b.next = c;
c.next = d;

// A -> B -> C -> D -> NULL

const printLinkedList = (head)=>{
    let current = head;
    while(current !== null){
        //console.log(current)
        current = current.next;
    }
    return current;
};
console.log(printLinkedList(a)) // a is a head Node

const printLinkedListRecursive = (head)=>{
   if(head === null) return;
   console.log(head.val)
   printLinkedListRecursive(head.next)
};
console.log(printLinkedListRecursive(a)) // a is a head Node

