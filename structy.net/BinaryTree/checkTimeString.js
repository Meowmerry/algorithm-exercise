/* 
Check if the given string is a correct time representation of the 24-hour clock.

Example

For time = "13:58", the output should be
solution(time) = true;
For time = "25:51", the output should be
solution(time) = false;
For time = "02:76", the output should be
solution(time) = false.
Input/Output

[execution time limit] 4 seconds (js)

[input] string time

A string representing time in HH:MM format. It is guaranteed that the first two characters, as well as the last two characters, are digits.

[output] boolean

true if the given representation is correct, false otherwise.

Here is a function that takes a string representing time in the "HH:MM" format 
and returns a boolean indicating whether the representation is correct:

This function uses the parseInt function to extract the hour and minute parts of the time string 
and converts them to integers. 
It then checks that the hours are in the range of 0 to 23 and the minutes are in the range of 0 to 59. 
If both conditions are true, the function returns true, indicating that the time representation is correct. 
Otherwise, it returns false.

*/
function checkTimeString(time) {
    // let hours = parseInt(time.substring(0, 2));
    // let minutes = parseInt(time.substring(3, 5));
    let hours = parseInt(time.slice(0, 2));
    let minutes = parseInt(time.slice(3, 5));
    console.log(hours)
    console.log(minutes)
    
    return hours >= 0 && hours <= 23 && minutes >= 0 && minutes <= 59;
  }
 const time = "13:58";
 const time1 = "25:51"
console.log(checkTimeString(time))// true;
console.log(checkTimeString(time1))// false;
  