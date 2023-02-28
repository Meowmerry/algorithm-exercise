// https://leetcode.com/problems/widest-vertical-area-between-two-points-containing-no-points/

/*
1 - Get point "X" from the 2D array.
2 - Sort the points to traverse on the array only N times.
3 - Get the MAX diffrence between each element and the element after it. "Solution"
*/
var maxWidthOfVerticalArea = function (points) {
    let ans = 0;
    points = points.map(item => item[0]).sort((a, b) => a - b);

    for (let i = 1; i < points.length; i++) {

        ans = Math.max(ans, points[i] - points[i - 1]);
    }

    return ans;
};

const maxWidthOfVerticalArea = function (points) {
    let best = 0
    points.sort((a, b) => a[0] - b[0])
    for (let i = 1; i < points.length; i++) {
        best = Math.max(best, points[i][0] - points[i - 1][0])
    }

    return best
}