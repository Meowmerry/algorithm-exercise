/*
Falsy Bouncer
Remove all falsy values from an array.
Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.
Hint: Try converting each value to a Boolean.
*/
/* =============  SOLUTION 1 ================ */
function bouncer(arr) {
  const output = [];
  for(let i = 0 ;i < arr.length ;i ++){
    if(arr[i]) output.push(arr[i])
  }
  return output;
}

console.log(bouncer([7, "ate", "", false, 9])); //[7, "ate", 9]

/* =============  SOLUTION 1 ================ */
function bouncer(arr) {
    //return arr.filter(ele=> ele)
    return arr.filter(Boolean)
}
  
console.log(bouncer([7, "ate", "", false, 9])); //[7, "ate", 9]
  