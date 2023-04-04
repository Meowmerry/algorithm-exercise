/*
remove node
Write a function, removeNode, that takes in the head of a linked list and a target value as arguments. The function should delete the node containing the target value from the linked list and return the head of the resulting linked list. If the target appears multiple times in the linked list, only remove the first instance of the target in the list.

Do this in-place.

You may assume that the input list is non-empty.

You may assume that the input list contains the target.
*/
class Node {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}
const removeNode = (node, target) => {
    if (node.value === target) return node.next;
    let current = node;
    let prev = null;
    while (current !== null) {
        if (current.value === target) {
            prev.next = current.next;
            break;
        }
        prev = current;
        current = current.next;
    }
    return node;
};
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

console.log(removeNode(a, "c"));
// a -> b -> d -> e -> f

const x = new Node("x");
const y = new Node("y");
const z = new Node("z");

x.next = y;
y.next = z;

// x -> y -> z

// console.log(removeNode(x, "z"));
// x -> y

console.log(removeNode(x, "x"));
// y -> z

console.log(removeNode(x, "y"));
// x -> z