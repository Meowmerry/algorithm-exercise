/*
'''
❓ PROMPT
Given an input dictionary mapping Fellows (as string names) to skill ratings, return true 
if you're able to pair up Fellows with matching skill ratings with no Fellows leftover.

Example(s)
skillMap = {"oliver": 3, "pixel": 3, "pinky": 5, "tobey": 5}
canMatchFellows(skillMap) == True

skillMap = {"oliver": 3, "pixel": 3}
canMatchFellows(skillMap) == True

skillMap = {"oliver": 3, "pixel": 4, "pinky": 5, "tobey": 5}
canMatchFellows(skillMap) == False

skillMap = {"oliver": 3, "pixel": 3, "pinky": 5}
canMatchFellows(skillMap) == False

skillMap = {"oliver": 3}
canMatchFellows(skillMap) == False
 
Input: Object 
Output: Boolen
🔎 EXPLORE
List your assumptions & discoveries:
- Empty object -- return true
- Object can have any length
 

Insightful & revealing test cases:
 

🧠 BRAINSTORM
What approaches could work?
Algorithm 1:
Time: O()
Space: O()
 

📆 PLAN
Outline of algorithm #: 
- Create fellowMap 
- Iterate through the object to build fellowMap KEY: skillLevel, count start 0
 skillMap = {"oliver": 3, "pixel": 3, "pinky": 5, "tobey": 5}
 {
 3:2
 5:2
 }
 Interate throuh fellowMap,
    check each value mod by 2 !== 0



🛠️ IMPLEMENT
function canMatchFellows(skillMap) {
def canMatchFellows(skillMap: dict) -> bool:
 

🧪 VERIFY
Run tests. Methodically debug & analyze issues.
.every(val=> val % 2 === 0)
'''
*/

// function canMatchFellows(skillMap) {
//   const fellowMap = new Map();

//   for (const key in skillMap) {
//     const value = skillMap[key];
//     fellowMap.set(value, (fellowMap.get(value) || 0) + 1);

//   }

//   return [...fellowMap.values()].every(val => val % 2 === 0)
// }

function canMatchFellows(skillMap) {
    const fellowSet = new Set();
  
    for (const key in skillMap) {
        const value = skillMap[key]
        if(fellowSet.has(value)){
            fellowSet.delete(value)
        }else{
            fellowSet.add(value)
        }
    }

    return fellowSet.size === 0
    
  }

let skillMap = { oliver: 3, pixel: 3, pinky: 5, tobey: 5 };
console.log(canMatchFellows(skillMap === true));

skillMap = { oliver: 3, pixel: 4, pinky: 5, tobey: 5 };
console.log(canMatchFellows(skillMap == false));  

skillMap = { oliver: 3, pixel: 3, pinky: 3 };
console.log(canMatchFellows(skillMap == false));

skillMap = { oliver: 3, pixel: 3, pinky: 5, tobey: 5, paavo: 1 };
console.log(canMatchFellows(skillMap == false)); // 

skillMap = { oliver: 3, pixel: 3, pinky: 5, tobey: 5, paavo: 1, Meow: 2 };
console.log(canMatchFellows(skillMap === false)); // 

skillMap = { oliver: 3, pixel: 3, pinky: 3, tobey: 3 };
console.log(canMatchFellows(skillMap == true)); //  

console.log(canMatchFellows({ oliver: 1 } == false)); // 

console.log(canMatchFellows({} == true)); // 
