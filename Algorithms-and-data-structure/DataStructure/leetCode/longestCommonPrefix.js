/* 
Write a function to find the longest common prefix string amongst an array of strings.
If there is no common prefix, return an empty string "".
*/
/* ======================== SOLUTIION 1 ================================ */
var longestCommonPrefix = function (strs) {
    let prefix = '';
    if (strs.length === 0) return prefix;
    for (let i = 0; i < strs[0].length; i += 1) {
        const char = strs[0][i];
        for (let j = 0; j < strs.length; j += 1) {
            if (strs[j][i] !== char) {
                return prefix;
            }
        }
        prefix += char;
    }
    return prefix;
};

console.log(longestCommonPrefix(["flower", "flow", "flight"])) // 'fl
/* ======================== SOLUTIION 2 ================================ */
var longestCommonPrefix2 = function (strs) {
    return strs.slice(1).reduce((cur, res) => {
        let cnt = 0;
        while (res?.[cnt] && res?.[cnt] === cur?.[cnt]) cnt++;
        return res.substring(0, cnt);
    }, strs[0]);
};
console.log(longestCommonPrefix2(["flower", "flow", "flight"])) // 'fl

/* ======================== SOLUTIION 3 ================================ */
const longestCommonPrefix3 = (strs, prefix = "", i = 0) => {
    if (strs.length === 0) return prefix;
    for (let i = 0; i < strs[0].length; i += 1) {
        const char = strs[0][i];
        for (let j = 0; j < strs.length; j += 1) {
            if (strs[j][i] !== char) {
                return prefix;
            }
        }
        prefix += char;
    }
    return prefix;
}

console.log(longestCommonPrefix3(["flower", "flow", "flight"])) // 'fl