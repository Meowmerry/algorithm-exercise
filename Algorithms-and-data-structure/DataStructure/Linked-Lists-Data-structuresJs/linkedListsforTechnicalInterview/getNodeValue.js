/*
get node value
Write a function, getNodeValue, that takes in the head of a linked list and an index. 
The function should return the value of the linked list at the specified index.

If there is no node at the given index, then return null.
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
const getNodeValue = (head, index) => { // Time  O(n) , Space = O(1)
  // todo
  let current = head;
  let count = 0;
  while(current !== null){
    if(count === index) return current.val;
    count +=1;
    current = current.next;
  }
  return null;
};

console.log(getNodeValue(a, 2)); // 'c')

const getNodeValueRecur = (head, index) => { // Time  O(n) , Space = O(n)
    // todo
    if(head === null) return null;
    if(index == 0) return head.val;
    return getNodeValueRecur(head.next, index - 1)
};
console.log(getNodeValueRecur(a, 2)); // 'c')