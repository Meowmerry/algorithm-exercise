/*
Write a function which takes in  a string and  returns counts of each character in the string.
charCount("aaaa")  // {a:4}
charCount("hello") // {h:1, e:i, l:2, o:1}
charCount("Your PIN number is 1234!")

{
    1:1,
    2:1,
    3:1,
    4:1,
    b:1,
    e:1,
    i:2,
    m:1,
    n:2,
    o:1,
    p:1,
    r:2,
    s:1,
    u:2,
    y:1
}

function charCount(str) {
   do something
   return an  object with  keys that are lowercase alphanumeric characters in the string; values should be their characters.
}
*/

function charCount(str) {
    //  make object to return  at end
    let obj = {}
    //  loop over string, for each character...
    for (let i = 0; i < str.length; i++) {
        let char = str[i].toLowerCase();

        //if (char.match(/[a-z0-9]/)) OR
        if (/[a-z0-9]/.test(char)) {
            // if the  char  is a number/letter AND is a key in object, add one  to count
            if (obj[char] > 0) {
                obj[char]++;
                // if the char is a number/letter AND  is not in object, add it to object and set value to 1
            } else {
                obj[char] = 1;
                // if character is something else (space, period, etc. ) don't do anything
            }
        }

    }
    // return  object at end
    return obj;
}
console.log('charCount', charCount("Your PIN number is 1234!"))
/*
{
  '1': 1,
  '2': 1,
  '3': 1,
  '4': 1,
  y: 1,
  o: 1,
  u: 2,
  r: 2,
  p: 1,
  i: 2,
  n: 2,
  m: 1,
  b: 1,
  e: 1,
  s: 1
}
 */


// REFECTOR Solution 1

function charCount(str) {
    let obj = {}
    for (let char of str) {
        char = char.toLowerCase()
        if (/[a-z00-9]/ig.test(char)) {
            if (obj[char] > 0) {
                obj[char]++;
            } else {
                obj[char] = 1;
            }
        }
    }
    return obj;
}
console.log('charCount', charCount("Hello, Hi I am Meow and I am 25year old!"))

// REFECTOR Solution 2
// We can create fuction to check charCodeAt will more faster then Regex
function isAlphaNumuric(char) {
    let code = char.charCodeAt(0) //  start from Index 0
    if (!(code > 47 && code < 58) && // numuric (0 - 9)
        !(code > 64 && code < 91) && // upper alpha (A-Z)
        !(code > 96 && code < 123)) {// lower alpha (a-z)
        return false
    }
    return true
}

function charCount(str) {
    let obj = {}
    for (let char of str) {
        if (isAlphaNumuric(char)) {
            char = char.toLowerCase()
            obj[char] = ++obj[char] || 1;
        }
    }
    return obj;
}
console.log('charCount', charCount("Hello, Hi I am Meow and I am 25year old!"))

