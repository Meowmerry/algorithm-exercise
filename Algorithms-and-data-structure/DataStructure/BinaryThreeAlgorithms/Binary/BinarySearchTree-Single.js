function BinarySearchTree(value) {
  this.value = value;
  this.right = null;
  this.left = null;
}

//assume value is always a number
//assume left always needs to be less than right child node

BinarySearchTree.prototype.add = function (value) {
  // declare a variable newNode assign to new BinarySearchTree passed in value
  const newNode = new BinarySearchTree(value)

  //check if the value is greater than (right) of the current and either place it or recursively call add
  if (value > this.value) {
    if (this.right === null) {
      this.right = newNode
    } else {
      return this.right.add(value)
    }
  }
  //check if the value is less than (left) the current and either place or recursively call
  if (value < this.value) {
    if (this.left === null) {
      this.left = newNode;
    } else {
      return this.left.add(value);
    }
  }
};

BinarySearchTree.prototype.contains = function (value) {
  // declare variable to keep of currentNode
  let currentNode = this;
  // iterate through the nodes as long as currentNode isn't null
  // check to see whether input value is equal to node value, if so return true
  // if not check whether input value is greater than or less than node value, reassign to current node to left or right respectively
  while (currentNode) {
    if (currentNode.value === value) return true;
    if (value > currentNode.value) { // go to rigth
      currentNode = currentNode.right;
    } else {
      currentNode = currentNode.left;
    }
  }
  return false;

};

// applies the callback in the order of depth first (preorder)
BinarySearchTree.prototype.depthFirstPre = function (callback) {

};

// applies the callback in the order of depth first (inorder)
BinarySearchTree.prototype.depthFirstIn = function (callback) {

};

// applies the callback in the order of depth first (postorder)
BinarySearchTree.prototype.depthFirstPost = function (callback) {

};

// applies the callback in the order of breath first (level order)
BinarySearchTree.prototype.breadthFirst = function (callback) {

};

// Extra Bonus
// Return the minimum stored value
BinarySearchTree.prototype.min = function () {

};

// Extra Bonus
// Return the maximum stored value
BinarySearchTree.prototype.max = function () {

};

// Extra Bonus
// Return the height of the tree
BinarySearchTree.prototype.height = function () {

};

// Extra Bonus
// Remove an item from the tree and ensure that the children of the item are properly repositioned
BinarySearchTree.prototype.remove = function (item) {

};



const example = new BinarySearchTree(8);
example.left = new BinarySearchTree(3);
example.right = new BinarySearchTree(10);

console.log('before add(6) ', example);
example.add(6)
console.log('after add(6) ', example)
example.add(4)
console.log('after add(4) ', example)

console.log(example.contains(6))