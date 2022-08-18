/* 
Seek and Destroy
You will be provided with an initial array (the first argument in the destroyer function), 
followed by one or more arguments. 
Remove all elements from the initial array that are of the same value as these arguments.

Note: You have to use the arguments object.
*/
/* ====== Solution 1 ======  */

function destroyer(arr, ...valRemove) {
  return arr.filter((ele) => !valRemove.includes(ele));
}

/* ====== Solution 1.1 ======  */
const destroyer = (arr, ...val) => arr.filter(ele => !val.includes(ele))


console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3)); // [1, 1]
console.log(destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3)); // [1, 5, 1]
console.log(destroyer(["tree", "hamburger", 53], "tree", 53)); // ["hamburger"]

/* ====== Solution 2 ======  */
function destroyer2(arr) {
  const remove = Array.from(arguments).slice(1);
  return arr.filter((ele) => !remove.includes(ele));
}

console.log(destroyer2([1, 2, 3, 1, 2, 3], 2, 3)); // [1, 1]
console.log(destroyer2([1, 2, 3, 5, 1, 2, 3], 2, 3)); // [1, 5, 1]
console.log(destroyer2(["tree", "hamburger", 53], "tree", 53)); // ["hamburger"]

/* ====== Solution 3 ======  */
function destroyer3(arr) {
  const remove = Array.from(arguments).slice(1);
  return arr.reduce((acc, curr) => {
    if (!remove.includes(curr)) acc.push(curr);
    return acc;
  }, []);
}

console.log(destroyer3([1, 2, 3, 1, 2, 3], 2, 3)); // [1, 1]
console.log(destroyer3([1, 2, 3, 5, 1, 2, 3], 2, 3)); // [1, 5, 1]
console.log(destroyer3(["tree", "hamburger", 53], "tree", 53)); // ["hamburger"]

/* ====== Solution 4 ======  */
function destroyer4(arr) {
  const valsToRemove = Object.values(arguments).slice(1);
  const filteredArray = [];

  for (let i of arr) {
    let removeEl = false;
    for (let j of valsToRemove) {
      if (i === j) {
        removeEl = true;
      }
    }
    if (!removeEl) {
      filteredArray.push(i);
    }
  }
  return filteredArray;
}
console.log(destroyer4([1, 2, 3, 1, 2, 3], 2, 3)); // [1, 1]
console.log(destroyer4([1, 2, 3, 5, 1, 2, 3], 2, 3)); // [1, 5, 1]
console.log(destroyer4(["tree", "hamburger", 53], "tree", 53)); // ["hamburger"]

/* ====== Solution 5 with Arrow function ======  */
const destroyer5 = (...arr) =>  arr[0].filter(ele=> !arr.slice(1).includes(ele))
console.log(destroyer5([1, 2, 3, 1, 2, 3], 2, 3)); // [1, 1]
console.log(destroyer5([1, 2, 3, 5, 1, 2, 3], 2, 3)); // [1, 5, 1]
console.log(destroyer5(["tree", "hamburger", 53], "tree", 53)); // ["hamburger"]
