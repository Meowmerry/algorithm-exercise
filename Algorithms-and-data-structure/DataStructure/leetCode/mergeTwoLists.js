/* 
21. Merge Two Sorted ListsEasy

You are given the heads of two sorted linked lists list1 and list2.
Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.
Return the head of the merged linked list.

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */

//const mergeTwoLists = (list1, list2) => [...list1, ...list2].sort()

function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}
// var mergeTwoLists = function (list1, list2) {
//     if (list1 === null) return list2;
//     if (list2 === null) return list1;
//     console.log('list1.val', list1.val)
//     if (list1.val < list2.val) {
//         list1.next = mergeTwoLists(list1.next, list2);
//         return list1;
//     } else {
//         list2.next = mergeTwoLists(list1, list2.next);
//         return list2;
//     }
// };
var mergeTwoLists = function (list1, list2) {
    let l1 = list1;
    let l2 = list2;
    if (l1 === null && l2 === null) return null;
    if (l1 === null) return l2;
    if (l2 === null) return l1;
    if (l1.val > l2.val) {
        let temp = l1;
        l1 = l2;
        l2 = temp;
    }
    let res = l1;
    while (l1 !== null && l2 !== null) {
        let tmp = null;
        while (l1 !== null && l1.val <= l2.val) {
            tmp = l1;
            l1 = l1.next;
        }
        tmp.next = l2;
        let temp = l1;
        l1 = l2;
        l2 = temp;
    }
    return res;
};

var mergeTwoLists = function (l1, l2) {
    if (!l1 || !l2) return l1 || l2;
    let newHead;
    let temp;
    while (l1 !== null && l2 !== null) {
        if (l1.val <= l2.val) {
            const newNode = new ListNode(l1.val);
            if (!newHead) {
                newHead = newNode;
                temp = newHead;
            } else {
                temp.next = newNode;
                temp = temp.next;
            }
            l1 = l1.next;
        } else if (l1.val > l2.val) {
            const newNode = new ListNode(l2.val);
            if (!newHead) {
                newHead = newNode;
                temp = newHead;
            } else {
                temp.next = newNode;
                temp = temp.next;
            }
            l2 = l2.next;
        }
    }

    while (l1 !== null) {
        temp.next = l1;
        temp = temp.next;
        l1 = l1.next;
    }
    while (l2 !== null) {
        temp.next = l2;
        temp = temp.next;
        l2 = l2.next;
    }
    return newHead;
};

console.log(mergeTwoLists([1, 2, 4], [1, 3, 4])) //[1,1,2,3,4,4]
console.log(mergeTwoLists([], [])) // []
console.log(mergeTwoLists([], [0])) // 0
