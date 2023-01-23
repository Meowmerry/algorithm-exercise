/* Write a function called repeat, which accepts a string and a number and returns a new string with the string repeated that number of times. 
Do not use the built in repeat method.
Examples:
repeat('Matt', 3) // 'MattMattMatt'
repeat('Elie', 2) // 'ElieElie'
repeat('Michael', 0) // ''*/
const repeat = (str, num)=>{
    let result = '';
    for(let i = 0 ;i<num ; i+=1) {
        result+=str
    }
    return result;
}
console.log(repeat('Matt', 3)) // s'MattMattMatt'
console.log(repeat('Elie', 2)) // 'ElieElie'
console.log(repeat('Michael', 0)) // ''

const repeatRecurtion = (str, num)=>{
    if(num === 0) return '';
    if(num === 1) return str;
    else return str + repeatRecurtion(str, num - 1)
}
console.log(repeatRecurtion('Matt', 3)) // s'MattMattMatt'
console.log(repeatRecurtion('Elie', 2)) // 'ElieElie'
console.log(repeatRecurtion('Michael', 0)) // ''