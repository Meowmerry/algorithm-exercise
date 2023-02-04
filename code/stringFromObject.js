/*
stringFromObject
Write a function called stringFromObject that generates a string from an object's key/value pairs. 
The format should be "key = value, key = value". 
Each key/value pair should be separated by a comma and space except for the last pair.
Examples:
stringFromObject({ a: 1, b: '2' }); // "a = 1, b = 2"
stringFromObject({ name: 'Elie', job: 'Instructor', isCatOwner: false }); // "name = Elie, job = Instructor, isCatOwner = false"
stringFromObject({}); // ""
*/
// const stringFromObject = (object) =>{
//     let result = "";
//     for(const key in object){
//         result += `${key} = ${object[key]}, `
//     }
//     return result;
// }

const stringFromObject = (object) =>{
     let result = [];
     for(const [key, value] of Object.entries(object)){
        result.push(`${key} = ${value}, `)
     }
     return result.join('')
}
console.log(stringFromObject({ a: 1, b: '2' })); // "a = 1, b = 2"
console.log(stringFromObject({ name: 'Elie', job: 'Instructor', isCatOwner: false })); // "name = Elie, job = Instructor, isCatOwner = false"
console.log(stringFromObject({})); // ""