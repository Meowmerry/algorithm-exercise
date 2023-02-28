/**
 *  returns true if string is a palindrome (the string is the same forward and backwards).
 *  The parameters entered may have puncutations and symbols,
 *  but they should not affect whether the string is a palindrome
 *  palindrome("Anne, I vote more cars race Rome-to-Vienna"); -> true
 *  palindrome("llama mall"); -> true
 *  palindrome("jmoney"); -> false
 */
function palindrome(string) {
  //convert string to lowercase /\W/g, '' /\[a-z]/g  //remove all space and punctuation
  let str = string.replace(/\W/g, "").toLowerCase();
  // base case if !str || str.length === 1 return true
  if (!str || str.length === 1) return true;
  // if str[0] != str[str.length-1] return false
  if (str[0] != str[str.length - 1]) return false;
  // recursive case : in each recursive call, we compare the first char with the last char
  // recursive call with passed string with the first char and last char that, we move
  // return the result
  return palindrome(str.slice(1, -1));
}

/**
 * returns true is the input is prime.
 * isPrime(1); -> false
 * isPrime(2); -> true
 * isPrime(3); -> true
 * isPrime(4); -> false
 */

// function isPrime(num , div = 2) {
//     // prime is only divide my itself
//     // check every number of the remainder until num === 1 return true
//     // base case : if number is 1 return false
//     if(num < div)  return false;
//     // if reach the orinal num return true
//     if(num === div) return true;
//     // check if the remainder is 0 return false
//     if(num % div === 0) return false;
//     // recursive case :
//     // call function itself, passed next number
//     return isPrime(num, div + 1)
// }
// const isPrime = (num) => {
//   if (num < 2) return false;
//   if (num === 2) return true;
//   if (!(num % 2)) return false;
//   return isPrimeRecursive(num, 3, Math.floor(Math.sqrt(num)));
// }
// const isPrimeRecursive = (num, divisor, max) => {
//   if (divisor > max) return true;
//   if (!(num % divisor)) return false;
//   return isPrimeRecursive(num, divisor + 1, max);
// }

// console.log(isPrime(10007))
function isPrime(num) {
  if (num < 2) return false;
  let count = 2;
  while (count < num) {
    if (num % count === 0) return false;
    count++;
  }
  return true;
}

/** returns the nth fibonacci number. A Fibonnaci sequence is a list of numbers that begin with 0 and 1,
 * and each subsequent number is the sum of the previous two
 * nthFibonacci(0); -> 0
 * nthFibonacci(1); -> 1
 * nthFibonacci(2); -> 1
 * nthFibonacci(3); -> 2
 * nthFibonacci(4); -> 3
 * Try to use recursion. What is the time complexity? Are you repeating the same function call with the
 * same arguments frequently? Are you able to compute nthFibonacci(1000)? If not, recursive algorithms can be
 * made MUCH more efficient using memoization. Try memoizing each result from nthFibonacci and see the
 * performance difference.
 */

function nthFibonacci(num) {
  const storage = {};

  function inputFibonacci(num) {
    if (storage[num]) return storage[num];
    else {
      if (num === 0) return 0;
      if (num === 1) return 1;
      storage[num] = inputFibonacci(num - 1) + inputFibonacci(num - 2);
      return storage[num];
    }
  }
  return inputFibonacci(num);
}

/** returns a function with a context bound to this
 *
 * const mattObj = {
 *  name: 'matt',
 *  shout: function() {
 *      console.log(this.name);
 *  }
 * };
 * let boundShout = functionBind(mattObj.shout, mattObj);
 * boundShout(); -> prints 'matt;
 *
 * const kimObj = {
 *  name: 'kim',
 *  shout: function() {
 *      console.log(this.name);
 *  }
 * };
 * boundShout = functionBind(mattObj.shout, kimObj);
 * boundShout(); -> prints 'kim'
 *
 * boundShout = functionBind(mattObj.shout, {name: 'bob'});
 * boundShout(); -> prints 'bob'
 */
function functionBind(func, context) {
  context.f = func;
  return () => context.f();
}

/**
 * returns every sequence of throws a single player could throw over an n-round game of rock-paper-scissors
 * rockPaperScissors(1); -> [['rock'],['paper'],['scissors']]
 * rockPaperScissors(2); ->
 * [['rock','rock'],['rock','paper'],['rock','scissors'],
 * ['paper','paper'],['paper','scissors'],['paper','rock'],
 * ['scissors','scissors'],['scissors','paper'],['scissors','rock']]
 */
function rockPaperScissors(num, ans = [], buffer = []) {
  // if num === 0 return ans;
  // if length of buffer is === num, store buffer by pushing to ans
  // else each call rockPaperScissors and passed num, ans, array of the rest of buffer, concat with rock, paper, scissors
  if (num === 0) return ans;
  if (num === buffer.length) ans.push(buffer);
  else {
    rockPaperScissors(num, ans, [...buffer, 'rock']);
    rockPaperScissors(num, ans, [...buffer, 'paper']);
    rockPaperScissors(num, ans, [...buffer, 'scissors']);
  }
  return ans;
}

/*
============ SOLUTION 2 ================================
function rockPaperScissors(num) {
  if (num <= 0) return [];
  let result = [["rock"], ["paper"], ["scissors"]];
  if (num === 1) return result;
  for (let i = 1; i < num; i += 1) {
    const newArr = [["rock"], ["paper"], ["scissors"]];
    const temp = [];
    newArr.forEach((ele) => {
      result.forEach((val) => {
        temp.push(ele.concat(val));
      });
    });
    result = temp;
  }
  return result;
}

============ SOLUTION 3 ================================
function rockPaperScissors(num) {
  if (num === 0) return [];
  const results = [];
  function recurse(num, memo = []) {
    if (memo.length === num) {
      results.push(memo);
      return;
    }
    recurse(num, [...memo, "rock"]);
    recurse(num, [...memo, "paper"]);
    recurse(num, [...memo, "scissors"]);
  }
  recurse(num); //step 2: recurse 2
  return results;
}

============ SOLUTION 4 ================================
function rockPaperScissors(num) {
  if (num === 0) return [];
  let result = [];
  let options = ["rock", "paper", "scissors"];
  function recurse(rounds, arr) {
    if (rounds === 0) {
      result.push(arr);
      return;
    }
    options.forEach((ele) => {
      recurse(rounds - 1, arr.concat(ele));
    });
  }
  recurse(num, []);
  return result;
}
============== SOLUTION 5 ============================
function rockPaperScissors(num) {
  if (num === 0) return [];
  function rps(n, path) {
    if (n === 0) return outcomes.push(path);
    rps(n - 1, path.concat('rock'));
    rps(n - 1, path.concat('paper'));
    rps(n - 1, path.concat('scissors'));
  }
  let outcomes = [];
  rps(num, []);
  return outcomes;
}

*/

// function insertionSort(array) {
//   let sortedArr = [];
//   sortedArr.push(array[0]);
//   let unsortedArr = array.slice(1);

//   function sortItem(sortedArr, unsortedArr) {
//     let toSort = unsortedArr.shift();
//     if (toSort > sortedArr[sortedArr.length - 1]) {
//       sortedArr.push(toSort);
//     } else if (toSort < sortedArr[0]) {
//       sortedArr.unshift(toSort);
//     } else {
//       for (i = sortedArr.length - 1; i >= 0; i--) {
//         if (toSort < sortedArr[i]) {
//           continue;
//         }
//         sortedArr.splice(i + 1, 0, toSort);
//         break;
//       }
//     }
//     if (unsortedArr.length) {
//       return sortItem(sortedArr, unsortedArr);
//     }
//     return sortedArr;
//   }
//   return sortItem(sortedArr, unsortedArr);
// }

function insertionSort(array) {
  //loop through array index i
  //at each element[i], loop through array starting index i
  //declare a currIndex;

  //inside the inner loop, find the smallest element
  //if true: reassign min to array[j], 
  // ressign currIndex = j

  // move the smallest element to the current index at array[i]

  // declare variable temp assign to element at i
  // swicth the value at the indicass... element at i = min
  // reassign the array input at the current index assing to temp

  // return array
  //   let min = Infinity;
  //   for (let i = 0; i < array.length; i++) {
  //     console.log(array[i])

  //     let minIndex;
  //     for (let j = i + 1; j < array.length; j++) {
  //       if (array[j] < min) {
  //         min = array[j]
  //         minIndex = j
  //       }
  //     }
  //     console.log(min)
  //     let temp = array[i]
  //     array[i] = min;
  //     array[minIndex] = temp;
  //   }
  //   return array;
  // }

  //loop through array,
  //at each element, see where we can place it inside the array
  //compare it with elements that come before it, (left of current element)
  //if it is smaller than left element, we can place current element in that index
  //move everything from current index right 
  for (let i = 0; i < array.length; i++) { // 4 = 0 // 3  = 1
    //at each element, see where we can place it inside the array
    for (let j = 0; j < i; j++) { // j = 0 / i = 1
      //compare it with elements that come before it, (left of current element)
      if (array[i] < array[j]) { // arr[i] = 3 < arr[j] = 4
        array.splice(j, 0, array[i]) //insert current element at index j  // [4,3].splice(0,0,3) array = [3,4,3]
        array.splice(i + 1, 1) //delete duplicate current elemet at old index i+1 // [3,4,3].splice(i+1=2,1) remove array[2]
        break;
      }
    }
  }
  return array
}

function swap(thatCoolArray, i1, i2) {
  let temp = thatCoolArray[i1];
  thatCoolArray[i1] = thatCoolArray[i2];
  thatCoolArray[i2] = temp;
}

function bubbleSort(array) {
  let swapped = true;
  while (swapped) {
    swapped = false;
    for (let idx = 0; idx < array.length - 1; idx++) {
      if (array[idx] > array[idx + 1]) {
        swap(array, idx, idx + 1);
        swapped = true;
      }
    }
  }
  return array;
}

// function bubbleSort(arr) {
//   // iterate at the beginning of the array, i will be the array length each time
//   for (let i = arr.length; i >= 0; i--) {

//     //declare a variable equal to zero
//     let j = 0;
//     // while the current length of the array is more than next index
//     while (i > j + 1) {
//       //declare a variable arr [j] for curindex value
//       let curInd = arr[j]
//       // declare variable arr[i+1] for next index value
//       let nextInd = arr[j + 1]
//       // scan the curindex and the next index with each iteration
//       // if the value of the cur index is greater then the next index swap them (use strat from fisher yates - shuf algo)
//       if (curInd > nextInd) {
//         let temp = arr[j];
//         arr[j] = arr[j + 1];
//         arr[j + 1] = temp;
//       }
//       j++
//     }
//   }
//   return arr;
// }

function mergeSort(array) {
  if (array.length <= 1) return array;
  let left = array.slice(0, Math.floor(array.length / 2) || 1);
  let right = array.slice(Math.floor(array.length / 2));
  left = mergeSort(left);
  right = mergeSort(right);
  return merge(left, right);
}

function merge(left, right) {
  const result = [];
  while (left.length && right.length) {
    if (left[0] < right[0]) result.push(left.shift());
    else result.push(right.shift());
  }
  if (left.length) result.push(...left);
  if (right.length) result.push(...right);
  return result;
}
/*
function mergeSort(array) {
  if (array.length <= 2) {
    return array.sort((a, b) => a - b);
  }
  let l = array.slice(0, Math.floor(array.length/2));
  l = mergeSort(l);
  let r = array.slice(Math.floor(array.length/2));
  r = mergeSort(r);

  let arr = [];
  let i = 0;
  let j = 0;

  while (i < l.length || j < r.length) {
    if (j === r.length || l[i] <= r[j]) {
      arr.push(l[i++]);
    } else {
      arr.push(r[j++])
    }
  }

  return arr;
}
*/

function insertionSort(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < i; j++) {
      if (array[i] < array[j]) {
        array.splice(j, 0, array[i])
        array.splice(i + 1, 1)
        break;
      }
    }
  }
  return array
}