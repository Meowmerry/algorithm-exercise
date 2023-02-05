

function miniMaxSum(arr) {
    // Write your code here
    const soreArr = arr.sort((a,b)=> a - b);
    let sumMax = 0;
    let sumMin = 0;
    for(let i = 1 ; i < soreArr.length ; i +=1){
        sumMax += soreArr[i]
    }
    for(let i = 0 ; i < soreArr.length - 1 ; i +=1){
        sumMin += soreArr[i]
    }
    console.log(`${sumMin} ${sumMax}`)

}
miniMaxSum([7,69, 2, 221 ,8974]) //299 9271
// miniMaxSum([1,3,5,7,9]) //