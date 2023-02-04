/*
scheduleCheck
Write a function called scheduleCheck which accepts two objects which have a key for each day 
of the week and a value that is either true or false. 
The function should return the number of days of the week that both objects have a value of true for.
Examples:
let schedule1 = {
  Monday: true,
  Tuesday: true,
  Wednesday: true,
  Thursday: true,
  Friday: true,
  Saturday: true,
  Sunday: true,
};
let schedule2 = {
  Monday: true,
  Tuesday: true,
  Wednesday: true,
  Thursday: true,
  Friday: true,
  Saturday: true,
  Sunday: true,
};

scheduleCheck(schedule1, schedule2) // 7;

let schedule1 = {
  Monday: true,
  Tuesday: true,
  Wednesday: true,
  Thursday: true,
  Friday: true,
  Saturday: true,
  Sunday: true,
};
let schedule2 = {
  Monday: true,
  Tuesday: true,
  Wednesday: true,
  Thursday: true,
  Friday: true,
  Saturday: false,
  Sunday: true,
};

scheduleCheck(schedule1, schedule2) // 6;
*/
const scheduleCheck = (obj1, obj2)=>{
    let countObj1 = 0;
    let countObj2 = 0;
    for(const key in obj1){
        if(obj1[key]) countObj1 +=1;
    }
    for(const key in obj2){
        if(obj2[key]) countObj2 +=1;
    }
    if(countObj1 === countObj2) return countObj1;
    else return countObj2;
}

let schedule1 = {
    Monday: true,
    Tuesday: true,
    Wednesday: true,
    Thursday: true,
    Friday: true,
    Saturday: true,
    Sunday: true,
  };
  let schedule2 = {
    Monday: true,
    Tuesday: true,
    Wednesday: true,
    Thursday: true,
    Friday: true,
    Saturday: true,
    Sunday: true,
  };
  
  console.log(scheduleCheck(schedule1, schedule2)) // 7;
  let schedule3 = {
    Monday: true,
    Tuesday: true,
    Wednesday: true,
    Thursday: true,
    Friday: true,
    Saturday: true,
    Sunday: true,
  };
  let schedule4 = {
    Monday: true,
    Tuesday: true,
    Wednesday: true,
    Thursday: true,
    Friday: true,
    Saturday: false,
    Sunday: true,
  };
  
  console.log(scheduleCheck(schedule3, schedule4)) // 6;