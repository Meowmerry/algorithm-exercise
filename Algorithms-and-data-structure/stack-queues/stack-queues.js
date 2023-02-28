// STACK
// const stack = []

// // push
// stack.push('dog')
// stack.push('cat')
// stack.push('bear')
// // pop
// stack.pop()
// // peek --> stack will loop at the last element in the array
// stack[stack.length - 1]

// console.log(stack)
// console.log(stack[stack.length - 1])


class Stack {
    constructor() {
        this.storage = {}
        this.size = 0
    }
    push(element) {
        this.size++
        this.storage[this.size] = element;

    }
    pop() {
        let removed = this.storage[this.size]
        delete this.storage[this.size]
        this.size--
        return removed
    }
    peek() {
        return this.storage[this.size]
    }

}
const stack = new Stack()

// push
stack.push('dog')
stack.push('cat')
stack.push('bear')
// pop
stack.pop()
// peek --> stack will loop at the last element in the array
stack[stack.length - 1]

console.log(stack)
console.log(stack.peek())


// const queue = []
// // enqueue
// queue.push('a')
// queue.push('b')
// queue.push('c')
// // dequeue ---> NOT deque
// queue.shift()
// console.log(queue) // b, c
class Queue {
    constructor() {
        this.storage = {}
        this.head = 0
        this.tail = 0
    }
    enqueue(element) {
        this.storage[this.tail] = element
        this.tail++
    }
    dequeue() {
        let removed = this.storage[this.head]
        delete this.storage[this.head]
        this.head++
        return removed
    }
}
const queue = new Queue()
queue.enqueue('seahorse')
queue.enqueue('dolphin')
queue.enqueue('whale shark')
queue.dequeue()
queue.dequeue()
console.log(queue) // Queue { storage: { '2': 'whale shark' }, head: 2, tail: 3 }