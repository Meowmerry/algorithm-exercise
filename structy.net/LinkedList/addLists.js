/*
add lists
Write a function, addLists, that takes in the head of two linked lists, each representing a number. 
The nodes of the linked lists contain digits as values. 
The nodes in the input lists are reversed; this means that the least significant digit 
of the number is the head. 
The function should return the head of a new linked listed representing the sum of the input lists. 
The output list should have its digits reversed as well.
*/
class Node {
    constructor(val, next = null) {
        this.val = val;
        this.next = next;
    }
}
/*
- Handle same lenght
- Handle diff length lists
- Handle carray
- Handle final carry
= Profit $$$


n length of list1
m is length of list2
Time: O(max(n,m)) 
Space: O(max(n,m))

*/
// ======  Recursive  ======
// const addLists = (list1, list2, carry = 0) => {
//     // Base Case : check if list1 and list 2 is null and carray is 0 return null
//     if (list1 === null && list2 === null && carry === 0) return null;

//     // Initailize value1 to list1 if list1 is null set to 0 otherwise set to list1.value
//     const value1 = list1 === null ? 0 : list1.val;


//     // Initailize value2 to list2 if list2 is null set to 0 otherwise set to list2.value
//     const value2 = list2 === null ? 0 : list2.val;

//     // Initailize sum set to value1 add value2 and carry
//     const sum = value1 + value2 + carry;

//     // Handle and initialize nextCarry if sum is grather 9, we will set to 1 either 0
//     const nextCarray = sum > 9 ? 1 : 0;

//     // Initilize the digit by sum % 10
//     const digit = sum % 10;

//     // Initilize the result with new Node and pass digit
//     const result = new Node(digit);


//     // Initilizd the next1 to list1 if null set to null otherwise set to list1.next
//     const next1 = list1 === null ? null : list1.next;

//     // Initilizd the next2 to list2 if null set to null otherwise set to list2.next
//     const next2 = list2 === null ? null : list2.next;

//     // reassign to result next will Recursive call the function with passed next1, next2 and nextCarray
//     result.next = addLists(next1, next2, nextCarray);
//     // console.log('result', result.next);

//     return result;
// };


// ======  Recursive  ======
const addLists = (list1, list2) => {
    // Initialize dummy node to new Node 
    let dummyHead = new Node(0);

    // Initialzed tail to dummy node
    let tail = dummyHead;

    // Initialize carry value to 0
    let carry = 0;

    // Initialize current1 set to list1 
    let current1 = list1;

    // Initialize current2 set to list 2
    let current2 = list2;

    // traverse through node, while current1 and current to are not null and carray is not 0
    while (current1 !== null || current2 !== null || carry !== 0) {
        // Initailize value1 to current1 if current1 is null set to 0 otherwise set to current1.value
        const value1 = current1 === null ? 0 : current1.val;
        // Initailize value2 to current2 if current2 is null set to 0 otherwise set to current2.value
        const value2 = current2 === null ? 0 : current2.val;

        // Initailize sum set to value1 add value2 and carry
        const sum = value1 + value2 + carry;
        // Reassign carry to handle sum is grater than 9 , set to 0 otherwise set to 1
        carry = sum > 9 ? 1 : 0;
        // Initilize the digit by sum % 10
        const digits = sum % 10;
        // assgin tail next to new Node and pass digit
        tail.next = new Node(digits);
        // move tail to tail.next
        tail = tail.next;
        // traverse throght both list if, current is not null, move current to current next
        if (current1 !== null) current1 = current1.next;
        if (current2 !== null) current2 = current2.next;
    }
    return dummyHead.next;
};

function printLL(head) {

    let output = '';
    while (head) {
        output += head.val + ' -> ';
        head = head.next;
    }
    return output;
}


const listA = new Node(1);
const listB = new Node(-1);
console.log(printLL(addLists(listA, listB))); // -> 0
const listA1 = new Node(1, new Node(2, new Node(3)));
const listB1 = new Node(1, new Node(2, new Node(6)));
console.log(printLL(addLists(listA1, listB1))); // 2 -> 4 -> 9

const listA2 = new Node(1, new Node(2));
const listB2 = new Node(-1, new Node(-1));
console.log(printLL(addLists(listA2, listB2))); // 0 -> 1 


const listA3 = new Node(1, new Node(3, new Node(5)));
const listB3 = new Node(-1, new Node(3, new Node(-10)));
console.log(printLL(addLists(listA3, listB3))); // 0 -> 6 -> -5 ->  


const listA4 = new Node(1, new Node(2, new Node(3)));
const listB4 = new Node(1, new Node(2, new Node(3)));
console.log(printLL(addLists(listA4, listB4))); // 2 -> 4 -> 6

