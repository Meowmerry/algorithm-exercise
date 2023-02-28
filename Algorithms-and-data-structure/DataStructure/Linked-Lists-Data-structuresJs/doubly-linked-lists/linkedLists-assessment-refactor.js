/**
 * LinkedList costructor
 *
 * construct a new linked list
 * you may modify this constructor as needed to achieve the challenges below
 */
function LinkedList() {
  this.head = null;
  this.tail = null;
  this.length = 0;
}

/**
 *
 * constructor for node in linked list
 */
function Node(val) {
  this.val = val;
  this.next = null;
}

/**
 * add - Adds given value to the beginning of the linked list.
 *
 * @param {string|number|boolean} val - value to be stored in linked list
 * @return {number} The new length of the linked list
 */
LinkedList.prototype.add = function (val) {
  // // this.add()
  // // if the list is empty, set new Node to this.head and this.tail
  // if (!this.head) {
  //   this.head = this.tail = new Node(val)

  //   // otherwise, reassign this.head to new Node
  // } else {
  //   let oldHead = this.head;
  //   this.head = new Node(val);
  //   this.head.nex = oldHead;
  //   oldHead.prev = this.head;
  // }

  const newNode = new Node(val);
  // if the list is empty, set the newNode to be this.head and this.head will be this.tail
  if (!this.head) {
    this.head = newNode;
    this.tail = this.head;
    // otherwise, set newNode next assign to this.head and change this.head to be newNode
  } else {
    newNode.next = this.head;
    this.head = newNode;
  }
  // increment length by 1 and return length
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
  /* 
  // store head node
  let removed = this.head = this.prev = null;
  // if head holds the key, deleted head and changed head
  if (removed !== null && removed.value === val) {
    this.head = removed.next;
    return;
  }
  // Search for the key to be deleted, keep track of
  // the previous node as we need to change removed.next
  while (removed !== null && removed.value !== val) {
    this.head.prev = removed;
    removed = removed.next
  }

  // if val was not present in linked list return undefined
  if (removed === null) return;
  this.prev.next = removed.next;
 
  =================== SOLUTION  REMOVE EVERY VALUE IF FOUND ================
  // if the list is empty do nothing or return undefined
  if (this.head === null && this.tail === null) return;

  // declare currentVal assign to head
  let curr = this.head;
  while (curr) {
    if (curr.val === val) {
      curr = curr.next;
      this.head = curr;
    } else if (curr.next && curr.next.val === val) {
      curr.next = curr.next.next;
    } else {
      curr = curr.next;
    }
  }
  return curr;
   */

  let curr = this.head;
  let prev = null;
  // iterate over the list 
  while (curr !== null) {
    // comparing the val with current
    if (curr.val === val) {
      // if prev is equal to null
      if (prev === null) {
        // reassign this.head to be next node (curr.next)

        this.head = curr.next;
      } else {
        // otherwise, reassign prev.next be curr.next
        prev.next = curr.next;
        // set tail, if prev.next is equal to null
        if (prev.next === null) {
          this.tail.next = prev.next;
          this.tail = prev;
        }
      }
      // decrement length by 1;
      this.length--;
      // return value deleted from the linked list
      return curr.val;
    }
    // set if prev is equal to curr (this.head) 
    prev = curr;
    // set curr.next to be curr(head)
    curr = curr.next;
  }
  // If an item with the corresponding value does not exist, return undefined
  return;
};

/**
 * count - Returns the number of times a given value appears in the linked list
 *
 * @param {string} val - value to find in linked list
 * @return {number} The number of times that value appears in the list
 */
LinkedList.prototype.count = function (val) {
  let count = 0;
  let curr = this.head;

  for (let i = 0; i < this.length; i += 1) {}
  console.log("count", count);
  return count;
};

// Do not remove!!
module.exports = {
  LinkedList,
  Node,
};
const lists = new LinkedList();
lists.add(10);
lists.add(20);
lists.add(50);
lists.add(60);
lists.add(40);
lists.add(60);
//lists.delete(40)
lists.delete(10)
// lists.add(40);
// lists.count(60);
console.log(lists);