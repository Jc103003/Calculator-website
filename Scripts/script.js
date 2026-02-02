// VARIABLES

let numberOne = 0
let numbertwo = 0
let operator = ""


// FUNCTIONS

// Basic calculator functions
function add(a, b) {
    return a + b
}

function subtract(a, b) {
    return a - b
}

function multiply(a, b) {
    return a * b
}

function divide(a, b){
    return a / b
}

// Take operator and numbers then call one of the basic functions
function operate(a, b, operator) {
    switch(operator) {
        case "+":
            return add(a, b)
        case "-":
            return subtract(a, b)
        case "*":
            return multiply(a, b)
        case "/":
            return divide(a, b)
        default:
            console.log("ERROR, NO OPERATOR FOUND")
    }
}

