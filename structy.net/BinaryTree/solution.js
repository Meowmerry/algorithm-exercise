// function largerBranch(root) {
//     if (!root) return "";
//     let leftSum = 0,
//         rightSum = 0;
//     function traverse(node) {
//         if (node.left) {
//             leftSum += node.left.val;
//             traverse(node.left);
//         }
//         if (node.right) {
//             rightSum += node.right.val;
//             traverse(node.right);
//         }
//     }
//     traverse(root);
//     if (leftSum > rightSum) {
//         return "Left";
//     } else if (rightSum > leftSum) {
//         return "Right";
//     } else {
//         return "";
//     }
// }

/*
Write a function in Javascript that determined whether the left or right branch of tree is larger. 
The size of each branch is the sum of the node values. The function should return the string ‘Right’ 
if the right side is larger and ‘Left’ if the left side is larger. 
If the tree has 0 nodes or if the size of the branches are equal, return the empty string
*/

// const solution = (arr)=>{
//     let root = arr[0]
//     let left = 0;
//     let right = 0;
//     for(let i = 1 ; i < arr.length ; i +=1){ 
//         if(arr[i] <= 0) {
//             right += arr[i+1]
//         }else if(i % 2 === 0) {
//             right += arr[i]
//         }else if(i % 2 !== 0){
//             left += arr[i]
//         }
       
//     }
//    console.log('left', left)
//    console.log('right', right)
// }

function solution(arr) {
    if (!arr.length) return "";
    let leftSum = 0,
        rightSum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (2 * i + 1 < arr.length) {
            leftSum += arr[2 * i + 1];
        }
        if (2 * i + 2 < arr.length) {
            rightSum += arr[2 * i + 2];
        }
        if(arr[i] === 0) return ""
    }
    if (leftSum > rightSum) {
        return "Left";
    } else if (rightSum > leftSum) {
        return "Right";
    } else {
        return "";
    }
}

// console.log(solution([3,6,2,9,-1,10]))
console.log(solution([1, 10, 5, 1, 0, 6]))