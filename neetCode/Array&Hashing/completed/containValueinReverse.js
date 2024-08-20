/*
Given two arrays, does the second array contain the same values as the first but in reverse? 
If so, return true. Return false otherwise.

[execution time limit] 4 seconds (js)

[input] array.integer a

[input] array.integer b

[output] boolean

- if two array is the not same length return false
- Interate to the first array
    take the value at i to the second array 
    look at the second array at length - 1
*/


function containValueinReverse(a, b) {
  if (a.length !== b.length) return false;
  for (let i = 0; i < a.length; i++){
    let fowardVal = a[i];
    let reverseVal = b[b.length-i-1];// 
    // console.log({fowardVal, reverseVal})
    if (fowardVal !== reverseVal) return false;
    
  }
  return true

}

// console.log(containValueinReverse([1, 2, 3], [3, 2, 1])); // Output: true
// console.log(containValueinReverse([1, 2, 3], [1, 2])); // Output: false
// console.log(containValueinReverse([1, 2, 3], [3, 2, 1, 4])); // Output: false
// console.log(containValueinReverse([1, 2, 4], [4, 2, 1])); // Output: true


function recursiveContainValueinReverse(a,b, i=0) {
  // base case
  if (a.length !== b.length) return false;
  if (!a[i]) return true;

  let fowardVal = a[i];
  let reverseVal = b[b.length - i - 1];
  if (fowardVal !== reverseVal) return false;

  return recursiveContainValueinReverse(a, b, i+1)
}


console.log(recursiveContainValueinReverse([1, 2, 3], [3, 2, 1])); // Output: true
console.log(recursiveContainValueinReverse([1, 2, 3], [1, 2])); // Output: false
console.log(recursiveContainValueinReverse([1, 2, 3], [3, 2, 1, 4])); // Output: false
console.log(recursiveContainValueinReverse([1, 2, 4], [4, 2, 1])); // Output: true