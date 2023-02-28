

 const solution = (numbers) => {
    // Type your solution here
    if(numbers.length === 0) return 0;
    let  largest = -Infinity;
    for(const val of numbers){
        if(val > largest){
            largest = val;
        
        }
    }
    return largest;
};
console.log(solution([]))

const solutionBST = (arr) => {
   // iterate thru arr,
   // if number in arr is nagetive not skip
   let left = 0;
   let right = 0;
   let sumNode = arr[0] // set the first index be first Node
   const values = []
   for(let i = 0 ; i< arr.length ; i ++){
    if(arr[i]>=0) {
        values.push(arr[i])
    }
   }
   for(let i = 0 ; i < values.length ; i++){
    if(i % 2 !== 0){
        left = sumNode += values[i]
    }else{
        right += values[i]
    }
   }
  if(right > left) return 'Right';
  return 'Left'

};

console.log(solutionBST([3,6,2,9,-1,10]))