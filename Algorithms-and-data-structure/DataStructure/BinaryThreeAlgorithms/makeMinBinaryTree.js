/*
Given a sorted array, find a way to make a binary tree with minimal height

*/
class BstNode{
    constructor(val){
        this.val = val;
        this.left = null;
        this.right = null;
    }
}


const makeMinBinaryTree =(arr, currNode = null, side = null)=>{
    const BST = new Node();
    let middle;
      if(arr.length ===0 ) return 0
      else if(arr.length === 1) {
        middle = 0;
      }else{
        middle = Math.floor(arr.length / 2);
      }
      if(currNode === null) {
        currNode = new BstNode(arr[middle]);
      }
      


}

const sorteArr = [0, 1, 2, 3, 4, 5, 6];
console.log(makeMinBinaryTree(sorteArr));