/* 
==========  Big O Space Complexity Quiz ==========
*/
/* 
Question 1: ==> O(1)
Determine the space complexity for the following function  
*/
function logUpTo(n) {
    for (var i = 1; i <= n; i++) {
        console.log(i);
    }
}
/* 
Question 2:  ==> O(1)
Determine the space complexity for the following function  
*/
function logAtMost10(n) {
    for (var i = 1; i <= Math.min(n, 10); i++) {
        console.log(i);
    }
}

/* 
Question 3: ==> O(1)
Determine the space complexity for the following function  
*/
function logAtMost10(n) {
    for (var i = 1; i <= Math.min(n, 10); i++) {
        console.log(i);
    }
}
/* 
Question 4: ==> O(n)
Determine the space complexity for the following function  
*/
function onlyElementsAtEvenIndex(array) {
    var newArray = Array(Math.ceil(array.length / 2));
    for (var i = 0; i < array.length; i++) {
        if (i % 2 === 0) {
            newArray[i / 2] = array[i];
        }
    }
    return newArray;
}
/* 
Question 5:  ==> O(n)
Determine the space complexity for the following function  
*/
function subtotals(array) {
    var subtotalArray = Array(array.length);
    for (var i = 0; i < array.length; i++) {
        var subtotal = 0;
        for (var j = 0; j <= i; j++) {
            subtotal += array[j];
        }
        subtotalArray[i] = subtotal;
    }
    return subtotalArray;
}