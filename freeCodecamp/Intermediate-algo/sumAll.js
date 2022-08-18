/* 
Sum All Numbers in a Range
We'll pass you an array of two numbers. 
Return the sum of those two numbers plus the sum of all the numbers between them. 
The lowest number will not always come first.

For example, sumAll([4,1]) should return 10 because sum of all the numbers between 1 and 4 (both inclusive) is 10.

*/
/* ====== Solution 1 ======  */
function sumAll(arr) {
  let count = 0;
  for (let i = Math.min(...arr); i <= Math.max(...arr); i++) {
    count += i;
  }
  return count;
}

/* ====== Solution 2 ======  */
function sumAll(arr) {
  const [first, last] = [...arr].sort((a, b) => a - b);
  return first !== last ? first + sumAll([first + 1, last]) : first;
}

/* ====== Solution 3 ======  */
function sumAll(arr) {
  let max, min;
  if (arr[0] > arr[1]) {
    max = arr[0];
    min = arr[1];
  } else {
    max = arr[1];
    min = arr[0];
  }

  let sum = 0;

  //    for(let i = min; i <= max ;i++){
  //         sum+=i;
  //    }

  let i = min;
  while (i <= max) {
    sum += i;
    i++;
  }

  return sum;
}


/* ====== Solution 4 ======  */
function sumAll(arr) {
    const min = arr[0] < arr[1] ? arr[0] : arr[1];
    const max = arr[0] > arr[1] ? arr[0] : arr[1];
    let sum = 0, i = min
    while(i <=max){
        sum += i;
        i++
    }
    return sum;

}
console.log(sumAll([1, 4])); // 10
console.log(sumAll([5, 10])); // 45
console.log(sumAll([4, 1])); // 10
