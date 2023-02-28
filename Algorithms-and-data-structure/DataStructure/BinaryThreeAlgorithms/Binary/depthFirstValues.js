/* 
depth first values
Write a function, depthFirstValues, that takes in the root of a binary tree. The function should return an array containing all values of the tree in depth-first order.

Hey. This is our first binary tree problem, so you should be liberal with watching the Approach and Walkthrough. Be productive, not stubborn. -AZ


*/
class Node {
  constructor(val) {
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

const depthFirstValues = (root) => {
  // todo

  // check eade case
  if (root === null) return [];
  const result = [];
  // initailize stack with the root node
  const stack = [root]; // the end of the stack array to represent the top of the stack
  // will runing stuff by check while stack length grather than 0
  while (stack.length > 0) {
    const current = stack.pop();
    result.push(current.val);
    if (current.right) stack.push(current.right);
    if (current.left) stack.push(current.left);
  }
  return result;
};

console.log(depthFirstValues(a));
//    -> ['a', 'b', 'd', 'e', 'c', 'f']

const depthFirstValuesRecursive = (root) => {
    if (root === null) return [];
    const leftValues = depthFirstValuesRecursive(root.left);
    const rightValues = depthFirstValuesRecursive(root.right);
    return [root.val, ...leftValues, ...rightValues]
};

console.log(depthFirstValuesRecursive(a));
