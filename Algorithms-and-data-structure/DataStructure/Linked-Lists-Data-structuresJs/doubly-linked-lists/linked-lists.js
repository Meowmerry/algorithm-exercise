/*
Linked lists has head and tail
Array support direct access
Linked lists support squential access

method ==> indexOf, forEach, search, append, prepend ,element at, delete
*/
class LinkedLists {
    constructor() {
        this.head = this.tail = null
    }
    //add to end of list / tail
    append(value) {
        // if the list is empty
        if (!this.tail) {
            this.head = this.tail = new Node(value)
        } else {
            let oldTail = this.tail
            this.tail = new Node(value)
            oldTail.next = this.tail
            //this.tail.prev = oldTail
        }
    }
    // add to beginning of list / head
    prepend(value) {
        // if the list is empty
        if (!this.head) {
            this.head = this.tail = new Node(value)
        } else {
            let oldHead = this.head
            this.head = new Node(value)
            oldHead.prev = this.head
            this.head.next = oldHead
        }
    }
    deleteHead() {
        // if the list is empty
        if (!this.head) return null
        else {
            let removeHead = this.head
            // if 1 node left
            if (this.head === this.tail) {
                this.head = this.tail = null
            } else {
                this.head = this.head.next
                this.head.prev = null
            }
            return removeHead.value
        }

    }
    deleteTail() {
        // if the list is empty
        if (!this.tail) return null
        else {
            let removeTail = this.tail
            // if 1 node left
            if (this.head === this.tail) {
                this.head = this.tail = null
            } else {
                this.tail = this.tail.prev
                this.tail.next = null
            }
            return removeTail.value
        }
    }
    search(value) {
        let currentNode = this.head
        while (currentNode) {
            if (currentNode.value === value) {
                return currentNode
            }
            currentNode = currentNode.next
        }
        return null
    }

}

class Node {
    constructor(value, prev, next) {
        this.value = value
        this.prev = prev || null
        this.next = next || null
    }
}
let list = new LinkedLists()
list.prepend(1)
list.prepend(2)
list.prepend(3)
console.log(list) //LinkedLists { tail: null, head: null }
// list.prepend(0)
// list.prepend(-1)

//console.log(list.search(1))
//console.log(list.search(3))
// console.log(list.search(999))
// list.deleteHead() // -1
// list.deleteTail() // 3
// list.deleteHead() // 
// list.deleteTail() // 
// list.deleteHead()
// console.log(list) //LinkedLists { tail: null, head: null }