/**
* LinkedList costructor
*
* construct a new linked list
* you may modify this constructor as needed to achieve the challenges below
*/
function LinkedList() {
    this.head = null;
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
  LinkedList.prototype.add = function(val) {
  
  };
  
  /**
  * remove - find and delete the first occurrence of a value
  *
  * - If an item with the corresponding value does not exist, return undefined
  *
  * @param {string|number|boolean} val - value to be found and deleted from linked list
  * @return {string|number|boolean} The value deleted from the linked list
  */
  LinkedList.prototype.delete = function(val) {
  
  };
  
  /**
  * count - Returns the number of times a given value appears in the linked list
  *
  * @param {string|number|boolean} val - value to find in linked list
  * @return {number} The number of times that value appears in the list
  */
  LinkedList.prototype.count = function(val) {
  
  };
  
  // Do not remove!!
  module.exports = { LinkedList, Node };