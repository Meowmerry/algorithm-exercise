function reverseArray(a) {
    // Write your code here
    // return a.reverse()
    const newArr =[];
    for(let i = a.length - 1 ; i >= 0; i -=1){
        newArr.push(a[i])
    }
   return newArr;
}
console.log(reverseArray([1,2,3])) //[3,2,1]