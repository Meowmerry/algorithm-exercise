/*
Add Two Numbers  Medium

You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.
*/
var addTwoNumbers = function (l1, l2) {
    const list1 = Number(l1.reverse().join(''))
    const list2 = Number(l2.reverse().join(''))
    const total = list1 + list2;
    result = String(total).split('').reverse()
    const output = [];
    result.forEach(element => {
        if (typeof element === 'string') {
            output.push(Number(element))
        }
    });
    return output

    // console.log('leee', l1)
    // var a1 = '';
    // var a2 = '';
    // while (l1) {
    //     a1 += l1.val;
    //     l1 = l1.next;
    // }
    // while (l2) {
    //     a2 += l2.val;
    //     l2 = l2.next;
    // }
    // var sum = (Number(a1.split("").reverse().join("")) + Number(a2.split("").reverse().join(""))).toString().split("").reverse().join("");
    // var ne = new ListNode(sum.charAt(0));
    // var temp = ne;
    // for (let i = 1; i < sum.length; i++) {
    //     temp.next = new ListNode(sum.charAt(i));
    //     temp = temp.next;
    // }
    // return ne;

};
console.log(addTwoNumbers([2, 4, 3], [5, 6, 4])) // [7,0,8]

