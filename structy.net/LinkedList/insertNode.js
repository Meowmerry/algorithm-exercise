class Node {
    constructor(val, next = null) {
        this.val = val;
        this.next = next;
    }
}



// ==== Iterative ====
// const insertNode = (head, value, index) => {
//     if (index === 0) {
//         const newHead = new Node(value);
//         newHead.next = head;
//         return newHead;
//     }
//     let count = 0;
//     let current = head;
//     while (current) {
//         count += 1;
//         if (count === index) {
//             const next = current.next;
//             current.next = new Node(value);
//             current.next.next = next;
//         }
//         current = current.next;
//     }

//     return head;
// };

// ==== Recursive ====
const insertNode = (head, value, index) => { };

function printLL(head) {

    let output = '';
    while (head) {
        output += head.val + ' -> ';
        head = head.next;
    }
    return output;
}

const node = new Node('a', new Node('b', new Node('c', new Node('d'))));
console.log(printLL(insertNode(node, 'x', 2))); // a -> b -> x -> c -> d