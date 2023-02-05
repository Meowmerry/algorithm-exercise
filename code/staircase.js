function staircase(n) {
    // Write your code here
    let stair = "#";
    let space = " ";
    let numOfSpace = n - 1;
    let numOfStair = 1;
    let i = 0;
    while(i < n){
        console.log(`${space.repeat(numOfSpace)}${stair.repeat(numOfStair)}`);
        numOfSpace -=1;
        numOfStair +=1;
        i += 1;
    }
  return " "
}
staircase(4)