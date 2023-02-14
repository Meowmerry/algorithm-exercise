class Node {
    constructor(val) {
      this.val = val;
      this.left = null;
      this.right = null;
    }
  }
  
  /* * 
  * breadth first (iterative)
  n = number of nodes
  Time: O(n)
  pace: O(n)
  n = number of nodes
Time: O(n)
Space: O(n)
Note: this solution should really be considered O(n^2) runtime because the JavaScript shift() methods runs in O(n). 
JavaScript does not have a native queue data structure that is maximally efficient.
  */
  const treeMinValue = (root) => { // 
    if(root === null) return 0;
    let min = Infinity;
    const queue = [root];
    while(queue.length > 0){
       const current = queue.shift();
       if(current.val < min) min = current.val;
       if(current.left !== null) queue.push(current.left);
       if(current.right !== null)  queue.push(current.right)
    }
  
    return min;
  };
  const a = new Node(3);
  const b = new Node(11);
  const c = new Node(4);
  const d = new Node(4);
  const e = new Node(-2);
  const f = new Node(1);

  a.left = b;
  a.right = c;
  b.left = d;
  b.right = e;
  c.right = f;

  console.log(treeMinValue(a)) // -> -2

  /* * 
  * depth first (recursive)
  n = number of nodes
  Time: O(n)
  pace: O(n)
  */
  const treeMinValueRecurrsive = (root) => {
    if(root === null) return Infinity;
    const leftMinValues = treeMinValueRecurrsive(root.left)
    const rightMinValues = treeMinValueRecurrsive(root.right)
    return Math.min(root.val, leftMinValues, rightMinValues)
    
  };
  console.log(treeMinValueRecurrsive(a)) // -> -2


 /* * 
  * depth first (recursive)
  n = number of nodes
  Time: O(n)
  pace: O(n)
  */

  const treeMinValueDepthFirstIterative = (root) => {
    const stack = [root];
  
    let smallest = Infinity;
    while (stack.length) {
      const current = stack.pop();
      if (current.val < smallest) smallest = current.val;
  
      if (current.left !== null) stack.push(current.left);
      if (current.right !== null) stack.push(current.right);
    }
    return smallest;
  };