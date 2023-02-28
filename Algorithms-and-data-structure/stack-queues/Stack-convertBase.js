/*
2. Write a function for converting numbers to base 2 and base 8
In this program you should write one function that will take integer value and one base value and then convert accordingly. 
Like for example, if an input is num = 14and base = 2then the result is 1110 and num = 14 and base = 8 then the result is 16
 */
class Stack {
    constructor() {
        this.items = []
        this.top = 0
    }
    push(element) {
        this.items[this.top++] = element
    }
    pop() {
        return this.items[--this.top]
    }
    length() {
        return this.top
    }
}
const convertBase = (num, base) => {
    let s = new Stack()
    while (num > 0) {
        s.push(num % base)
        num = Math.floor(num /= base)
    }
    let converted = ""
    while (s.length() > 0) {
        converted += s.pop()
    }
    return converted
}
let num = 14
let base = 2
console.log(convertBase(num, base)) // 1110