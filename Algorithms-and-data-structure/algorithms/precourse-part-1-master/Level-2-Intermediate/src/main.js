// this function accepts an array of numbers
// and returns an array of only the odd numbers
// ex: returnOdds([1,2,3,4,5,6,7]); -> [1,3,5,7]
function returnOdds(array) {
  // CODE HERE
  return array.reduce((acc, curr) => {
    if (curr % 2 !== 0) acc.push(curr);
    return acc;
  }, []);
}

// this function accepts an array of numbers
// and returns an array of only the even numbers
// ex: returnEvent([1,2,3,4,5,6,7]); -> [2,4,6]
function returnEvens(array) {
  // CODE HERE
  const result = [];
  array.forEach((element) => {
    if (element % 2 === 0) result.push(element);
  });
  return result;
}

// returns only the max element from the inputted array of numbers
// ex: findMax([1,25,6,3]); -> 25
function findMax(array) {
  // CODE HERE
  // return Math.max(...array);
  let max = -Infinity;
  for (let i = 0; i < array.length; i += 1) {
    if (max < array[i]) max = array[i];
  }
  return max;
}
console.log(findMax([1, 25, 6, 3])); //-> 25

/**
 * remove leading and trailing whitespace or specified characters from string
 * trim(' hello '); -> 'hello'
 */
function trim(string) {
  // CODE HERE
   return  string.trim()
}
console.log(trim(" hello "));
// under the hood, a JavaScript array is a specific type of object in which values are paired with sequentially numbered keys.
// the "Array" object also contains a number of methods that give arrays their functionality.
// the below function should return an empty object that has the behavior and functionality of an array. 
// this object should have the following methods:
// push(val) adds val to the end
// pop() removes a value from the end and returns it
// unshift(val) adds val to the beginning
// shift() removes a value from the beginning and returns it
// the goal of this problem is to reverse engineer what array methods are actually doing and create an object that has those methods
function createArray() {
  // CODE HERE
  // console.log('-->',  Object.create(Array(0)))
  // return Object.create(Array(0))
  const arr = {
    length: 0,
    push(...val){
      let j = 0; 
      if(arr.length === 0){
        for(let i = 0; i < val.length; i++){
          arr[i] = val[i];
          arr.length++;
        }
      }else{
        const startLength = arr.length;
        for(let i = startLength ; i < startLength + val.length ; i++){
          arr[i] = val[j];
          arr.length++;
          j++;
        }
      }
    },
    pop(){
      const lastEl = arr[arr.length - 1];
      delete arr[arr.length - 1]
      arr.length--;
      return lastEl;
    },

    unshift(...val){
      for(let i = arr.length - 1; i>=0 ; i--){
        arr[i+val.length] = arr[i];
      }
      for(let i = 0 ; i < val.length ;i++){
        arr[i] = val[i];
      }
      arr.length +=1;
      return arr.length;
    },
 

    shift () {
      const firstEl = arr[0];
      for (let i = 0; i < arr.length-1; i++) {
        arr[i] = arr[i+1];
      }
      arr.length -= 1;
      return firstEl;
    }
  }
  return arr; 
}
console.log(createArray())
