//  Gift

function number(n) {
    let result = []
    const number = n.toString().split("")
    let zero = number.length - 1
    for (let i = 0; i < number.length; i++) {
        result.push(number[i] + "0".repeat(zero))
        if (i !== number.length - 1) {
            result.push("+")
        }
        zero--
    }
    return result.join("")
}
const n = 1234
console.log(number(n))


// K Tee
const distributeNumber = (number) => {
    const numbers = [];
    const negative = number < 0;
    number = Math.abs(number);
    if (number === 0)
        return "0";
    let power = 1;
    while (number !== 0) {
        numbers.push((number % 10) * power);
        power *= 10;
        number = Math.floor(number / 10);
    }
    numbers.reverse();
    const equations = numbers.join("+");
    return negative ? `-(${equations})` : equations;
}
console.log(distributeNumber(-19919198))


// K Tee
const distributeStringNumber = (textNumber) => {
    const negative = textNumber[0] === "-";
    if (negative) {
        textNumber = textNumber.slice(1);
    }
    const textNumbers = textNumber.split("").reduce((acc, curr, index) => {
        acc.push(curr + "0".repeat(textNumber.length - 1 - index));
        return acc;
    }, []);
    const equations = textNumbers.join(" + ");
    return negative ? `-(${equations})` : equations;
}
console.log(distributeStringNumber("0"));