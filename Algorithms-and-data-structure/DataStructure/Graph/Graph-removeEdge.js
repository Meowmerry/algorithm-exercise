/* 
Graph
1. Remove Edge
Implement the program to take a graph data that includes source and destination. It should also detect if there’s an edge between them or not.
Input: A graph, a source, and a destination


Output: A graph with the edge between the source and the destination removed.
removeEdge(graph, 2, 3)
*/
class Node {
    constructor(data) {
        this.data = data
        this.nextElement = null
    }
}
class LinkedList {
    constructor() {
        this.head = null;
    }
    //Insertion At Head  
    insertAtHead(newData) {
        let tempNode = new Node(newData);
        tempNode.nextElement = this.head;
        this.head = tempNode;
        return this; //returning the updated list
    }
    isEmpty() {
        return (this.head == null);
    }
    //function to print the linked list
    printList() {
        if (this.isEmpty()) {
            console.log("Empty List");
            return false;
        } else {
            let temp = this.head;
            while (temp != null) {
                process.stdout.write(String(temp.data));
                process.stdout.write(" -> ");
                temp = temp.nextElement;
            }
            console.log("null");
            return true;
        }
    }
    getHead() {
        return this.head;
    }
    setHead(newHead) {
        this.head = newHead;
        return this;
    }
    getListStr() {
        if (this.isEmpty()) {
            console.log("Empty List");
            return "null";
        } else {
            let st = "";
            let temp = this.head
            while (temp != null) {
                st += String(temp.data);
                st += " -> ";
                temp = temp.nextElement;
            }
            st += "null";
            return st;
        }
    }
    insertAtTail(newData) {
        //Creating a new Node with data as newData
        let node = new Node(newData);
        //check for case when list is empty
        if (this.isEmpty()) {
            //Needs to Insert the new node at Head
            this.head = node;
            return this;
        }
        //Start from head
        let currentNode = this.head;
        //Iterate to the last element
        while (currentNode.nextElement != null) {
            currentNode = currentNode.nextElement;
        }
        //Make new node the nextElement of last node of list
        currentNode.nextElement = node;
        return this;
    }
    search(value) {
        //Start from the first element
        let currentNode = this.head;
        //Traverse the list until you find the value or reach the end
        while (currentNode != null) {
            if (currentNode.data == value) {
                return true; //value found
            }
            currentNode = currentNode.nextElement
        }
        return false; //value not found
    }
    deleteAtHead() {
        //if list is empty, do nothing
        if (this.isEmpty()) {
            return this;
        }
        //Get the head and first element of the list
        let firstElement = this.head;
        //If list is not empty, link head to the nextElement of firstElement
        this.head = firstElement.nextElement;
        return this;
    }
    deleteVal(value) {
        let deleted = null; //True or False
        //Write code here
        //if list is empty return false
        if (this.isEmpty()) {
            return false;
        }
        //else get pointer to head
        let currentNode = this.head;
        // if first node's is the node to be deleted, delete it and      return true
        if (currentNode.data == value) {
            this.head = currentNode.nextElement;
            return true;
        }
        // else traverse the list
        while (currentNode.nextElement != null) {
            // if a node whose next node has the value as data, is found, delete it from the list and return true
            if (currentNode.nextElement.data == value) {
                currentNode.nextElement = currentNode.nextElement.nextElement;
                return true;
            }
            currentNode = currentNode.nextElement;
        }
        //else node was not found, return false
        deleted = false;
        return deleted;
    }
    deleteAtTail() {
        // check for the case when linked list is empty
        if (this.isEmpty()) {
            return this;
        }
        //if linked list is not empty, get the pointer to first node
        let firstNode = this.head;
        //check for the corner case when linked list has only one element
        if (firstNode.nextElement == null) {
            this.deleteAtHead();
            return this;
        }
        //otherwise traverse to reach second last node
        while (firstNode.nextElement.nextElement != null) {
            firstNode = firstNode.nextElement;
        }
        //since you have reached second last node, just update its   nextElement pointer to point at null, skipping the last node
        firstNode.nextElement = null;
        return this;
    }
}
class Graph {
    constructor(vertices) {

        this.vertices = vertices

        this.list = []

        let it
        for (it = 0; it < vertices; it++) {
            let temp = new LinkedList()
            this.list.push(temp)
        }
    }
    addEdge(source, destination) {
        if (source < this.vertices && destination < this.vertices)

            this.list[source].insertAtHead(destination)

        return this
    }
    printGraph() {
        console.log(">>Adjacency List of Directed Graph<<")
        let i
        for (i = 0; i < this.list.length; i++) {
            process.stdout.write("|" + String(i) + "| => ")
            let temp = this.list[i].getHead()
            while (temp != null) {
                process.stdout.write("[" + String(temp.data) + "] -> ")
                temp = temp.nextElement
            }
            console.log("null ")
        }
    }
    strGraph() {
        let str = ""
        let i
        for (i = 0; i < this.list.length; i++) {
            str = str + "|" + String(i) + "| => "
            let temp = this.list[i].getHead()
            while (temp != null) {
                str += ("[" + String(temp.data) + "] -> ")
                temp = temp.nextElement
            }
            str += "null "
        }
        return str
    }
}
const removeEdge = (graph, source, dest) => {
    if (graph.list.length == 0) {
        return graph
    }

    if (source >= graph.list.length || source < 0) {
        return graph
    }

    if (dest >= graph.list.length || dest < 0) {
        return graph
    }

    graph.list[source].deleteVal(dest)
    return graph
}
let g = new Graph(5)
g.addEdge(0, 1)
g.addEdge(0, 2)
g.addEdge(1, 3)
g.addEdge(2, 4)
g.addEdge(4, 0)
console.log("Before removing edge")
g.printGraph()
removeEdge(g, 1, 3)
console.log("\nAfter removing edge")
g.printGraph()