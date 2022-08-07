/* 
charAt
Write a function called charAt which accepts a string and an index (number)
 and returns the character at that index. The function should return an empty string if the number is greater than the length of the string. Do not use the built in charAt method.
Examples:
charAt('awesome', 2) // 'e'
charAt('awesome', 12) // ''
*/
const charAt = (str, target) =>{
     /* ====== Solution 1 ======  */ 
    // let result = ''
    // for(let i = 0 ;i < str.length; i++){
    //     if(i === target){
    //         result = str[i]
    //     }
    // }
    // return result;

        /* ====== Solution 2 ======  */ 
    return [...str].reduce((acc, curr, i)=> {
        if(i===target) {
            acc = curr;
        }
        return acc;
    },'')
}
console.log(charAt('awesome', 2)) // 'e'
console.log(charAt('awesome', 12)) // ''