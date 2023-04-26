

const longestStreak = (arr) => {
    const countMap = new Map();

    for (const n of arr) {
        countMap.set(n, (countMap.get(n) || 0) + 1);
    }
    let count = -Infinity;
    for (const value of countMap.values()) {
        if (count < value) {
            count = value;
        }
    }
    return count;
};

console.log(longestStreak([5, 5, 7, 7, 7, 6, 6]));