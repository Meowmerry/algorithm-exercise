/**
 *
 * First, create a Stack which contains the following methods:
 * - push: add value to top (end) of stack
 * - pop: remove value from top (end) of stack
 *
 * Second, create a Queue which consists of two stacks: stack1 and stack2
 * and contains the following methods:
 * - enqueue: add value to queue
 * - dequeue: remove value from queue
 * Queue methods should follow First In, First Out rule.
 *
 * DO NOT USE NATIVE JS METHODS
 *
 */

function Stack() {}
Stack.prototype.push = function (value) {};

Stack.prototype.pop = function () {};

function Queue() {}

module.exports = { Stack, Queue };

const myStack = new Stack();
console.log(myStack.push(1));
// console.log(myStack.push(2))
// console.log(myStack.push(3))
// console.log(myStack.pop())
