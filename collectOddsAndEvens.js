/*

collectOddsAndEvens
Write a function called collectOddsAndEvens that accepts an array of positive integers 
and returns an object with the count of odd numbers and the count of even numbers. 
The keys in the object should be "odd" and "even".
Examples:
collectOddsAndEvens([1, 2, 3, 4, 5, 6, 7, 8, 9]);
// { odd: 5, even: 4, });

collectOddsAndEvens([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
// { odd: 5, even: 5, });

collectOddsAndEvens([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);
// { odd: 6, even: 5,});

collectOddsAndEvens([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
// { odd: 6, even: 6 });

collectOddsAndEvens([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]);
// { odd: 7, even: 6 });

collectOddsAndEvens([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]);
// { odd: 7, even: 7 });

collectOddsAndEvens([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]);
// { odd: 8, even: 7 });

collectOddsAndEvens([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]);
// { odd: 8, even: 8 });
 */
const collectOddsAndEvens = (array)=>{
 
    /* ====== Solution 1 ======  */ 
    // const cache = {'odd': 0 , 'even' : 0};
    // for(let i = 0 ; i < array.length ; i+=1){
    //     if(array[i] % 2 !== 0 ) cache['odd']+=1; 
    //     if(array[i] % 2 === 0 ) cache['even']+=1; 
    // }
    // return cache;

    /* ====== Solution 2 ======  */ 
    return array.reduce((cache, curr)=>{
        if(curr % 2 !== 0) cache['odd'] +=1;
        if(curr % 2 === 0 ) cache['even']+=1; 

        return cache;
    },{'odd': 0 , 'even' : 0})
}

console.log(collectOddsAndEvens([1, 2, 3, 4, 5, 6, 7, 8, 9]));
// { odd: 5, even: 4, });

console.log(collectOddsAndEvens([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
// { odd: 5, even: 5, });

console.log(collectOddsAndEvens([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]));
// { odd: 6, even: 5,});

console.log(collectOddsAndEvens([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]));
// { odd: 6, even: 6 });

console.log(collectOddsAndEvens([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]));
// { odd: 7, even: 6 });

console.log(collectOddsAndEvens([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]));
// { odd: 7, even: 7 });

console.log(collectOddsAndEvens([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]));
// { odd: 8, even: 7 });

console.log(collectOddsAndEvens([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]));
// { odd: 8, even: 8 });