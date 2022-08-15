/*
Find the Longest Word in a String
Return the length of the longest word in the provided sentence.

Your response should be a number.
*/
/* =============  SOLUTION 1 ================ */
function findLongestWordLength(str) {
    const strArr = str.split(' ');
    let maxLen = -Infinity;

    for(let i = 0 ; i < strArr.length ; i ++){
        if(maxLen < strArr[i].length) maxLen = strArr[i].length
        
    }
    return maxLen;
}
console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));

/* =============  SOLUTION 2 ================ */
function findLongestWordLength(str) {
    return  str.split(' ').reduce((len, word)=>{
        return Math.max(len, word.length)
    },0)
}
console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));

/* =============  SOLUTION 3 ================ */
function findLongestWordLength(str) {
    return Math.max(...str.split(' ').map(word=> word.length))
}
console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));

/* =============  SOLUTION 4 ================ */
function findLongestWordLength(str) {
    // split the string into individual words
    const words = str.split(' ')
    
    // base case :words only has 1 element left that is the longest element
    if(words.length === 1) return words[0].length;

    // if words has multiple element, remove the first element, and recursively call the function
    return Math.max(words[0].length, findLongestWordLength(words.slice(1).join(' ')))

}
console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));