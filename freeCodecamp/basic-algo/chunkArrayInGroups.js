/*
Chunky Monkey
Write a function that splits an array (first argument) into groups the length of size (second argument) 
and returns them as a two-dimensional array.
*/
/* =============  SOLUTION 1 ================ 
- Firstly, we create two empty arrays called temp and result, which we will eventually return.
- Our for loop loops until a is equal to or more than the length of the array in our test.
- Inside our loop, we push to temp using temp.push(arr[a]); if the remainder of a / size is not equal to size - 1.
- Otherwise, we push to temp, push temp to the result variable and reset temp to an empty array.
- Next, if temp isn’t an empty array, we push it to result.
- Finally, we return the value of result.
*/
function chunkArrayInGroups(arr, size) {
  let temp = [];
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (i % size !== size - 1) temp.push(arr[i]);
    else {
      temp.push(arr[i]);
      newArr.push(temp);
      temp = [];
    }
  }
  if (temp.length !== 0) newArr.push(temp);
  return newArr;
}
console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));

/* =============  SOLUTION 2 ================ 
- First, we create an empty array arr2 where we will store our ‘chunks’.
- The for loop starts at zero, increments by size each time through the loop, 
and stops when it reaches arr.length.
- Note that this for loop does not loop through arr. Instead, 
we are using the loop to generate numbers we can use as indices to slice the array in the right locations.
- Inside our loop, we create each chunk using arr.slice(i, i+size), and add this value to arr2 with arr2.push().
- Finally, we return the value of arr2.
*/
function chunkArrayInGroups(arr, size) {
  const newArr = [];
  for (let i = 0; i < arr.length; i += size) {
    newArr.push(arr.slice(i, i + size));
  }
  return newArr;
}
console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));
/* =============  SOLUTION 3 ================ 
- Firstly, we create two variables. newArr is an empty array which we will push to. We also have the i variable set to zero, for use in our while loop.

- Our while loop loops until i is equal to or more than the length of the array in our test.

- Inside our loop, we push to the newArr array using arr.slice(i, i+size). For the first time it loops, it will look something like:

- newArr.push(arr.slice(1, 1+2))

- After we push to newArr, we add the variable of size onto i.

- Finally, we return the value of newArr.
*/
function chunkArrayInGroups(arr, size) {
  // Break it up.
  let newArr = [];
  let i = 0;

  while (i < arr.length) {
    newArr.push(arr.slice(i, i + size));
    i += size;
  }
  return newArr;
}
chunkArrayInGroups(["a", "b", "c", "d"], 2);

/* =============  SOLUTION 4 ================ 
- Firstly, we create a variable. newArr is an empty array which we will push to.
- Our while loop loops until the length of the array in our test is not 0.
- Inside our loop, we push to the newArr array using arr.splice(0, size).
- For each iteration of while loop, it deletes size number of elements from the front of arr and push them as an array to newArr.
- Finally, we return the value of newArr.
*/
function chunkArrayInGroups(arr, size) {
  let newArr = [];
  while (arr.length > 0) {
    newArr.push(arr.splice(0, size));
  }
  return newArr;
}
/* =============  SOLUTION 5 ================ 
- Array smaller than size is returned nested.
- For any array larger than size, it is split in two. 
First segment is nested and concatenated with second segment which makes a recursive call.
*/
function chunkArrayInGroups(arr, size) {
  if (arr.length <= size) {
    return [arr];
  } else {
    return [arr.slice(0, size)].concat(
      chunkArrayInGroups(arr.slice(size), size)
    );
  }
}
