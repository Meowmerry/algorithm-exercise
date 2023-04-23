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
const x = new Node(4);
// 4 

const longestStreak = (head) => {
    // todo
};

console.log(longestStreak(x)); // 1
console.log(longestStreak(a)); // 3
console.log(longestStreak(null)); // 0