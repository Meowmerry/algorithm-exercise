/*
===========================================================================
****  Objectives  *****
===========================================================================
 
Motivate the need for something like Big O Notation
Describe what Big O Notation is
Simplify Big O Expressions
Define "time complexity" and "space complexity"
Evaluate the time complexity and space complexity of different algorithms using Big O Notation
Describe what a logarithm is



****   What's the idea here?  ****  
Imagine we have multiple implementations of the same function.

How can we determine which one is the "best?"

"Write a function that accepts a string input and returns a reversed copy"
Great!
Pretty Good
Only OK
Ehhhhh
Awful


===========================================================================
****  Who Cares? *****
===========================================================================

- It's important to have a precise vocabulary to talk about how our code performs
- Useful for discussing trade-offs between different approaches
- When your code slows down or crashes, identifying parts of the code 
that are inefficient can help us find pain points in our applications
- Less important: it comes up in interviews!


===========================================================================
****  What does better mean? *****
===========================================================================
- Faster?
- Less memory -  intensive?
- More readable? ?

===========================================================================
****  The Problem with Time *****
===========================================================================
- Diffeent machines will record differnet times
- The same machine will recourd different times
- For fast algorithms, speed measurements may not be precise enough?



===========================================================================
****  If not time, then what? *****
===========================================================================
- Rather than counting secounds, which are so variable
- let's count the number of simmple operations the computer has to perform!

===========================================================================
****  Cunting Operations *****
===========================================================================
- Counting is hard, 
Depending on what we count, the number of operations can be as low as 2n or as high as 5n + 2 
But regardless of the exact number, the number of operations grows roughly proportionally with n
If n doubles, the number of operations will also roughly double

===========================================================================
****  Introducting ... Big O *****
===========================================================================
Big O Notation is a way to formalize fuzzy counting

It allows us to talk formally about how the runtime of an algorithm grows as the inputs grow

We won't care about the details, only the trends

===========================================================================
**** Big O Definition  *****
===========================================================================
We say that an algorithm is O(f(n)) if the number of simple operations the computer has to do is eventually less than a constant times f(n), as n increases

f(n) could be linear (f(n) = n)
f(n) could be quadratic (f(n) = n2 )
f(n) could be constant (f(n) = 1)
f(n) could be something entirely different!





*/
//An Example  ==> O(n)
function addUpTo(n) { // Number of operations is (eventually) bounded by a multiple of n (say, 10n) 
    let total = 0;
    for (let i = 1; i <= n; i++) {
        total += i;
    }
    return total;
}

//Suppose we want to write a function that calculates the sum of all numbers from 1 up to (and including) some number n.

function addUpTo(n) {
    return n * (n + 1) / 2;  // --> Always 3 operations   O(1)
}
//Which one is better?

// Another Example ==> O(n)
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

// OMG MOAR EXAMPLEZ ==> O(n * n)
function printAllPairs(n) {
    for (var i = 0; i < n; i++) { // O(n) operation inside of an O(n) operation.
        for (var j = 0; j < n; j++) { //O(n2)
            console.log(i, j);
        }
    }
}
/*
===========================================================================
**** Simplifying Big O Expressions *****
===========================================================================

When determining the time complexity of an algorithm, there are some helpful rule of thumbs for big O expressions.

These rules of thumb are consequences of the definition of big O notation.


****  Constants Don't Matter ****
Constants Don't Matter
NOT ==> O(2n) --> O(n)
NOT ==> O(500) --> O(1)
NOT ==> O(13n2) --> O(n2)


*****   Smaller Terms Don't Matter ****
NOT ==> O(n + 10)  --> O(n)
NOT ==> O(1000n + 50) --> O(1)
NOT ==> O(n + 5n + 8 ) --> O(n2)


===========================================================================
**** Big O Shorthands  *****
===========================================================================
- Analyzing complexity with big O can get complicated
- There are several rules of thumb that can help
- These rules won't ALWAYS work, but are a helpful starting point

1) Arithmetic operations are constant
2) Variable assignment is constant
3) Accessing elements in an array (by index) or object (by key) is constant
4) In a loop, the the complexity is the length of the loop times the complexity of whatever happens inside of the loop




*/
// A Couple More Examples

function logAtLeast5(n) { // O(n)
    for (var i = 1; i <= Math.max(5, n); i++) {
        console.log(i);
    }
}

function logAtMost5(n) { // O(1)
    for (var i = 1; i <= Math.min(5, n); i++) {
        console.log(i);
    }
}