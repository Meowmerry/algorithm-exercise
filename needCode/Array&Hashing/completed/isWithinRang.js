/* 
Given an array of numbers and a positive number representing a range, 
determine if all of the numbers in the array are within that range of each other. 
Return true if so and false otherwise.

For example, if the numbers are [6, 2, 8, 10, 15, 1] and the range is 16, 
then this function returns true because all of the numbers are at least that close in value. 
But for the same numbers, if the range is 6, 
then the function should return false because there are multiple pairs with a larger range;
2 & 10, 1 & 8, 6 & 15, etc.

[execution time limit] 4 seconds (js)

[input] array.integer array

[input] integer range

A positive integer

[output] boolean

[6, 2, 8, 10, 15, 1] and the range is 16, -- True
[6, 2, 8, 10, 15, 1] and the range is 6, -- False



Explore:


Brainstorm:


Plan:
Find the greatest and smallest number and find the difference. 
If the difference is > the given range, then return false. else return true. 

Can use Max and Min, or can try the reduce method

*/
function isWithInRang(array, range){
    let min = Infinity;
    let max = -Infinity;
    for(const num of array){
        if(min > num) {
            min = num;
        }else if(max < num){
            max = num;
        }
    }
    return max - min <= range
}

console.log(isWithInRang([6, 2, 8, 10, 15, 1] , 16)) // true
console.log(isWithInRang([6, 2, 8, 10, 15, 1] , 6)) // false