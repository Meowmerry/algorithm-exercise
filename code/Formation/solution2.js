function solution(string) {
   return string.split('').reverse().join('')
}
console.log(solution('abc')) //cbd
console.log(solution('')) //''
console.log(solution('a')) //'a'


function solution(arg1) {
   const newArg = String(arg1).split('')
    let sum = 0;
    for(let i = 0 ; i < newArg.length ;i +=1){
        sum += Number(newArg[i]);
    }
    return sum;
}
console.log(solution(123))