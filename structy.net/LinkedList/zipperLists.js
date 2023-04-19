/*
zipper lists
Write a function, zipperLists, that takes in the head of two linked lists as arguments. The function should zipper the two lists together into single linked list by alternating nodes. If one of the linked lists is longer than the other, the resulting list should terminate with the remaining nodes. The function should return the head of the zippered linked list.

Do this in-place, by mutating the original Nodes.

You may assume that both input lists are non-empty.

test_00:
const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
a.next = b;
b.next = c;
// a -> b -> c

const x = new Node("x");
const y = new Node("y");
const z = new Node("z");
x.next = y;
y.next = z;
// x -> y -> z

zipperLists(a, x);

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
a.next = b;
b.next = c;
// a -> b -> c

const x = new Node("x");
const y = new Node("y");
const z = new Node("z");
x.next = y;
y.next = z;
// x -> y -> z
/*
Time: O(min(n,m)) 
n = length of list 1
m = length of list 2
need manay iteration of the short length, the less step will be O(1)
We do not need to iterate all with both lists

Space: O(1) because we not actually creating any new nodes, 
We're simply a rerouting all of these next pointers and next pointer 
*/
function zipperLists(head1, head2) {
    // create new head to refer to the head 1
    const head = head1;
    // create new tail to referance to head, and will keep track of new tail each time travers through the node
    let tail = head;
    // create the first pointer current 1 refer to head.next
    let current1 = head1.next;
    // create the second pointer current 2 refer to head 2, and will keep track 
    let current2 = head2;
    // create the count to keep track each time the node iteratation through node
    let count = 0;

    // while iteration through two pointer, current1 and current2 are not null
    while (current1 !== null && current2 !== null) {
        // check if count is even number
        if (count % 2 === 0) {
            tail.next = current2;
            current2 = current2.next;
        } else {
            tail.next = current1;
            current1 = current1.next;
        }
        // traverse through node by move the tail to next tail
        tail = tail.next;
        // increment count by 1
        count += 1;
    }

    // if both head is not the same length, need to handle by add the rest of the node to the list
    if (current1 !== null) tail.next = current1;
    if (current2 !== null) tail.next = current2;

    // return head
    return head;

};


/*
n = length of list 1
m = length of list 2
Time: O(min(n, m))
Space: O(min(n, m))

*/
function zipperLists(head1, head2) {
    if (head1 === null && head2 === null) {
        return null;
    }
    if (head1 === null) return head2;
    if (head2 === null) return head1;
    const next1 = head1.next;
    const next2 = head2.next;
    head1.next = head2;
    head2.next = zipperLists(next1, next2);
    return head1;
}
function printLL(head) {
    const result = [];
    while (head) {
        result.push(head.val);
        head = head.next;
    }
    return result;
}

console.log(printLL(zipperLists(a, x))); // [ 'a', 'x', 'b', 'y', 'c', 'z' ]



