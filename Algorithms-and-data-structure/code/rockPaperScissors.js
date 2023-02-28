/**
 * returns every sequence of throws a single player could throw over an n-round game of rock-paper-scissors
 * rockPaperScissors(1); -> [['rock'],['paper'],['scissors']]
 * rockPaperScissors(2); ->
 * [['rock','rock'],['rock','paper'],['rock','scissors'],
 * ['paper','paper'],['paper','scissors'],['paper','rock'],
 * ['scissors','scissors'],['scissors','paper'],['scissors','rock']]
 */
function rockPaperScissors(num, ans = [], buffer = []) { // Time Complexity O(3^N) , Space O(N)
    // if num === 0 return ans;
    // if length of buffer is === num, store buffer by pushing to ans
    // else each call rockPaperScissors and passed num, ans, array of the rest of buffer, concat with rock, paper, scissors
    if (num === 0) return ans;
    if (num === buffer.length) ans.push(buffer);
    else {
        rockPaperScissors(num, ans, [...buffer, 'rock']);
        rockPaperScissors(num, ans, [...buffer, 'paper']);
        rockPaperScissors(num, ans, [...buffer, 'scissors']);
    }
    return ans;
}
/* 
Input  : Number
Output : Array with subarray
Strategy : recursion and nested helper function

Time complexity =>  O(3^n)  ==> anything ^ n is exponential, It is quadratic 
Space complexity  => O(n)

*/
function rockPaperScissors(num, ans = [], buffer = []) {
    if (num === 0) return [];

    function rsp(num, path) {
        if (num === 0) return outcomes.push(path)
        rsp(num - 1, path.concat('rock'));
        rsp(num - 1, path.concat('paper'));
        rsp(num - 1, path.concat('scissors'));
    }
    const outcomes = []
    rsp(num, []);
    return outcomes;
};
console.log(rockPaperScissors(1)); //-> [['rock'],['paper'],['scissors']]
console.log(rockPaperScissors(2));
/* 
[['rock','rock'],
 ['rock','paper'],
 ['rock','scissors'],
 ['paper','paper'],
 ['paper','scissors'],
 ['paper','rock'],
 ['scissors','scissors'],
 ['scissors','paper'],
 ['scissors','rock']]
*/