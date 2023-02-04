function fizzBuzz(n) {
    // Write your code here
    if (n % 3 == 0 && n % 5 == 0) {
        console.log("FizzBuzz");
    } else if (n % 5 == 0) {
        console.log("Buzz");
    } else if (n % 3 == 0) {
        console.log("Fizz");
    } else {
        console.log(n);
    }
}

fizzBuzz(15)