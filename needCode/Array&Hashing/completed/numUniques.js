

/*
▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁
✏️ Description
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
Q.Given an unsorted array, return the number of unique elements that appear only once in the array.

    Examples:
• Given an array: [3, 1, 1, 2, 3, 1, 1, 1, 4] // returns 2 (unique elements: 2 and 4)
• Given an array: [1] // returns 1 (unique element: 1)

Explore:
• Given an array: [1,1,1] // returns 0 
• Given an array: [1,2,3] // returns 3
    
Brainstrom:
Time: O(N) to iterate through all number in an array
Space: 0(1)

Plan: 
- create ObjectMap
- Interate throuhg the array
    - SetObjectMap Key: element , Value: 0 + 1


- Set count variable = 0
- Interate thru object
    if found value === 1
        inclement count by 1
        
return count
*/

// function numUniques(array) {
//     // Write your code here.
//     const uniqueMap = new Map ();
//     let count = 0;
//     array.forEach(el => {
//     if (!uniqueMap.get(el)) {
//         uniqueMap.set(el, 1);
//     } else {
//         uniqueMap.set(el, uniqueMap.get(el) + 1);
//     }
//     });

//     for (const [key, val] of uniqueMap){
//         if (val === 1) count++;
//     }
//     return count
// }

function numUniques(array) {
    // Write your code here.
    const uniqueMap = new Map ();
    let count = 0;
    array.forEach(el => {
        uniqueMap.set(el, (uniqueMap.get(el) || 0) + 1)
        // [3, 1, 1, 2, 3, 1, 1, 1, 4, 5]
        // count 2
        if(uniqueMap.get(el) === 1){
            count++;
        }else if(uniqueMap.get(el) === 2){
            count--;
        }
        // console.log({ uniqueMap });
        // console.log('count', count);
    });
    return count;
}

// Test Cases
console.log(numUniques([])) // 0
console.log(numUniques([3, 1, 1, 2, 3, 1, 1, 1, 4, 5])) // 3
console.log(numUniques([3, 1, 1, 2, 3, 1, 1, 1, 4])) // 2
console.log(numUniques([1])) // 1