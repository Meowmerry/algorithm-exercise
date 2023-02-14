/* 
Write a function, treeIncludes, that takes in the root of a binary tree and a target value. 
The function should return a boolean indicating whether or not the value is contained in the tree.

*/
class Node{
    constructor(val){
        this.val = val;
        this.left = null;
        this.right = null;
    }
}
const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");
const e = new Node("e");
const f = new Node("f");
a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;
//      a
//    /   \
//   b     c
//  / \     \
// d   e     f


/* 
* breadth first search
n = number of nodes
Time: O(n)
Space: O(n)
Note: this solution should really be considered O(n^2) runtime because the JavaScript 
shift() methods runs in O(n). 
JavaScript does not have a native queue data structure that is maximally efficient.*/
const treeIncludesBreadthFirst = (root, target)=>{
    if(root === null) return false;
    const queue = [ root ];
    while(queue.length > 0){
        const current = queue.shift(); // breadth first
        if(current.val === target) return true
        if(current.left !== null) queue.push(current.left);
        if(current.right !== null) queue.push(current.right) 
       
    }
    return false;
}
// console.log(treeIncludesBreadthFirst(a, 'e'));// true
// console.log(treeIncludesBreadthFirst(a, "n")); // -> false)

/*
* depth first search
n = number of nodes
Time: O(n)
Space: O(n) */
const treeIncludesDepthFirst = (root, target)=>{
    if(root === null) return false;
    if(root.val === target) return true;
    return treeIncludesDepthFirst(root.left, target ) || treeIncludesDepthFirst(root.right, target) 
   
}
console.log(treeIncludesDepthFirst(a, 'e'));// true
console.log(treeIncludesDepthFirst(a, "n")); // -> false)