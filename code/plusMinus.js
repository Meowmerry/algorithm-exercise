function plusMinus(arr) {
  // Write your code here
  let positive = null;
  let negative = null;
  let zero = null;
  for (const num of arr) {
    if (num > 0) {
      positive += 1;
    } else if (num < 0) {
      negative += 1;
    } else {
      zero += 1;
    }
  }
  console.log((positive / arr.length).toFixed(5));
  console.log((negative / arr.length).toFixed(5));
  console.log((zero / arr.length).toFixed(5));
}
// console.log(plusMinus([1, 1, 0, -1, -1]));
console.log(plusMinus([-4, -3, -9, 0,4,1]));
