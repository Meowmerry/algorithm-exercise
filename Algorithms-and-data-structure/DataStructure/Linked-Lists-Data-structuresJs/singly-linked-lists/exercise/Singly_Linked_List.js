class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}
class SingleLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val) {
        let newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
}

const list = new SingleLinkedList()
list.push(10);
list.push(20);
list.push(30);
//list.pop()
console.log(list)