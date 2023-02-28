// do not use any native array methods
function Queue() {
    this.storage = {};
    // this.head = 0;
    // this.tail = 0;
    this.index = 0;

}

Queue.prototype.enqueue = function (value) {
    // this.storage[this.tail] = value;
    // this.tail += 1;
    this.storage[this.index++] = value;
};

Queue.prototype.dequeue = function () {
    // if (this.storage[this.head] === undefined) return undefined;
    // const remove = this.storage[this.head];
    // delete this.storage[this.head];
    // this.head += 1;
    // return remove;


    // CS -  SOLUTION 
    // 
    if (this.index <= 0) return undefined;

    // store the 0th index (first) item in the queue & delete it
    let stored = this.storage[0];
    delete this.storage[0];

    // type cohersion in play so key can be both a string and a number => which allows us to use math operation 
    // reassign  the values to the new 
    for (let key in this.storage) this.storage[key - 1] = this.storage[key];

    delete this.storage[this.index - 1]

    this.index--;

    return stored;
};
const queue = new Queue()
queue.enqueue(0);
queue.enqueue(1);
queue.enqueue(2);
queue.dequeue()
console.log(queue) 