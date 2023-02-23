/* 
Write a function, howHigh, that takes in the root of a binary tree. 
The function should return a number representing the height of the tree.

The height of a binary tree is defined as the maximal number of edges from the root node to any leaf node.

If the tree is empty, return -1.
*/


class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}
const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
const d = new Node('d');
const e = new Node('e');
const f = new Node('f');

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;


const howHigh = (node) => {
    if(node === null) return -1;
    let leftHeigh = -1;
    let rightHeight = -1;
    const stack = [node];
    while(stack.length > 0){
        const current = stack.pop();
        if(current.left !== null){
            leftHeigh = stack.push(current.left)
        }
        if(current.right !== null) {
            rightHeight = stack.push(current.right)
        }
    }
   return Math.max(leftHeigh, rightHeight) 
  

  };
  

//      a
//    /   \
//   b     c
//  / \     \
// d   e     f

console.log(howHigh(a)); // -> 2
// console.log(howHigh(null)); // -> -1