/* 

reverse list
Write a function, reverseList, that takes in the head of a linked list as an argument. 
The function should reverse the order of the nodes in the linked list in-place and 
return the new head of the reversed linked list.
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
const e = new Node("e");
const f = new Node("f");

a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;

// a -> b -> c -> d -> e -> f



const reverseList = (head) => {
    // todo
    let prev = null;
    let curr = head;
    while(curr !== null){
        const next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }
    return prev.val;
  };
  // N    <-    a    ->    b   ->   c
  // prev ->    head ->   next 
console.log(reverseList(a)); // f -> e -> d -> c -> b -> a


const reverseListRecur = (head, prev = null) => {
    // todo
    if(head === null) return prev;
    const next =head.next;
    head.next = prev;
    return reverseListRecur(next, head)
  };
console.log(reverseListRecur(a)); // f -> e -> d -> c -> b -> a