/* 

breadth first values
Write a function, breadthFirstValues, that takes in the root of a binary tree. 
The function should return an array containing all values of the tree in breadth-first order.
    A
   / \
  B   C
 /   / \
D   E   F
A breadth first traversal would visit the node in this order

A, B, C, D, E, F


n = number of nodes
Time: O(n)
Space: O(n)

*/
class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const a = new Node("A");
const b = new Node("B");
const c = new Node("C");
const d = new Node("D");
const e = new Node("E");
const f = new Node("F");

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

const breadthFirstValues = (root) => { // Can't do in Recurssive solution because Recursive under the hood will be Stack 

  const result = [];
  if (root === null) return result;
  const queue = [root];

  while (queue.length > 0) {
    const current = queue.shift();
    result.push(current.val);
    if (current.left !== null) queue.push(current.left);
    if (current.right !== null) queue.push(current.right);
  }
  return result;
};

//      a
//    /   \
//   b     c
//  / \     \
// d   e     f

console.log(breadthFirstValues(a));
//    -> ['a', 'b', 'c', 'd', 'e', 'f']
