/*
longest streak
Write a function, longestStreak, that takes in the head of a linked list as an argument. 
The function should return the length of the longest consecutive streak 
of the same value within the list.
*/

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

const a = new Node(5);
const b = new Node(5);
const c = new Node(7);
const d = new Node(7);
const e = new Node(7);
const f = new Node(6);

a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;

// 5 -> 5 -> 7 -> 7 -> 7 -> 6
const x = new Node(5);
const z = new Node(5);
x.next = z;

// 5 -> 5

/*
n = number of nodes
Time: O(n)
Space: O(1)
*/
const longestStreak = (head) => {
    let currentNode = head;
    let preveValue = null;
    let maxStreak = 0;
    let currentStreak = 0;

    while (currentNode) {
        // check if currentNodeValue is equal to preveValue, will increment currentStreak by1
        if (currentNode.val === preveValue) {
            currentStreak += 1;
        } else { // otherwise set currentStreak back to 1
            currentStreak = 1;
        }

        // compare if currentStreak is grather than maxStreak, update maxStreak to currentStreak
        if (currentStreak > maxStreak) {
            maxStreak = currentStreak;
        }

        // move each node, move preveValue to current.val
        preveValue = currentNode.val;
        // move current to current.next
        currentNode = currentNode.next;
    }
    return maxStreak;
};
console.log(longestStreak(a)); // 3
console.log(longestStreak(x)); // 2
console.log(longestStreak(null)); // 0