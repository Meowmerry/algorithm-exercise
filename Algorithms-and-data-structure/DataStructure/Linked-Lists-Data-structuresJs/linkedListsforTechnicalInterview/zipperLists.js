/* 
Write a function, zipperLists, that takes in the head of two linked lists as arguments. 
The function should zipper the two lists together into single linked list by alternating nodes. 
If one of the linked lists is longer than the other, the resulting 
list should terminate with the remaining nodes. 
The function should return the head of the zippered linked list.

Do this in-place, by mutating the original Nodes.

You may assume that both input lists are non-empty.
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

const x = new Node("x");
const y = new Node("y");
const z = new Node("z");
x.next = y;
y.next = z;
// x -> y -> z
const zipperLists = (head1, head2) => { // Time: O(min(n,m)) linear run time, Space : O(1)
    // todo
    let tail = head1;
    let current1 = head1.next;
    let current2 = head2;
    let count = 0;
    while(current1 !== null && current2 !== null){
        if(count % 2  === 0){
            tail.next = current2;
            current2 = current2.next;
        }else{
            tail.next = current1;
            current1 = current1.next;
        }
        tail = tail.next;
        count  += 1;
    }
    // find tail.next
    if(current1 !== null) tail.next = current1;
    if(current2 !== null) tail.next = current2;
    return head1;
  };
console.log(zipperLists(a, x));
const zipperListsRecur = (head1, head2) => { // Time: O(min(n,m)) linear run time, Space : O(1)
    // todo
    // base case 
    if(head1 === null && head2 === null) return null;
    if(head1 === null) return head2;
    if(head2 === null) return head1;
    const next1 = head1.next;
    const next2 = head2.next;
    head1.next = head2;
    head2.next = zipperListsRecur(next1, next2)
    return head1;
};
console.log(zipperListsRecur(a, x));
// a -> x -> b -> y -> c -> z -> d -> e -> f