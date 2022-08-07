/*
Write a function called calculateMonthlyOrders that accepts an array of objects. Each object has one or more properties 
for months in the year and those properties each have a value which is a number. 
The function should return the sum of all the values of all the properties in all the objects.
Examples:
let orders = [{
  February: 1,
  March: 2,
  April: 2
},
{
  April: 1,
  May: 2,
  June: 2
}]

calculateMonthlyOrders(orders) // 10;

let orders = [{
  January: 100,
  February: 200,
  March: 300,
  April: 400,
  May: 500,
  June: 600,
  July: 700,
  August: 800,
  September: 900,
  October: 1000,
  November: 1100,
  December: 1200,
},
{
  January: 200,
  February: 300,
  March: 400,
  April: 500,
  May: 600,
  June: 700,
  July: 800,
  August: 900,
  September: 1000,
  October: 1100,
  November: 1200,
  December: 1300,
}];

calculateMonthlyOrders(orders); // 16800 */


const calculateMonthlyOrders = (array)=>{
   /* ====== Solution 1 ====== 0.072 seconds */ 
    // return array.reduce((sum, curr)=>{
    //     for(let key in curr) {
    //       sum += curr[key]
    //     };
    //     return sum;
    // },0)
 

    /* ====== Solution 2 ======  0.071 seconds */
    // let sum = 0;
    // for(let i = 0 ; i < array.length ; i++){
    //   const cache = array[i]
    //   for(let key in cache){
    //     sum += cache[key]
    //   }
    // }
    // return sum;
}

let orders = [{
  February: 1,
  March: 2,
  April: 2
},
{
  April: 1,
  May: 2,
  June: 2
}]

console.log(calculateMonthlyOrders(orders)) // 10;

let orders1 = [{
  January: 100,
  February: 200,
  March: 300,
  April: 400,
  May: 500,
  June: 600,
  July: 700,
  August: 800,
  September: 900,
  October: 1000,
  November: 1100,
  December: 1200,
},
{
  January: 200,
  February: 300,
  March: 400,
  April: 500,
  May: 600,
  June: 700,
  July: 800,
  August: 900,
  September: 1000,
  October: 1100,
  November: 1200,
  December: 1300,
}];

console.log(calculateMonthlyOrders(orders1)); // 16800 