function validAnagram(first, second) {
    // add whatever parameters you deem necessary - good luck!
    if (first.length !== second.length) {
        return false
    }
    //  make object to check
    const lookup = {};
    for (let i = 0; i < first.length; i++) {
        let letter = first[i]
        lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
    }
    for (let i = 0; i < second.length; i++) {
        let letter = second[i];
        // can't find letter or letter is zero then it's not an anagram
        if (!lookup[letter]) {
            return false
        } else {
            lookup[letter] -= 1
        }
    }

    return true

}
// first : {a: 3, n: 1, g: 1, r: 1, m: 1,s:1}
// second : {a: 3, n: 1, g: 1, r: 1, m: 1,s:1} 
// เอาแต่ละตัวมาลบ กันจะได้  lookup : {a: 0, n: 0, g: 0, r: 0, m: 0,s:0} ทุกตัวเท่ากัน  
//console.log("validAnagram", validAnagram('anagrams', 'smnaagra')) //  true

//  first:   {t: 1, h: 1 , a: 2 , s: 2,n:1 , e: 2 }
//  second:  {t: 2, h: 1 , a: 2 , s: 2,n:2 , e: 2 }
console.log("validAnagram", validAnagram('thasanees', 'thasaneee')) //  false