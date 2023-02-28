 function hash(key, arrayLen) { 
  let total = 0;
  for (let char of key) {
    // map "a" to 1, "b" to 2, "c" to 3, etc.
    let value = char.charCodeAt(0) - 96
    total = (total + value) % arrayLen;
  }
  return total;
}
console.log(hash('pink', 100)) // 50
console.log(hash('pink', 10)) // 0
console.log(hash('blue', 10)) // 0 
// Problem with this hash function
// Only hashes strings (but we won't worry about this now)
// It is not constant time ---> it is linear in key in key length
// Could be a little more random

//https://computinglife.wordpress.com/2008/11/20/why-do-hash-functions-use-prime-numbers/

//https://www.quora.com/Does-making-array-size-a-prime-number-help-in-hash-table-implementation-Why