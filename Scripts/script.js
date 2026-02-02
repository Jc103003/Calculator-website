// VARIABLES

// Calc variables
let numberOne = ''
let numberTwo = ''
let operator = null
let typingSecondNum = false
let mathComplete = false
let hasDot = false

// Buttons
const container = document.getElementById('buttonContainer')
const display = document.querySelector('.display')


// FUNCTIONS

// Basic calculator functions
function add(a, b) {
    return Number(a) + Number(b);
}

function subtract(a, b) {
    return Number(a) - Number(b);
}

function multiply(a, b) {
    return Number(a) * Number(b);
}

function divide(a, b) {
    return Number(a) / Number(b);
}

// Take operator and numbers then call one of the basic functions
function operate(a, b, operator) {
    switch(operator) {
        case "+":
            return (add(a, b))
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

// Update variables / display based off of button clicked
function handleNumberClicked(num) {
    if (num == '.'){
        hasDot = true
    }

    if (!typingSecondNum) {
        numberOne += num;
        display.textContent = numberOne;
    } else {
        numberTwo += num;
        display.textContent = numberOne + operator + numberTwo;
    }
}

function handleClearClicked() {
    numberOne = '';
    numberTwo = '';
    operator = null;
    hasDot = false;
    typingSecondNum = false;
    mathComplete = false;
    display.textContent = '';
}

function handleBackspace() {
    if (typingSecondNum) {
        if (numberTwo.slice = '.') {
            hasDot = false
        }

        numberTwo = numberTwo.slice(0, -1)
        display.textContent = numberOne + operator + numberTwo;
        
        if (numberTwo === '') {
            typingSecondNum = false
        }
    }
    else if (operator != null) {
        operator = null
        display.textContent = numberOne
    }
    
    else {
        if (numberOne.slice = '.') {
            hasDot = false
        }

        numberOne = numberOne.slice(0, -1)
        display.textContent = numberOne;
    }
    
}

// Event listners
// All buttons
container.addEventListener('click', function(event) {
    // Num buttons
    if (event.target.classList.contains('number')) {
        if (mathComplete) {
            handleClearClicked()
        }

        if (hasDot && event.target.textContent == ".") {
            return
        }
        
        handleNumberClicked(event.target.textContent)
    }
    // Operator buttons (can assume if not num then operator)
    else if (event.target.classList.contains('operator')) {
        const buttontext = event.target.textContent
        switch (buttontext) {
            case "=":
                if ( numberOne === '0' && numberTwo === '0' && operator === "/") {
                    display.textContent = "WHY WOULD YOU DO THAT"
                    mathComplete = true
                    break
                }

                console.log(operate(numberOne, numberTwo, operator))
                mathComplete = true
                display.textContent = operate(numberOne, numberTwo, operator)
                break

            case "Clear":
                handleClearClicked()
                break

            case "Back":
                handleBackspace()
                break

            default:
                if (operator != null) {
                    ans = operate(numberOne, numberTwo, operator)
                    console.log(ans)
                    numberOne = ans
                    numberTwo = ''

                }
                typingSecondNum = true
                hasDot = false
                operator = event.target.textContent
                display.textContent = numberOne + operator + numberTwo;
                

        }
    }

})

display.


