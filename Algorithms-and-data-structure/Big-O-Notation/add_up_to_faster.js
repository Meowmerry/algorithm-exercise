function addUpTo(n) { // O(1) will always 3 poerations
  return n * (n + 1) / 2; // We can counting Operations * + / so we have only 3 operations
}

var time1 = performance.now();
console.log(addUpTo(1000000000));
var time2 = performance.now();
console.log(`Time Elapsed: ${(time2 - time1) / 1000} seconds.`)