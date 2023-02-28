class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}
class LinkedList {
    constructor() {
        this.head = this.tail = null;
        this.length = 0;
    }
    // add to the end of the list
    push(val) {
        let node = new Node(val);
        let curr;
        if (this.head === null) {
            this.head = node;
            this.tail = this.head;
        } else {
            curr = this.head;
            while (curr.next) {
                curr = curr.next;
            }
            curr.next = node;
            this.tail = curr.next;
        }
        this.length++;
        return this;
    }
    // insertAt(element, index)
    insert(val, index) {
        if (index < 0 || index > this.length) {
            return 'Please enter a valid index.'
        } else {
            let node = new Node(val);
            let curr, prev;
            curr = this.head;
            // add val to at first index
            if (index === 0) {
                node.next = this.head;
                this.head = node;
            } else {
                curr = this.head;
                let i = 0;
                // iterate over the list to find the position of val to insert
                while (i < index) {
                    i++;
                    prev = curr;
                    curr = curr.next;
                }
                // adding the value
                node.next = curr;
                prev.next = node
            }
            this.length++;
            return this;
        }
    }
    // Remove at Index
    removeFrom(index) {
        if (index < 0 || index >= this.length)
            return console.log("Please Enter a valid index");
        else {
            let curr, prev, i = 0;
            curr = this.head;
            prev = curr;
            // delete the at first element
            if (index === 0) this.head = curr.next;
            else {
                // iterate over the list to the position index, and remove the element
                while (i < index) {
                    i++;
                    prev = curr;
                    curr = curr.next;
                }
                // remove the element
                prev.next = curr.next;
            }
            this.length--;
            return curr.val;
        }
    }
    removeElement(val) {
        let curr = this.head;
        let prev = null;
        while (curr !== null) {
            if (curr.val === val) {
                if (prev === null) {
                    this.head = curr.next;
                } else {
                    prev.next = curr.next;
                }
                this.length--;
                return curr.val;
            }
            prev = curr;
            curr = curr.next;
        }
        return -1;
    }
    // finds the index of element
    indexOf(val) {
        let count = 0;
        let current = this.head;

        // iterate over the list
        while (current != null) {
            // compare each element of the list, with given element
            if (current.val === val)
                return count;
            count++;
            current = current.next;
        }

        // not found
        return -1;
    }
    // checks the list for empty
    isEmpty() {
        return this.length == 0;
    }

    // gives the size of the list
    size_of_list() {
        console.log(this.length);
    }
    // prints the list items
    printList() {
        let curr = this.head;
        let str = "";
        while (curr) {
            str += curr.element + " ";
            curr = curr.next;
        }
        console.log(str);
    }
}
const list = new LinkedList();
list.push(10)
list.push(20)
list.push(30)
list.push(40)
list.insert(50, 2)
list.removeFrom(4)
console.log(list)