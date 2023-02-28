/**
 * LinkedList costructor
 *
 * construct a new linked list
 * you may modify this constructor as needed to achieve the challenges below
 */
function LinkedList() {
    this.head = this.tail = null;
    this.length = 0;
}

/**
 *
 * constructor for node in linked list
 */
function Node(val, prev, next) {
    this.val = val;
    this.prev = prev || null;
    this.next = next || null;
}

/**
 * add - Adds given value to the beginning of the linked list.
 *
 * @param {string|number|boolean} val - value to be stored in linked list
 * @return {number} The new length of the linked list
 */
LinkedList.prototype.add = function (val) {
    const newNode = new Node(val)
    // if no head and tail, set head and tail with value;
    if (!this.head) {
        this.head = this.tail = newNode;
    } else {
        newNode.next = this.head;
        this.head = newNode;
    }
    this.length++;
    return this.length;
};

/**
 * remove - find and delete the first occurrence of a value
 *
 * - If an item with the corresponding value does not exist, return undefined
 *
 * @param {string} val - value to be found and deleted from linked list
 * @return {string|number|boolean} The value deleted from the linked list
 */
LinkedList.prototype.delete = function (val) {

};

/**
 * count - Returns the number of times a given value appears in the linked list
 *
 * @param {string} val - value to find in linked list
 * @return {number} The number of times that value appears in the list
 */
LinkedList.prototype.count = function (val) {

};

// Do not remove!!
module.exports = {
    LinkedList,
    Node
};
const lists = new LinkedList();
lists.add(10)
// lists.delete(12)
lists.add(20)
// lists.add(20)
// lists.add(30)
// lists.add(40)
// lists.count(20)
console.log(lists)