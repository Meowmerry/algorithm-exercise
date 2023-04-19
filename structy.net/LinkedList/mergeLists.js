/*
merge lists
Write a function, mergeLists, that takes in the head of two sorted linked lists as arguments. The function should merge the two lists together into single sorted linked list. The function should return the head of the merged linked list.

Do this in-place, by mutating the original Nodes.

You may assume that both input lists are non-empty and contain increasing sorted numbers.


*/


class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}




const a = new Node(5);
const b = new Node(7);
const c = new Node(10);
const d = new Node(12);
const e = new Node(20);
const f = new Node(28);
a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;
// 5 -> 7 -> 10 -> 12 -> 20 -> 28

const q = new Node(6);
const r = new Node(8);
const s = new Node(9);
const t = new Node(25);
q.next = r;
r.next = s;
s.next = t;
// 6 -> 8 -> 9 -> 25
/*
Time: O(min(n,m))
n = length of list 1;
m = length of list 2;

Space: O(1) don't create the any new node


const mergeLists = (head1, head2) => {
    // create a dummy node to store the null node because we want to check which node will be less we will start first
    const dummy = new Node(null);
    // create a tail node to store value on each iteration to dummy
    let tail = dummy;
    // create two pointer node to keep track of each one
    let current1 = head1;
    let current2 = head2;

    // traverse through the list, while both node are not null
    while (current1 !== null && current2 !== null) {
        // compare which node are smaller and will move to the next one first
        // if current1 value is less than current2 
        if (current1.val < current2.val) {
            // move dummy next to be current1
            tail.next = current1;
            // move current1 to next
            current1 = current1.next;
        } else {
            tail.next = current2;
            current2 = current2.next;
        }
        // traverse through each node
        tail = tail.next;
    }
    // if both head are not the same size, so have to handle herel
    if (current1 !== null) {
        tail.next = current1;
    }
    if (current2 !== null) {
        tail.next = current2;
    }
    // return next dummy node because we don't want to includes the first one
    return dummy.next;
};
*/


const mergeLists = (head1, head2) => {
    // Base case : if head1 and head2 are null return null
    if (head1 === null && head2 === null) {
        return null;
    }

    // Base case: if both are not the same length, handle here
    if (head1 === null) return head2;
    if (head2 === null) return head1;


    // check which value is less, we will start first
    // if head1 value is less than head2 value
    if (head1.val < head2.val) {
        // create the nextNode to head1.next
        const nextNode = head1.next;
        // move head1.next to recuresive call, passing nextNode with head2 to maintain nextNode
        head1.next = mergeLists(nextNode, head2);
        // return head1;
        return head1;
    } else {
        // create the nextNode to head2.next
        const nextNode = head2.next;
        // move head2.next to recuresive call, passing head1 with nextNode to maintain nextNode
        head2.next = mergeLists(head1, nextNode);
        // return head2;
        return head2;
    }

};

function printLL(head) {
    const result = [];
    while (head) {
        result.push(head.val);
        head = head.next;
    }
    return result;
}

console.log(printLL(mergeLists(a, q)));
// 5 -> 6 -> 7 -> 8 -> 9 -> 10 -> 12 -> 20 -> 25 -> 28 


