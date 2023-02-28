/* 
Write a function, linkedListFind, that takes in the head of a linked list and a target 
value. The function should return a boolean indicating whether or not the linked list 
contains the target.
*/
class Node {
    constructor(val) {
      this.val = val;
      this.next = null;
    }
  }
const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");

a.next = b;
b.next = c;
c.next = d;

// a -> b -> c -> d

const linkedListFind = (head, target) => {
    // todo
    let curr = head;
    while(curr !== null){
        if(curr.val === target) return true;
        curr = curr.next
    }
    return false;
};
  
console.log(linkedListFind(a, "c")); // true
console.log(linkedListFind(a, "G")); // false

const linkedListFindRecur = (head, target) => {
    // todo
    if(head === null) return false;
    if(head.val === target) return true;
    return linkedListFindRecur(head.next, target)
  };
  
  console.log(linkedListFindRecur(a, "c")); // true
  console.log(linkedListFindRecur(a, "G")); // false