/*
Write the function solution which creates and returns the binary tree:

    3
  /  \
1      5
      /
    4
Clarifications

You should ignore the input arg1
This function should always return the same output

[execution time limit] 4 seconds (js)

[input] integer arg1

[output] tree.integer
*/
// Binary trees are already defined with this interface:
class TreeNode {
  constructor(val){
    this.value = val;
    this.left = null;
    this.right = null;
  }
}
function returnTreeNode(arg1) {
  let root = new TreeNode(1);
  root.left = new TreeNode(2);
  root.right = new TreeNode(3);
  root.left.left = new TreeNode(4);
  root.left.right = new TreeNode(5);
  root.right.left = new TreeNode(6);
  root.right.right = new TreeNode(7)
  
  return root;
}
console.log(returnTreeNode())