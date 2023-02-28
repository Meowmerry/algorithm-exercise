/*
breadth first values
Write a function, breadthFirstValues, that takes in the root of a binary tree. 
The function should return an array containing all values of the tree in breadth-first order.
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
const g = new Node('g');
const h = new Node('h');

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;
e.left = g;
f.right = h;

//      a
//    /   \
//   b     c
//  / \     \
// d   e     f
//    /       \
//   g         h

// because breadthFirst use Queue data structure to solve problem, so not normal to have recursive solution
// under the hood of recursive use stack data structure
const breadthFirstValues = (root) => {
  // todo
  // checko if root input null return empty array
  if(root === null) return [];
  // initailize values to store data and return
  const values = []
  // initailize queue and set the root at first valut
  const queue = [root];
  // iterate throuh queue, if queue.length grather then 0
  while(queue.length > 0){
    // set the current value from the queue by get the first element from queue
    const current = queue.shift();
    // store current value to value array
    values.push(current.val)
    // go through left and push to queue
    if(current.left !== null) queue.push(current.left)
    // go through right and push to queue
    if(current.right !== null) queue.push(current.right)
  }
  return values;
};
 
console.log(breadthFirstValues(a)); //   -> ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']

