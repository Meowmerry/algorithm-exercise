/*
level averages
Write a function, levelAverages, that takes in the root of a binary tree that contains number values. 
The function should return an array containing the average value of each level.
*/
class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const a = new Node(3);
const b = new Node(11);
const c = new Node(4);
const d = new Node(4);
const e = new Node(-2);
const f = new Node(1);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

//       3
//    /    \
//   11     4
//  / \      \
// 4   -2     1
const levelAverages = (root) => {
    const levels = [];
    const avgs = []
    fillLevels(root, levels, 0);

    // for(const level of levels){
    //     avgs.push(average(level))
    // }
    // return avgs;
    return levels.map(average)
    
};

const fillLevels = (root, levels, levelNum)=>{
    if (root === null) return [];

    if(levels.length === levelNum){
        levels.push([root.val]);
      }else{
        levels[levelNum].push(root.val)
      }
    fillLevels(root.left, levels, levelNum +1)
    fillLevels(root.right, levels, levelNum +1)
}
const average = (arr)=>{
    let sum = 0;
    for(const num of arr){
        sum += num;
    }
    return sum / arr.length;
}

console.log(levelAverages(a)); // -> [ 3, 7.5, 1 ]
