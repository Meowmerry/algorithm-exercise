const insertionSort = (arr)=>{
    const result = [];
    for(let i = 0 ; i < arr.length; i+=1){
        let j = i;
        while(j > 0 && arr[j-1] > arr[j]){
            result.push(arr[j], arr[j-1])
            j = j - 1;
        }
    }
    return result;
}
console.log([2,8,9,4,5,3]) // [2,3,4,5,8,9]