/* 
Stack
1. Validate balanced parentheses
Write a function which takes only parentheses (curly {}, square []or round () ). It should check that all parentheses in provided string is balanced or not. Simply it should check if there’s an opening parentheses then it should have closing parentheses.
First input: {[({})]}
First output: true
Second input: {[({})}
Second output: false
*/

class Stack {
    constructor() {
        this.items = []
        this.top = null
    }
    getTop() {
        if (this.items.length == 0)
            return null
        return this.top
    }
    isEmpty() {
        return this.items.length == 0
    }
    size() {
        return this.items.length
    }
    push(element) {
        this.items.push(element)
        this.top = element
    }
    pop() {
        if (this.items.length != 0) {
            if (this.items.length == 1) {
                this.top = null
                return this.items.pop()
            } else {
                this.top = this.items[this.items.length - 2]
                return this.items.pop()
            }
        } else
            return null
    }
}
const isBalancedParantheses = (exp) => {
    let myStack = new Stack()

    // Loop through input string
    for (let i = 0; i < exp.length; i++) {
        // Check for every closing parantheses if there's opeaning  parantheses or not.
        if (exp[i] == '}' || exp[i] == ')' || exp[i] == ']') {
            if (myStack.isEmpty()) return false
            let output = myStack.pop()
            //If no opening parentheses for any closing one then immediatly return false
            if (((exp[i] == "}") && (output != "{")) || ((exp[i] == ")") && (output != "(")) || ((exp[i] == "]") && (output != "["))) {
                return false
            }
        } else {
            //For each opening parentheses, push it into stack
            myStack.push(exp[i])
        }
    }
    //after traversal of input data, if there's any opening parentheses left in stack then also return false else return true at the end
    if (myStack.isEmpty() == false) {
        return false
    }
    return true
}
let firstInputData = "{[({})]}"
console.log(isBalancedParantheses(firstInputData)) // true
secondInputData = "{[({})}"
console.log(isBalancedParantheses(secondInputData)) // false