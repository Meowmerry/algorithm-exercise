/*
O(n) operation inside of and O(n) operation ---> O(n^2) -- N squrt
*/
function printAllPairs(n) { // O(n*2)
    for (var i = 0; i < n; i++) {  // O(n)
      for (var j = 0; j < n; j++) {  // O(n)
        console.log(i, j);
      }
    }
  }