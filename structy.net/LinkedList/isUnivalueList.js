/*
is univalue list
Write a function, isUnivalueList, that takes in the head of a linked list as an argument. 
The function should return a boolean indicating whether or not the linked list 
contains exactly one unique value.

You may assume that the input list is non-empty.

*/
class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}
const a = new Node(7);
const b = new Node(7);
const c = new Node(7);

a.next = b;
b.next = c;

// 7 -> 7 -> 7

const u = new Node(2);
const v = new Node(2);
const w = new Node(3);
const x = new Node(3);
const y = new Node(2);

u.next = v;
v.next = w;
w.next = x;
x.next = y;

// 2 -> 2 -> 3 -> 3 -> 2

/*
const isUnivalueList = (head) => {
    if (!head) return true;
    let current = head;
    while (current !== null && current.next !== null) {
        if (current.val !== current.next.val) {
            return false;
        }
        current = current.next;
    }
    return true;
};

const isUnivalueList = (head) => {
    if (!head) return true;
    let current = head;
    while (current !== null) {
        if (current.val !== head.val) {
            return false;
        }
        current = current.next;
    }
    return true;
};


const isUnivalueList = (head, prev = null) => {
    if (head === null) return true;
    if (prev === null || prev === head.val) {
        return isUnivalueList(head.next, head.val);
    } else {
        return false;
    }
};

// Using Hash Map 
const isUnivalueList = (head) => {
    const mapSet = new Map();
    let current = head;
    let prev = null;

    while (current) {
        prev = current;

        if (current.val === prev.val) {
            mapSet.set(current.val, (mapSet.get(current.val) || 0) + 1);
        }
        current = current.next;
    }

    return mapSet.size === 1;

};
*/
const isUnivalueList = (head, prev = null) => {
    if (head === null) return true;
    if (prev === null || head.val === prev) {
        return isUnivalueList(head.next, head.val);
    } else {
        return false;
    }

};

console.log(isUnivalueList(a)); // true
console.log(isUnivalueList(u)); // false