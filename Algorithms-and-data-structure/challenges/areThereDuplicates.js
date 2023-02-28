/* */
function areThereDuplicates(...input) {
  for (let i = 0; i < input.length; i += 1) {
    for (let j = 0; j < input.length; j += 1) {
        conso
      if (input[i] === input[j]) return true;
    }
  }
  return false;
}
console.log(areThereDuplicates(1, 2, 3)); // false
console.log(areThereDuplicates(1, 2, 2)); // true
console.log(areThereDuplicates("a", "b", "c", "b")); // true
