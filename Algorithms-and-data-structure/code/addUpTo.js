// ============ Fast solution  ============ 
function addUpTo(n) {
    return n * (n + 1) / 2;
}

var time1 = performance.now();
console.log(addUpTo(1000000000));
var time2 = performance.now();
console.log(`Time Elapsed: ${(time2 - time1) / 1000} seconds.`)


//  ============   Nomal Solution ===========
function addUpTo(n) {
    let total = 0;
    for (let i = 1; i <= n; i++) {
        total += i;
    }
    return total;
}

var t1 = performance.now();
addUpTo(1000000000);
var t2 = performance.now();
console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds.`)

function sum(arr) {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        total += arr[i]
    }
    return total;
}
console.log("sum arr : ", sum([1, 2, 3, 4, 5, 99]))

function sum(arr) {
    let total = 0;
    arr.map(x => total += x)
    return total
}
console.log("sum arr : ", sum([1, 2, 3, 4, 5, 99]))