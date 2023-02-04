/*
get node value
Write a function, getNodeValue, that takes in the head of a linked list and an index. 
The function should return the value of the linked list at the specified index.

If there is no node at the given index, then return null.
// a -> b -> c -> d

getNodeValue(a, 2); // 'c'
test_01:
const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");

a.next = b;
b.next = c;
c.next = d;

// a -> b -> c -> d


*/
class Node{
    constructor(value){
        this.value = value;
        this.next  = null;
    }
}
/*
n = number of nodes
Time: O(n)
Space: O(1)
*/
const getNodeValue = (head, index)=> { // Input will be head and index
    let count = 0;
    let curr = head;
   
    while(curr !== null){
        if(count === index) return curr.value;
        curr = curr.next;
        count +=1;
    }
    // return the value of specific index
    return null;
}
/*
n = number of nodes
Time: O(n)
Space: O(n)
*/
const getNodeValueRecurrsion = (head, index) =>{
    if(head === null) return null;
    if(index === 0) return head.value;
    return getNodeValueRecurrsion(head.next, index - 1)
}
// const a = new Node("a");
// const b = new Node("b");
// const c = new Node("c");
// const d = new Node("d");

// a.next = b;
// b.next = c;
// c.next = d;

// // a -> b -> c -> d
// console.log(getNodeValue(a, 3)); // 'd'
// console.log(getNodeValue(a, 7)); // null

// const node1 = new Node("banana");
// const node2 = new Node("mango");

// node1.next = node2;

// // banana -> mango

// console.log(getNodeValue(node1, 0)); // 'banana'
const node11 = new Node("banana");
const node22 = new Node("mango");

node11.next = node22;
// banana -> mango
console.log(getNodeValue(node22, 1)); // 'mango'