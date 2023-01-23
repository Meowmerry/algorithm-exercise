/*
Write a function called removeFromString, which accepts a string, a starting index (number) and a number of characters to remove. 
The function should return a new string with the characters removed.
Examples:
removeFromString('Elie', 2, 2) // 'El'
removeFromString('Elie', 0, 1) // 'lie'
removeFromString('Rithm School', 0, 6) // 'School'
removeFromString('Rithm School', 2, 4) // 'RiSchool'
removeFromString('Rithm School', 6, 400) // 'Rithm '
*/
function removeFromString(str, startIdx, num){
   return str.slice(0, startIdx) + str.slice(startIdx+num)
}
console.log(removeFromString('Elie', 2, 2)) // 'El'
console.log(removeFromString('Elie', 0, 1)) // 'lie'
console.log(removeFromString('Rithm School', 0, 6)) // 'School'
console.log(removeFromString('Rithm School', 2, 4)) // 'RiSchool'
console.log(removeFromString('Rithm School', 6, 400)) // 'Rithm '



/* 
This function accepts a string str, a starting index start and a number of characters to remove num. 
It uses recursion to build a new string without the removed characters.

It starts by checking if the current index of the string is equal to the starting index, 
if so, it will return the rest of the string after the removed characters. 
If the current index is smaller than the starting index, 
it will return the current character concatenated with the result of the recursive call, 
in this way we can keep building the string until the starting index, once the starting index is reached, 
the recursion will start to skip the characters to be removed, and continues to build the string by concatenating the rest of the string.

It uses the slice() method one time to get the substring from start + num to the end of the string.
*/
function removeFromString(str, start, num, currentIndex = 0) {
    if (currentIndex === start) {
        return str.slice(start + num);
    }
    if (currentIndex < start) {
        return str[currentIndex] + removeFromString(str, start, num, currentIndex + 1);
    }
    if (currentIndex > start) {
        return removeFromString(str, start, num, currentIndex + 1);
    }
}
console.log(removeFromString('Elie', 2, 2)) // 'El'
console.log(removeFromString('Elie', 0, 1)) // 'lie'
console.log(removeFromString('Rithm School', 0, 6)) // 'School'
console.log(removeFromString('Rithm School', 2, 4)) // 'RiSchool'
console.log(removeFromString('Rithm School', 6, 400)) // 'Rithm '