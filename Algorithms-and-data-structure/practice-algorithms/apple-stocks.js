/*
Consider an array called apple-stock as an argument. This array 
represents the variation of an Apple stock during a single day. 
The values in the array are in chronological order.
ex: [1000, 500, 1500, 2000, 0] --> The stock began at 1000 and closed at 0;
Write a function called highestProfit that calculates the highest profit 
you can make in the given day by buying and selling a single Apple stock. 
This is comprised of one buy and one sell. Keep your worst case 
time complexity in O(n^2).
Return 0 if no profit is possible OR if input is invalid.
** Extension **
Refactor your function to improve your time complexity to O(n).
Hint: Use pointers to keep track of the indices of max, min to 
calculate profit along the array.
*/
const highestProfit = (prices) => { // Time complexity in O(n^2).
    let maxProfit = 0;
    if (!Array.isArray(prices)) return maxProfit;
    for (let i = 0; i < prices.length; i++){
        const curr = prices[i];
         if (typeof curr !== 'number') return 0;
        console.log(curr)
        for (let j = i + 1; j < prices.length; j++){
            const future = prices[j];
            console.log(future)
            maxProfit = Math.max(maxProfit, future - curr);
        }
    }
    return maxProfit;
}


// The sliding window pattern!  // Time complexity in O(n).
const highestProfitEx = (prices) => {
    // base case : Return 0 if no profit is possible OR if input is invalid.
    if(!Array.isArray(prices)) return 0;
    
    // declare a variable maxProfit assign to 0
    let maxProfie = 0;

    //  declare a variable to hold the first buy assign to the first element of input
    let firstPrice = prices[0];

    // iterate thru the input 
    for (let i = 0; i < prices.length; i+=1) {
        const currPrice = prices[i];
            // check if type of current element is not a number return 0
            if(typeof currPrice !== 'number') return 0;

            // check if the current is less than the firstBuy, re-assing the firstBuy to be current element
            if(currPrice < firstPrice) firstPrice = currPrice;
                    
            // otherwise, reassign maxProfit , by compare between currentEle mines firstBuy
            else maxProfie = Math.max(maxProfie, currPrice - firstPrice)
        
    }
      
     // return maxProfie       
     return maxProfie;

};
const apple_stocks = [1000, 500, 0, 2000, 1500]; //--> 2000; buy 500 & sell 2500
console.log(highestProfitEx(apple_stocks)); //
const apple_stocks1 = [1000, 500, 1500, 2000, 0] // 15000
console.log(highestProfitEx(apple_stocks1)); //

