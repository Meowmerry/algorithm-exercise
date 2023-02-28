/* 
Write a function, sumList, that takes in the head of a linked list containing numbers as an argument. 
The function should return the total sum of all values in the linked list.
*/
class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}
const a = new Node(2);
const b = new Node(8);
const c = new Node(3);
const d = new Node(-1);
const e = new Node(7);

a.next = b;
b.next = c;
c.next = d;
d.next = e;


const sumList = (head)=>{ // Time Complexity O(n), Space = O(1) becasue have only sum and curr to check
    let sum = 0;
    let curr = head;
    while(curr !== null){
        sum += curr.val;
        curr = curr.next;
    }
    return sum;
}
console.log(sumList(a)) 
const sumListRecur1 = (head, sum = 0)=>{ // Time Complexity O(n), Space = O(1) becasue have only sum and curr to check
   if(head === null) return sum;
   sum += head.val;
   return sumListRecur1(head.next, sum)
}
console.log(sumListRecur1(a)) 

const sumListRecur2 = (head)=>{ // Time Complexity O(n), Space = O(1) becasue have only sum and curr to check
    if(head === null) return 0;
    return head.val + sumListRecur2(head.next)
   
 }
 console.log(sumListRecur2(a)) 
