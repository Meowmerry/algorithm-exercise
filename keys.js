/* 
keys
Write a function called keys, which accepts an object and returns an array of all of the keys in the object. 
Do not use the built in Object.keys() function!
Examples:
let obj = { a: 1, b: 2, c: 3 };
keys(obj); // ["a", "b", "c"]

let obj2 = { first: 'Matt', last: 'Lane' };
keys(obj2); // ["first", "last"]

let obj3 = {};
keys(obj3); // []
*/
const keys = (obj)=>{
    const result = [];
    for(let key in obj){
        result.push(key)
    }
    return result
}


let obj = { a: 1, b: 2, c: 3 };
console.log(keys(obj)); // ["a", "b", "c"]

let obj2 = { first: 'Matt', last: 'Lane' };
console.log(keys(obj2)); // ["first", "last"]

let obj3 = {};
console.log(keys(obj3)); // []