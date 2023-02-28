/* 
Number of perations is (eventually) bounded by a multiple of n (say, 10n)

*/
function countUpAndDown(n) { // Big O will be O(n) as n grow will n grow
    console.log("Going up!");
    for (var i = 0; i < n; i++) {  // O(n)
      console.log(i);
    }
    console.log("At the top!\nGoing down...");
    for (var j = n - 1; j >= 0; j--) { // O(n)
      console.log(j);
    }
    console.log("Back down. Bye!");
  }