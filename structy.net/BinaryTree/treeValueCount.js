/*
tree value count
Write a function, treeValueCount, that takes in the root of a binary tree and a target value. 
The function should return the number of times that the target occurs in the tree.

*/

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}
const a = new Node(12);
const b = new Node(6);
const c = new Node(6);
const d = new Node(4);
const e = new Node(6);
const f = new Node(12);
const g = new Node(1)

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;
e.right = g


//      12
//    /   \
//   6     6
//  / \     \
// 4   6     12
//      \
//       1

/* ======================================   depth first (iterative) ======================================

n = number of nodes
Time: O(n)
Space: O(n)
*/
const treeValueCount = (root, target)=>{
    if(root === null) return 0;
    let count = 0;
    const stack = [root];
    while(stack.length > 0) {
        const current = stack.pop();
        if(current.val === target) count +=1;
        if(current.left !== null) stack.push(current.left)
        if(current.right !== null) stack.push(current.right)
    }
    return count;
}
// console.log(treeValueCount(a,  6)); // -> 3
// console.log(treeValueCount(a,  12)); // -> 2
// console.log(treeValueCount(a, 1)); // -> 1
// console.log(treeValueCount(a, 9)); // -> 0
// console.log(treeValueCount(null, 42)); // -> 0



/* 
====================================== depth first (recursive) ======================================
n = number of nodes
Time: O(n)
Space: O(n)
*/
const treeValueCountRecursive = (root, target)=>{
    if(root === null) return 0;
    const count = root.val === target ? 1 : 0;
    return count + treeValueCountRecursive(root.left, target) + treeValueCountRecursive(root.right , target)
   
}
console.log(treeValueCountRecursive(a,  6)); // -> 3
console.log(treeValueCountRecursive(a,  12)); // -> 2
console.log(treeValueCountRecursive(a, 1)); // -> 1
console.log(treeValueCountRecursive(a, 9)); // -> 0
console.log(treeValueCountRecursive(null, 42)); // -> 0



/*  ======================================  breadth first  ====================================== 
breadth first
n = number of nodes
Time: O(n)
Space: O(n)
*/
const treeValueCounBreadth = (root, target)=>{
    if(root === null) return 0;
    let count = 0;
    const queue = [root];
    while(queue.length > 0) {
        const current = queue.shift();
        if(current.val === target) count +=1;
        if(current.left !== null) queue.push(current.left)
        if(current.right !== null) queue.push(current.right)
    }
    return count;
    
}
// console.log(treeValueCounBreadth(a,  6)); // -> 3
// console.log(treeValueCounBreadth(a,  12)); // -> 2
// console.log(treeValueCounBreadth(a, 1)); // -> 1
// console.log(treeValueCounBreadth(a, 9)); // -> 0
// console.log(treeValueCounBreadth(null, 42)); // -> 0

