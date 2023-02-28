/* Write a function (functionLocker) that takes in two functions as input and
returns a new function.
The first input function will be a predicate function that takes a number as
input and returns true if the number passes a certain test; false otherwise.
The second input function is a secret function that takes an unknown number of
parameters.
The returned function takes a number as its first parameter. If the number
passes the predicate function, the secret function runs with any additional
parameters passed into it. If the predicate fails, return undefined;

ex.
function isEven(num) { return num % 2 === 0; }
function addStrings(a, b, c) { return a + '--' + b + '--' + c; }

const lockedFunc = functionLocker(isEven, addStrings);

lockedFunc(4, 'I', 'love', 'Codesmith') --> 'I--love--Codesmith'
lockedFunc(3, 'I', 'love', 'Codesmith') -->  undefined

Input : Two function 
Output : return function, --> closure

create a func take two args 
    declare a result assign to undefined
    return inner func, inter func will take 2 agrs , number and string
          if invoke func1 passed number, if it true 
             reassign result with evelute func2 with passed in string
          otherwise return undefined
*/
const functionLocker = (func1, func2) => {
  return (nums, str1, str2, str3) =>
    func1(nums) ? func2(str1, str2, str3) : undefined;
};
function isEven(num) {
  return num % 2 === 0;
}
function addStrings(a, b, c) {
  return a + "--" + b + "--" + c;
}

const lockedFunc = functionLocker(isEven, addStrings);

console.log(lockedFunc(4, "I", "love", "Codesmith")); //--> 'I--love--Codesmith'
console.log(lockedFunc(3, "I", "love", "Codesmith")); //-->  undefined

const functionLocker1 = (predicateFunc, addStringsFunc) => {
  return (nums, ...args) => {
    if (predicateFunc(nums)) {
      return addStringsFunc(...args.slice(0, args.length));
    } else return undefined;
  };
};
function isEven1(num) {
  return num % 2 === 0;
}
function addStrings1(a, b, c) {
  return a + "--" + b + "--" + c;
}

const lockedFunc1 = functionLocker1(isEven1, addStrings1);

console.log(lockedFunc1(4, "I", "love", "Codesmith")); //--> 'I--love--Codesmith'
console.log(lockedFunc1(3, "I", "love", "Codesmith")); //-->  undefined
