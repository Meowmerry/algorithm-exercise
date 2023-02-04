/*
linked list find
Write a function, linkedListFind, that takes in the head of a linked list and a target value. 
The function should return a boolean indicating whether or not the linked list contains the target.

*/
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
/*
n = number of nodes
Time: O(n)
Space: O(1)
*/
const linkedListFind = (head, target) => {
  // todo
  let current = head;
  while (current !== null) {
    
    if (current.val === target) return true;
    current = current.next;
  }
  return false;
};
/*
n = number of nodes
Time: O(n)
Space: O(n)
*/
const linkedListFindRecursion = (head, target) => {
    // todo
    if(head === null) return false;
    if(head.val === target) return true;
    return linkedListFindRecursion(head.next, target)
  };
  
  

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");

a.next = b;
b.next = c;
c.next = d;

// a -> b -> c -> d

console.log(linkedListFind(a, "c")); // true
console.log(linkedListFind(a, "d")); // true
console.log(linkedListFind(a, "q")); // false

const node1 = new Node("jason");
const node2 = new Node("leneli");
node1.next = node2;

// jason -> leneli
console.log(linkedListFind(node1, "jason")); // true

// const node1 = new Node(42);

// // 42

// linkedListFind(node1, 42); // true
// const node1 = new Node(42);
// // 42
// linkedListFind(node1, 100); // false
