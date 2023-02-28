function BinarySearchTree(value) {
    this.value = value;
    this.right = null;
    this.left = null;
}

//assume value is always a number
//assume left always needs to be less than right child node

BinarySearchTree.prototype.add = function (value) {
    // declare a variable newNode assign to new BinarySearchTree passed in value
    const node = new BinarySearchTree(value)

    //check if the value is greater than (right) of the current and either place it or recursively call add
    if (value > this.value) {
        this.right === null ? this.right = node : this.right.add(value)
    } else {   //check if the value is less than (left) the current and either place or recursively call
        this.left === null ? this.left = node : this.left.add(value)
    }
};

BinarySearchTree.prototype.contains = function (value) {
    if (value === this.value) return true;

    if (value > this.value) {
        if (this.right === null) return false;
        else return this.right.contains(value)
    }

    if (value < this.value) {
        if (this.left === null) return false;
        else return this.left.contains(value)
    }

};

// applies the callback in the order of depth first (preorder)
BinarySearchTree.prototype.depthFirstPre = function (callback) {
    callback(this.value)
    if (this.left) this.left.depthFirstPre(callback)
    if (this.right) this.right.depthFirstPre(callback)
};

// applies the callback in the order of depth first (inorder)
BinarySearchTree.prototype.depthFirstIn = function (callback) {
    if (this.left) this.left.depthFirstIn(callback);
    callback(this.value);
    if (this.right) this.right.depthFirstIn(callback);
};

// applies the callback in the order of depth first (postorder)
BinarySearchTree.prototype.depthFirstPost = function (callback) {
    if (this.left) this.left.depthFirstPost(callback);
    if (this.right) this.right.depthFirstPost(callback);
    callback(this.value);
};

// applies the callback in the order of breath first (level order)
BinarySearchTree.prototype.breadthFirst = function (callback) {
    // create a storge to store nodes when we traverse
    const queue = []

    // initiate callback on head value
    callback(this.value)

    // push right branch then left branch into queue
    if (this.left) queue.push(this.left)
    if (this.right) queue.push(this.right)

    // iterate through queue, call callback on each node
    while (queue.length) {
        let node = queue.shift();
        callback(node.value);
        if (node.right) queue.push(node.right)
        if (node.left) queue.push(node.left)
    }
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