/*
tree path finder
Write a function, pathFinder, that takes in the root of a binary tree and a target value. 
The function should return an array representing a path to the target value. 
If the target value is not found in the tree, then return null.

You may assume that the tree contains unique values.

*/

//      a
//    /   \
//   b     c
//  / \     \
// d   e     f
/* 

depth first
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

const pathFinder = (root, target) => {
  // base case
  if (root === null) return null;
  // if root value is equal to target return [ root.val]
  if (root.val === target) return [root.val];

  // recuresive:
  // declare a varialbe leftPath, call the pathFinder and pass left value and target
  const leftPath = pathFinder(root.left, target);
  // check if leftPath is not equal to null, return the rest of current and leftPath
  if (leftPath !== null) return [root.val, ...leftPath];

  // declare a varialbe rigthPath, call the pathFinder and pass rigth value and target
  const rightPath = pathFinder(root.right, target);
  // check if rigthPath is not equal to null, return the rest of current and rigthPath
  if (rightPath !== null) return [root.val, ...rightPath];

  return null;
};

// console.log(pathFinder(a, "e")); // -> [ 'a', 'b', 'e' ]
// console.log(pathFinder(a, "f")); // -> [ 'a', 'c', 'f' ]
// console.log(pathFinder(a, "a")); // -> [ 'a' ]
// console.log(pathFinder(a, "o")); // -> null

/* 
depth first w/ push
n = number of nodes
Time: O(n)
Space: O(n)
*/

const pathFinderW = (root, target) => {

  const result = pathFinderHelper(root, target);

  if (result === null) return null;

  else return result.reverse();

};

const pathFinderHelper = (root, target) => {

  if (root === null) return null;
  if (root.val === target) return [root.val];

  const leftPath = pathFinderHelper(root.left, target);

  if (leftPath !== null) {
    leftPath.push(root.val);
    //console.log('leftPath', leftPath)
    return leftPath;
  }

  const rightPath = pathFinderHelper(root.right, target);
  if (rightPath !== null) {
    rightPath.push(root.val);
    return rightPath;
  }

  return null;
};

console.log(pathFinderW(a, "e")); // -> [ 'a', 'b', 'e' ]
// console.log(pathFinderW(a, "f")); // -> [ 'a', 'c', 'f' ]
// console.log(pathFinderW(a, "a")); // -> [ 'a' ]
// console.log(pathFinderW(a, "o")); // -> null
