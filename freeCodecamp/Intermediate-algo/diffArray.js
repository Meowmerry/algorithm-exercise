/* 
Diff Two Arrays
Compare two arrays and return a new array with any items only found in one of the two given arrays, 
but not both. In other words, return the symmetric difference of the two arrays.

Note: You can return the array with its elements in any order.
*/
/* ====== Solution 1 ======  */
function diffArray(arr1, arr2) {
    const newArr = [];
    function onlyInFirst(first, second) {
        for (let i = 0; i < first.length; i++) {
            if (second.indexOf(first[i]) === -1) {
                newArr.push(first[i]);
            }
        }
    }
    onlyInFirst(arr1, arr2);
    onlyInFirst(arr2, arr1);

    return newArr;
}

console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5])); //[4]
console.log(
    diffArray(
        ["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"],
        ["diorite", "andesite", "grass", "dirt", "dead shrub"]
    )
);
// should return ["pink wool"]
console.log(diffArray([1, "calf", 3, "piglet"], [1, "calf", 3, 4])); //  ["piglet", 4]

/* ====== Solution 2 ======  */
function diffArray2(arr1, arr2) {
    return arr1
        .concat(arr2)
        .filter((item) => !arr1.includes(item) || !arr2.includes(item));
}

console.log(diffArray2([1, 2, 3, 5], [1, 2, 3, 4, 5])); //[4]
console.log(
    diffArray2(
        ["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"],
        ["diorite", "andesite", "grass", "dirt", "dead shrub"]
    )
);
// should return ["pink wool"]
console.log(diffArray2([1, "calf", 3, "piglet"], [1, "calf", 3, 4])); //  ["piglet", 4]

/* ====== Solution 3 ======  */
function diffArray3(arr1, arr2) {
    return [...diffFunc(arr1, arr2), ...diffFunc(arr2, arr1)];

    // declare diffFunc
    function diffFunc(a, b) {
        return a.filter((item) => b.indexOf(item) === -1);
    }
}

console.log(diffArray3([1, 2, 3, 5], [1, 2, 3, 4, 5])); //[4]
console.log(
    diffArray3(
        ["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"],
        ["diorite", "andesite", "grass", "dirt", "dead shrub"]
    )
);
// should return ["pink wool"]
console.log(diffArray3([1, "calf", 3, "piglet"], [1, "calf", 3, 4])); //  ["piglet", 4]


/* ====== Solution 4 ======  */
function diffArray4(arr1, arr2) {
    const union = [];
    for(const el of arr1){
        if(!union.includes(el)){
            union.push(el)
        }
    }
    for(const el of arr2){
        if(!union.includes(el)){
            union.push(el)
        }
    }
   
    const newArr = [];
    for(const currEle of union){
        if(arr1.includes(currEle) && !arr2.includes(currEle)){
            newArr.push(currEle)
        }else if(!arr1.includes(currEle) && arr2.includes(currEle)){
            newArr.push(currEle)
        }
    }

    return newArr;
}

console.log(diffArray4([1, 2, 3, 5,6], [1, 2, 3, 4, 5])); //[6,4]
console.log(
    diffArray4(
        ["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"],
        ["diorite", "andesite", "grass", "dirt", "dead shrub"]
    )
);
// should return ["pink wool"]
console.log(diffArray4([1, "calf", 3, "piglet"], [1, "calf", 3, 4])); //  ["piglet", 4]

/* ====== Solution 5 ======  */
function diffArray5(arr1, arr2) {
    const union =  new Set([...arr1, ...arr2]);
    const result = [];
    for(const currEle of union){
        if(arr1.includes(currEle) && !arr2.includes(currEle)) result.push(currEle);
        else if(!arr1.includes(currEle) && arr2.includes(currEle))  result.push(currEle);
    }
    return result;
}

console.log(diffArray5([1, 2, 3, 5], [1, 2, 3, 4, 5])); //[4]
console.log(
    diffArray5(
        ["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"],
        ["diorite", "andesite", "grass", "dirt", "dead shrub"]
    )
);
// should return ["pink wool"]
console.log(diffArray5([1, "calf", 3, "piglet"], [1, "calf", 3, 4])); //  ["piglet", 4]



