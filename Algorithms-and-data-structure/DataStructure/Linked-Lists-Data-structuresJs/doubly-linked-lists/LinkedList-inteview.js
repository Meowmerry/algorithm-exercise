/*
Linked List
1. Write a program to reverse a linked list
Input: A linked list like this LinkedList = 0->1->2->3-4
Output: A reverse linked list LinkedList = 4->3->2->1->0
*/

class Node {
    constructor(data) {
        this.data = data
        this.nextElement = null
    }
}
class LinkedList {
    constructor() {
        this.head = null
    }
    //Insertion At Head  
    insertAtHead(newData) {
        let tempNode = new Node(newData)
        tempNode.nextElement = this.head
        this.head = tempNode
        return this //returning the updated list
    }
    isEmpty() {
        return (this.head == null)
    }
    // to print the linked lis => t
    printList() {
        if (this.isEmpty()) {
            console.log("Empty List")
            return false
        } else {
            let temp = this.head
            while (temp != null) {
                process.stdout.write(String(temp.data))
                process.stdout.write(" -> ")
                temp = temp.nextElement
            }
            console.log("null")
            return true
        }
    }
    getHead() {
        return this.head
    }
    setHead(newHead) {
        this.head = newHead
        return this
    }
    getListStr() {
        if (this.isEmpty()) {
            console.log("Empty List")
            return "null"
        } else {
            let st = ""
            let temp = this.head
            while (temp != null) {
                st += String(temp.data)
                st += " -> "
                temp = temp.nextElement
            }
            st += "null"
            return st
        }
    }
    insertAtTail(newData) {
        //Creating a new Node with data as newData
        let node = new Node(newData)
        //check for case when list is empty
        if (this.isEmpty()) {
            //Needs to Insert the new node at Head
            this.head = node
            return this
        }
        //Start from head
        let currentNode = this.head
        //Iterate to the last element
        while (currentNode.nextElement != null) {
            currentNode = currentNode.nextElement
        }
        //Make new node the nextElement of last node of list
        currentNode.nextElement = node
        return this
    }
    search(value) {
        //Start from the first element
        let currentNode = this.head
        //Traverse the list until you find the value or reach the end
        while (currentNode != null) {
            if (currentNode.data == value) {
                return true //value found
            }
            currentNode = currentNode.nextElement
        }
        return false //value not found
    }
    deleteAtHead() {
        //if list is empty, do nothing
        if (this.isEmpty()) {
            return this
        }
        //Get the head and first element of the list
        let firstElement = this.head
        //If list is not empty, link head to the nextElement of firstElement
        this.head = firstElement.nextElement
        return this
    }
    deleteVal(value) {
        let deleted = null //True or False
        //Write code here
        //if list is empty return false
        if (this.isEmpty()) {
            return false
        }
        //else get pointer to head
        let currentNode = this.head
        // if first node's is the node to be deleted, delete it and return true
        if (currentNode.data == value) {
            this.head = currentNode.nextElement
            return true
        }
        // else traverse the list
        while (currentNode.nextElement != null) {
            // if a node whose next node has the value as data, is found, delete it from the list and return true
            if (currentNode.nextElement.data == value) {
                currentNode.nextElement = currentNode.nextElement.nextElement
                return true
            }
            currentNode = currentNode.nextElement
        }
        //else node was not found, return false
        deleted = false
        return deleted
    }
    deleteAtTail() {
        // check for the case when linked list is empty
        if (this.isEmpty()) {
            return this
        }
        //if linked list is not empty, get the pointer to first node
        let firstNode = this.head
        //check for the corner case when linked list has only one element
        if (firstNode.nextElement == null) {
            this.deleteAtHead()
            return this
        }
        //otherwise traverse to reach second last node
        while (firstNode.nextElement.nextElement != null) {
            firstNode = firstNode.nextElement
        }
        //since you have reached second last node, just update its nextElement pointer to point at null, skipping the last node
        firstNode.nextElement = null
        return this
    }
}
//Access HeadNode => list.getHead()
//Set the value of HeadNode => list.getHead()
//Check if list is empty => list.isEmpty()
//Insert at head => list.insertAtHead(value)
//Delete at head => list.deleteAtHead()
//Insert at tail => list.insertAtTail(value)
//Search for element => list.search(value)
//Delete by value => list.deleteVal(value)
//Node class { data  Node nextElement}
const reverse = (list) => {
    let previousNode = null
    let currentNode = list.getHead() // The current node
    let nextNode = null // The next node in the list
    //Reversal
    while (currentNode != null) {
        nextNode = currentNode.nextElement //stores the current node’s nextElement in next
        currentNode.nextElement = previousNode // Set current node’s nextElement to previous
        previousNode = currentNode // Make the current node the new previous for the next iteration
        currentNode = nextNode // Use next to go to the next node
    }
    //Set the last element as the new head node
    list.setHead(previousNode)
}
let list = new LinkedList()
list.insertAtHead(4)
list.insertAtHead(9)
list.insertAtHead(6)
list.insertAtHead(1)
list.insertAtHead(0)
list.printList()
reverse(list)
list.printList()