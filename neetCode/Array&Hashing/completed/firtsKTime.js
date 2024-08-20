/*
▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁
✏️ Description
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
Q. Given an array of positive integers, find the first element that occurs k number of times. 
If no element occurs k times, return -1, and you may assume k is greater than 0. 

Examples:
• Given an array: [1, 2, 2, 3, 3], k: 2 // returns 2
• Given an array: [], k: 1 // returns -1

Explore:
Input will be an array of integers and an integer k. We want to find out if any elements in the array repeat k times. k will always be greater than 0. if more than one elements repeats k times, return only the first element. if no elements repeats k times, return -1.

The array might contain negative, positive, and zero. It's unknown if the elements will be given in order.

Brianstrom:
Time: O(n) Where n is the length array
Space: O(1)

Plan:


Interate thru the array
[1, 2, 2, 3, 3]

[2,2,2, 3,3, 1,1,1]

{
2:3,
3:2,
1:3,

}
{
1: 1
2: 2
3: 2
}

Interate thru obj
    if key, count from obj
        if(count === k) return key

return -1
  
  
Implement:


*/

function firstKTimes(array, k) {
    // Write your code here. 
    const kMap = new Map();
    // const kMap = {} 
    //iterate through the array and set each element in the map. If it already exsists in the map, then increment.
    array.forEach((el) => {
        //check if el is in the map
        //  kMap.set(ele, (kMap.get(el) || 0)+1)
        if (!kMap.get(el)) {

            kMap.set(el, 1);

        } else {
            kMap.set(el, kMap.get(el) + 1);
        }

    });

    // console.log(kMap) // //Map { 1: 1, 2: 1, 3: 1 }
    for (const [key, count] of kMap) {

        if (count === k) return key;
    }

    return -1;
}

// Test Cases
console.log(firstKTimes([1, 2, 2, 3, 3], 2)); // 2
console.log(firstKTimes([1, 2, 2, 3, 3], 3)); // -1
console.log(firstKTimes([1, 2, 3, 2, 3], 2)); // 2
console.log(firstKTimes([2, 2, 3, 3, 1, 1, 1], 3)); // 1
console.log(firstKTimes([2, 2, 2, 3, 3, 1, 1, 1], 3)); // 2
console.log(firstKTimes([], 1)); // -1

