/*
'''
Today, you will be working on the student attendance question.

Every day, a student earns a grade for their attendance:
P - Present
A - Absent
L - Late

The student gets to pass the class if they have:
1) No more than one absence.
2) No more than 2 consecutive late days.
 

EXAMPLE(S)
Example: PLLPAL => true
Example: PPPPLLL => false
Example: AAP => false
Example: APLLA => false
Example: APLLPLLL => false
Example: PLLLALL => false
Example: APLLPLL => true

Clarify:
Assuming the input string will have only P L A all uppperCase
String >= 0


Plan:
Defind the varialbe of absent = 0, late = 0
- Go through the string 
    - Check char is A
        increment absent  by 1
        if absent > 1 return false
    - Check char is L
        increment late by 1
        if late > 2 return false
    - set late to 0

    return true

BrainStrom:
Time: O(N) where n is the length of the input
Space: O(1)


FUNCTION SIGNATURE
func canPass(record: String) -> Bool

Input: String
Output: Boolean

*/
function canPass(string) {
    let late = 0, absent = 0;
    for (const char of string) {
        if (char === 'A') {
            absent += 1;
            if (absent > 1) {
                return false;
            }
        } else if (char === 'L') {
            late += 1;
            if (late > 2) {
                return false;
            }
        } else {
            late = 0;
        }
    }
    return true;
}

// Example: PLLPAL => true
console.log(canPass('PLLPAL') == true);
// // Example: PPPPLLL => false
console.log(canPass('PPPPLLL') == false);
// Example: AAP => false
console.log(canPass('AAP') == false);
// Example: APLLA => false
console.log(canPass('APLLA') == false);
// Example: APLLPLLL => false;
console.log(canPass('APLLPLLL') == false);
// Example: PLLLALL => false
console.log(canPass('PLLLALL') == false);
// Example: APLLPLL => true
console.log(canPass('APLLPLL') == true);