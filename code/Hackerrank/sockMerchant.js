/*
There is a large pile of socks that must be paired by color. Given an array of integers representing the color of each sock, determine how many pairs of socks with matching colors there are.

Example
There is one pair of color  and one of color . There are three odd socks left, one of each color. The number of pairs is .

Function Description

Complete the sockMerchant function in the editor below.

sockMerchant has the following parameter(s):

int n: the number of socks in the pile
int ar[n]: the colors of each sock
Returns
int: the number of pairs
Input Format

The first line contains an integer , the number of socks represented in .
The second line contains  space-separated integers, , the colors of the socks in the pile.
*/

function sockMerchant(n, ar) {
    const sockCount = {};
    console.log(ar)
    for(const sock of ar){
        if(sock in sockCount){
            sockCount[sock] += 1;
        }else{
            sockCount[sock] =1;
        }
    }
    let numOfPairs = 0;
    for(const count in sockCount){
        numOfPairs += Math.floor(sockCount[count]/2)
    }
    return numOfPairs;
}
const socks = [10, 20, 20, 10, 10, 30, 50, 10, 20]
console.log(sockMerchant(9,socks)) // Output: 3