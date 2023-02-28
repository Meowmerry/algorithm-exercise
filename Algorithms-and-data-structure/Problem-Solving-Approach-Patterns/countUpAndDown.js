function countUpAndDown(n) { // Number of operations is (eventually) bounded by a multiple of n (say, 10n)
    console.log("Going up!");
    for (let i = 0; i < n; i++) { // O(n)
        console.log(i);
    }
    console.log("At the top!\nGoing down...");
    for (let j = n - 1; j >= 0; j--) { // O(n)
        console.log(j);
    }
    console.log("Back down. Bye!");
}