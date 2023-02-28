/* 
linked list values
Write a function, linkedListValues, that takes in the head of a linked list as an argument. 
The function should return an array containing all values of the nodes in the linked list.

Hey. This is our first linked list problem, so you should be liberal with watching the Approach and Walkthrough. 
Be productive, not stubborn. -AZ

*/
// set node strucure
class Node {
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

// link each node to each other
const a = new Node('A');
const b = new Node('B');
const c = new Node('C');
const d = new Node('D');

// set next node 
a.next = b;
b.next = c;
c.next = d;

// n = number of nodes
// Time: O(n)
// Space: O(n)
const linkedlisthValues = (head)=>{
    const values = []
     let current = head;
     while(current !== null){
        values.push(current.val)
        current = current.next;

     }
     return values;
}

// n = number of nodes
// Time: O(n)
// Space: O(n)
const linkedlisthValuesRecur = (head)=>{
    const values = []
    fillValues(head, values)
    return values;
}
const fillValues = (head, values)=>{
    if(head === null) return;
    values.push(head.val);
    fillValues(head.next, values);

}
console.log(linkedlisthValuesRecur(a))