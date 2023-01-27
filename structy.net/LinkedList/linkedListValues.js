/*
linked list values
Write a function, linkedListValues, that takes in the head of a linked list as an argument. 
The function should return an array containing all values of the nodes in the linked list.

Hey. This is our first linked list problem, so you should be liberal with watching the Approach and Walkthrough. 
Be productive, not stubborn. -AZ

test_00:


// a -> b -> c -> d

*/
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
/* 
n = number of nodes
Time: O(n)
Space: O(n)
*/
const linkedListValues = (head) => {
    let current = head;
    const result = [];
    while (current !== null) {
        result.push(current.value)
        current = current.next;
        
    };
    return result;
}
const _linkedListValues = (head) =>{
    const values = [];
    fillValues(head, values)
    return values;
}

// create helper function recursive
const fillValues = (head, values)=>{
    if(head === null) return;
    values.push(head.value);
    fillValues(head.next, values)
}

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");

a.next = b;
b.next = c;
c.next = d;

console.log(linkedListValues(a)); // -> [ 'a', 'b', 'c', 'd' ]
console.log(_linkedListValues(a)); // -> [ 'a', 'b', 'c', 'd' ]