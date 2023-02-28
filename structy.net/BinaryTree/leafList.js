/* 
leaf list
Write a function, leafList, that takes in the root of a binary tree 
and returns an array containing the values of all leaf nodes in left-to-right order.
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
/* 
const leafList = (root) => {
  const levels = [];
  fillList(root,levels, 0)
  
  return levels[levels.length - 1];
};

const fillList = (root, levels, levelNum) => {
    if(!root) return [];
    if(levels.length === levelNum){
        levels.push([root.val]);
        // levels[levelNum] = [root.val];

    }else{
        levels[levelNum].push(root.val)
    }
    fillList(root.left, levels, levelNum + 1);
    fillList(root.right, levels, levelNum + 1);

};
//      a
//    /   \
//   b     c
//  / \     \
// d   e     f
console.log(leafList(a)); // -> [ 'd', 'e', 'f' ]
*/
/* 
depth first (iterative)
n = number of nodes
Time: O(n)
Space: O(n)

*/
const leafList = (root) => {
    if(root === null) return [];

    const results = [];
    const stack = [root];
    while(stack.length > 0){

        const current = stack.pop();
       
        if(current.right === null && current.left ===null)
        results.push(current.val)
        if(current.right !== null) stack.push(current.right);
        if(current.left !== null) stack.push(current.left);
       
      
    }
    return results;

};

console.log(leafList(a)); // -> [ 'd', 'e', 'f' ]


/* 
depth first (recurrsive)
n = number of nodes
Time: O(n)
Space: O(n)
*/

const leafListRecurrsive = (root) => {
    const results = [];
    filllLeafList(root,results)
    return results;

};
const filllLeafList = (root, results)=>{
    if(root === null) return [];
    if(root.left === null && root.right === null) results.push(root.val)
    filllLeafList(root.left, results)
    filllLeafList(root.right, results)
}

console.log(leafListRecurrsive(a)); // -> [ 'd', 'e', 'f' ]
