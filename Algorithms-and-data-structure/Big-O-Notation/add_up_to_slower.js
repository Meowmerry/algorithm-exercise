 // all operation depent on n input
 //  Number of operations is  (eventually) bounded by a multiple of n(say, 10n)
function addUpTo(n) { // O(n)  , operations will counting everytime loop run
  let total = 0;
  for (let i = 1; i <= n; i++) {   
    total += i;
  }
  return total;
}

var t1 = performance.now();
console.log(addUpTo(1000000000));
var t2 = performance.now();
console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds.`)