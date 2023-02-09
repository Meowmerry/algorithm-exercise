function solution(text) {
    return [...text].reduce((result, ele)=>{
        if(ele === "F" || ele === "f"){
            result+=`F${ele}`
        }else{
            result+=ele
        }
        return result;
    },'')

}
console.log(solution('force'))