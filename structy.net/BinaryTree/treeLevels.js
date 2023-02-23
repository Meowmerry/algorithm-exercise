/*
tree levels
Write a function, treeLevels, that takes in the root of a binary tree. 
The function should return a 2-Dimensional array where each subarray represents a level of the tree.

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


/* 
breadth first (iterative) --> queue
n = number of nodes
Time: O(n)
Space: O(n)

*/
const treeLevels = (root)=>{
  if(root === null) return [];
  if(root.left === null && root.right === null) return [[root]];

  const levels = [];
  const queue = [{node: root, levelsNum : 0}];

   while(queue.length > 0){
    const {node, levelsNum} = queue.shift();

    if(levels.length === levelsNum){
       levels[levelsNum] = [node.val]
    }else{
      levels[levelsNum].push(node.val)
    }

    if(node.left !== null) queue.push({node: node.left, levelsNum: levelsNum + 1});
    if(node.right !== null) queue.push({node: node.right, levelsNum: levelsNum + 1});


   }

   return levels;
}

console.log(treeLevels(a)); // ->
// [
//   ['a'],
//   ['b', 'c'],
//   ['d', 'e', 'f']
// ]

/* 
dreadth first (Recursive) --> Stack
n = number of nodes
Time: O(n)
Space: O(n)

*/
const treeLevelsRecurrsive = (root)=>{
  const levels = [];
  _treeLevelsRecurrsive(root, levels, 0)
  return levels;

}

const _treeLevelsRecurrsive = (root, levels, levelNum)=>{
  if(root === null) return;

  if(levels.length === levelNum){
    levels[levelNum] = [root.val];
  }else{
    levels[levelNum].push(root.val)
  }
  _treeLevelsRecurrsive(root.left, levels, levelNum +1);
  _treeLevelsRecurrsive(root.right, levels, levelNum +1);
}


console.log(treeLevelsRecurrsive(a)); // ->