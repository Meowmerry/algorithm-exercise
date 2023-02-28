/*
### Part 2 - Data structures and algorithms

- [ ] Implement a `Stack` class. That uses an object to store a collection of values, and knows its length it should have the `push` and `pop` 
methods.<br>
Remember that the Stack follows a last-in-first-out (LIFO) pattern. Pushing 1, 2, and then 3 means that popping will return 3, 2, then 1. 
**Pushing and popping should both be O(1) constant time complexity**.
- [ ] Implement a method called `forEach` that will pop each value off the stack (in the correct order) and then pass it into a callback. 
When finished, the stack should be empty. Don't forget to update the length! `forEach` does not need to return anything.
- [ ] Using two stacks, implement a Queue. Do not use anything but these stack to store the collection of values.<br>
The queue is first-in-first-out (FIFO). How can you achieve this pattern using two stacks? This does **not** need to be O(1) time.

 */

class Stack {
  constructor() {
    this.stack = {};
    this.length = 0;
  }
  push(element) {
    this.stack[this.length++] = element;
    return this.length;
  }
  pop() {
    if (!this.length) return;
    const poped = this.stack[this.length - 1];
    delete this.stack[this.length - 1];
    this.length--;
    return poped;
  }
  forEach = function (callback) {
    while (this.length > 0) {
      callback(myStack.pop());
    }
  };
}
const myStack = new Stack();
myStack.push(1);
myStack.push(2);
myStack.push(4);
console.log(myStack);
console.log(myStack.pop());
console.log(myStack.pop());
console.log(myStack.pop());
console.log(myStack);

class Queue {
  constructor() {
    this.stack1 = new Stack();
    this.stack2 = new Stack();
  }
  enqueue = function (value) {
    this.stack1.push(value);
    return this.stack1;
  };
  dequeue = function () {
    let result;
    while (this.stack1.length > 0) {
      this.stack2.push(this.stack1.pop());
    }
    result = this.stack2.pop();
    while (this.stack2.length > 0) {
      this.stack1.push(this.stack2.pop());
    }
    return result;
  };
}
const myQueue = new Queue();
console.log(myQueue);
myQueue.enqueue(2);
console.log(myQueue);
myQueue.enqueue(5);
myQueue.enqueue(4);
console.log(myQueue.dequeue());
console.log(myQueue);
