/*
Mutations
Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.

For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.

The arguments ["hello", "hey"] should return false because the string hello does not contain a y.

Lastly, ["Alien", "line"], should return true because all of the letters in line are present in Alien.
*/
/* 
=====================  SOLUTION 1 ===========================
- First we make the two strings in the array lowercase. test will hold what we are looking for in target.

- Then we loop through our test characters and if any of them is not found we return false.

- If they are all found, the loop will finish without returning anything and we get to return true.

*/
function mutation(arr) {
  const test = arr[1].toLowerCase();
  const target = arr[0].toLowerCase();
  for (let i = 0; i < test.length; i += 1) {
    if (target.indexOf(test[i]) < 0) return false;
  }
  return true;
}

console.log(mutation(["hello", "hey"])); // false
console.log(mutation(["hello", "llo"])); // true

/* 
=====================  SOLUTION 2 ===========================
Grab the second string, lowercase and turn it into an array; 
then make sure every one of its letters is a part of the lowercased first string.

Every will basically give you letter by letter to compare, which we do by using indexOf on the first string. 
indexOf will give you -1 if the current letter is missing. We check that not to be the case, for if this happens even once every will be false.

*/
function mutation(arr) {
  return arr[1]
    .toLowerCase()
    .split("")
    .every((letter) => {
      return arr[0].toLowerCase().indexOf(letter) !== -1;
    });
}

console.log(mutation(["hello", "hey"])); // false
console.log(mutation(["hello", "llo"])); // true

/* 
=====================  SOLUTION 2 ===========================
Grab the second string, lowercase and turn it into an array; 
then make sure every one of its letters is a part of the lowercased first string.

Every will basically give you letter by letter to compare, which we do by using indexOf on the first string. 
indexOf will give you -1 if the current letter is missing. We check that not to be the case, for if this happens even once every will be false.

*/
function mutation(arr) {
  return arr[1]
    .toLowerCase()
    .split("")
    .every((letter) => {
      return arr[0].toLowerCase().indexOf(letter) !== -1;
    });
}

console.log(mutation(["hello", "hey"])); // false
console.log(mutation(["hello", "llo"])); // true

function mutation([target, test], i = 0) {
  target = target.toLowerCase();
  test = test.toLowerCase();
  return i >= test.length
    ? true
    : !target.includes(test[i])
    ? false
    : mutation([target, test], i + 1);
}
// Note that nesting ternaries this deeply is typically not recommended in professional code.
