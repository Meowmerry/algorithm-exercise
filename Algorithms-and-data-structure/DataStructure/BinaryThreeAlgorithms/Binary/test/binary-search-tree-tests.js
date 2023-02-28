describe('Binary Search Tree', function () {
  var binarySearchTree;

  beforeEach(function () {
    binarySearchTree = new BinarySearchTree(5);
  });

  it('should have methods named "add", "contains", "depthFirstPre", "depthFirstIn", "depthFirstPost", "breadthFirst"', function () {
    expect(binarySearchTree.add).to.be.a("function");
    expect(binarySearchTree.contains).to.be.a("function");
    expect(binarySearchTree.depthFirstIn).to.be.a("function");
    expect(binarySearchTree.depthFirstPost).to.be.a("function");
    expect(binarySearchTree.depthFirstPre).to.be.a("function");
    expect(binarySearchTree.breadthFirst).to.be.a("function");
  });

  it('should add values at the correct location in the tree', function () {
    binarySearchTree.add(2);
    binarySearchTree.add(3);
    binarySearchTree.add(7);
    binarySearchTree.add(6);
    expect(binarySearchTree.left.right.value).to.equal(3);
    expect(binarySearchTree.right.left.value).to.equal(6);
  });

  it('should have a working "contains" method', function () {
    binarySearchTree.add(2);
    binarySearchTree.add(3);
    binarySearchTree.add(7);
    expect(binarySearchTree.contains(7)).to.equal(true);
    expect(binarySearchTree.contains(8)).to.equal(false);
  });

  it('should execute a callback on every value in a tree using "depthFirstPre"', function () {
    var array = [];
    var func = function (value) { array.push(value); };
    binarySearchTree.add(2);
    binarySearchTree.add(3);
    binarySearchTree.add(7);
    binarySearchTree.add(6);
    binarySearchTree.depthFirstPre(func);
    expect(array).to.eql([5, 2, 3, 7, 6]);
  });

  it('should execute a callback on every value in a tree using "depthFirstIn"', function () {
    var array = [];
    var func = function (value) { array.push(value); };
    binarySearchTree.add(2);
    binarySearchTree.add(3);
    binarySearchTree.add(7);
    binarySearchTree.add(6);
    binarySearchTree.depthFirstIn(func);
    expect(array).to.eql([2, 3, 5, 6, 7]);
  });

  it('should execute a callback on every value in a tree using "depthFirstPost"', function () {
    var array = [];
    var func = function (value) { array.push(value); };
    binarySearchTree.add(2);
    binarySearchTree.add(3);
    binarySearchTree.add(7);
    binarySearchTree.add(6);
    binarySearchTree.depthFirstPost(func);
    expect(array).to.eql([3, 2, 6, 7, 5]);
  });

  it('should execute a callback on every value in a tree using "breadthFirst"', function () {
    var array = [];
    var func = function (value) { array.push(value); };
    binarySearchTree.add(2);
    binarySearchTree.add(3);
    binarySearchTree.add(7);
    binarySearchTree.add(6);
    binarySearchTree.breadthFirst(func);
    expect(array).to.eql([5, 2, 7, 3, 6]);
  });

  // remove x to enable test
  xit('height method should return correct height', function () {
    binarySearchTree.left = new BinarySearchTree(3);
    binarySearchTree.left.left = new BinarySearchTree(1);
    expect(binarySearchTree.height()).to.eql(2);

    binarySearchTree.left.left.right = new BinarySearchTree(2);
    expect(binarySearchTree.height()).to.eql(3);

    binarySearchTree.left.left.left = new BinarySearchTree(0);
    expect(binarySearchTree.height()).to.eql(3);

    binarySearchTree.right = new BinarySearchTree(8);
    expect(binarySearchTree.height()).to.eql(3);
  });

  // remove x to enable test
  // Note: Make sure your height function works before running this test
  xit('tree should be self-balancing', function () {
    binarySearchTree.add(7);
    binarySearchTree.add(9);
    expect(binarySearchTree.height()).to.eql(1);
    binarySearchTree.add(11);
    binarySearchTree.add(13);
    binarySearchTree.add(15);
    binarySearchTree.add(5);
    binarySearchTree.add(12);
    expect(binarySearchTree.height()).to.eql(2);
  });
});


describe('Binary Search Tree CS - Solution', function () {
  var binarySearchTree;

  beforeEach(function () {
    binarySearchTree = new BinarySearchTree(5);
  });

  it('should have methods named "add", "contains", "depthFirstPre", "depthFirstIn", "depthFirstPost", "breadthFirst"', function () {
    expect(binarySearchTree.add).to.be.a("function");
    expect(binarySearchTree.contains).to.be.a("function");
    expect(binarySearchTree.depthFirstIn).to.be.a("function");
    expect(binarySearchTree.depthFirstPost).to.be.a("function");
    expect(binarySearchTree.depthFirstPre).to.be.a("function");
    expect(binarySearchTree.breadthFirst).to.be.a("function");
  });

  it('should add values at the correct location in the tree', function () {
    binarySearchTree.add(2);
    binarySearchTree.add(3);
    binarySearchTree.add(7);
    binarySearchTree.add(6);
    expect(binarySearchTree.left.right.value).to.equal(3);
    expect(binarySearchTree.right.left.value).to.equal(6);
  });

  it('should have a working "contains" method', function () {
    binarySearchTree.add(2);
    binarySearchTree.add(3);
    binarySearchTree.add(7);
    expect(binarySearchTree.contains(7)).to.equal(true);
    expect(binarySearchTree.contains(8)).to.equal(false);
  });

  it('should execute a callback on every value in a tree using "depthFirstPre"', function () {
    var array = [];
    var func = function (value) { array.push(value); };
    binarySearchTree.add(2);
    binarySearchTree.add(3);
    binarySearchTree.add(7);
    binarySearchTree.add(6);
    binarySearchTree.depthFirstPre(func);
    expect(array).to.eql([5, 2, 3, 7, 6]);
  });

  it('should execute a callback on every value in a tree using "depthFirstIn"', function () {
    var array = [];
    var func = function (value) { array.push(value); };
    binarySearchTree.add(2);
    binarySearchTree.add(3);
    binarySearchTree.add(7);
    binarySearchTree.add(6);
    binarySearchTree.depthFirstIn(func);
    expect(array).to.eql([2, 3, 5, 6, 7]);
  });

  it('should execute a callback on every value in a tree using "depthFirstPost"', function () {
    var array = [];
    var func = function (value) { array.push(value); };
    binarySearchTree.add(2);
    binarySearchTree.add(3);
    binarySearchTree.add(7);
    binarySearchTree.add(6);
    binarySearchTree.depthFirstPost(func);
    expect(array).to.eql([3, 2, 6, 7, 5]);
  });

  it('should execute a callback on every value in a tree using "breadthFirst"', function () {
    var array = [];
    var func = function (value) { array.push(value); };
    binarySearchTree.add(2);
    binarySearchTree.add(3);
    binarySearchTree.add(7);
    binarySearchTree.add(6);
    binarySearchTree.breadthFirst(func);
    expect(array).to.eql([5, 2, 7, 3, 6]);
  });

  // remove x to enable test
  xit('height method should return correct height', function () {
    binarySearchTree.left = new BinarySearchTree(3);
    binarySearchTree.left.left = new BinarySearchTree(1);
    expect(binarySearchTree.height()).to.eql(2);

    binarySearchTree.left.left.right = new BinarySearchTree(2);
    expect(binarySearchTree.height()).to.eql(3);

    binarySearchTree.left.left.left = new BinarySearchTree(0);
    expect(binarySearchTree.height()).to.eql(3);

    binarySearchTree.right = new BinarySearchTree(8);
    expect(binarySearchTree.height()).to.eql(3);
  });

  // remove x to enable test
  // Note: Make sure your height function works before running this test
  xit('tree should be self-balancing', function () {
    binarySearchTree.add(7);
    binarySearchTree.add(9);
    expect(binarySearchTree.height()).to.eql(1);
    binarySearchTree.add(11);
    binarySearchTree.add(13);
    binarySearchTree.add(15);
    binarySearchTree.add(5);
    binarySearchTree.add(12);
    expect(binarySearchTree.height()).to.eql(2);
  });
});