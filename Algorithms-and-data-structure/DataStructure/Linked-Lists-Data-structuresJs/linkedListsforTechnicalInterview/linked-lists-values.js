/* 
linked list values
Write a function, linkedListValues, that takes in the head of a linked list as an argument. 
The function should return an array containing all values of the nodes in the linked list.

Hey. This is our first linked list problem, so you should be liberal with watching the Approach and Walkthrough. 
Be productive, not stubborn. -AZ

*/
// crete Node
class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}
// create each node

const a = new Node('A');
const b = new Node('B');
const c = new Node('C');
const d = new Node('D');

// set next node
a.next = b;
b.next = c;
c.next = d;

const linkedlisthValues = (head)=>{
    const results = [];
    let curr = head;
    while(curr !==null){
        results.push(curr.val);
        curr = curr.next;
    }
    return results;
}
// console.log(linkedlisthValues(a))
const linkedlisthValuesRecur = (head)=>{
    const results = [];
    fillValues(head, results)
    return results;
}

const fillValues = (head, values) =>{
    // base case
    if(head === null) return;
    values.push(head.val)
    fillValues(head.next, values)
}

console.log(linkedlisthValuesRecur(a))