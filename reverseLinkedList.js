function Node(value) {
  this.value = value;
  this.next = null;
}

/**
 * Write a function for reversing a linked list.
 * Your function will have one input: the head of the list
 * Your function should return the new head of the list
 * If the input is null, your function should return null
 *
 * Example:
 * If the linked list is:
 *
 *      1 -> 2 -> 3 -> 4 -> 5
 *
 * The result should like like:
 *
 *      5 -> 4 -> 3 -> 2 -> 1
 *
 * Extension:
 * Do it in place
 *
 */

const reverseLinkedList = (head) => {
  // check if head is null will return null
  if (head === null) return null;

  // declare the variable prevNode assign to null
  // declare the variable currNode assign to head
  // declare the variable nextNode assign to null
  let prevNode = null;
  let currNode = head;
  let nextNode = null;

  // check while currNode is not null
  while (currNode !== null) {
    // reassign nextNode to currNode.next
    nextNode = currNode.next;
    // give the value of currNode.next = prevNode
    currNode.next = prevNode;
    // reassign prevNode to currNode
    prevNode = currNode;
    // give the value of currNode assign to nextNode
    currNode = nextNode;
  }

  // return prevNode
  return prevNode;
};

const reverseLinkedListRecur = (head) => {
    if(head === null || head.next === null) return head;
    const reverse = reverseLinkedListRecur(head.next);
    head.next.next = head;
    head.next = null;
    return reverse;
}
const node = new Node(1);
const node1 = new Node(2);
const node2 = new Node(3);
const node3 = new Node(4);
const node4 = new Node(5);
node.next = node1;
node1.next = node2;
node2.next = node3;
node3.next = node4;
// console.log(node)
console.log(reverseLinkedListRecur(node))
// console.log(reverseLinkedList(node));
