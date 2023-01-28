function add(a, b) {
    return a + b;
} console.log(add(5, 5));


function subtract(a, b) {
    return a - b ;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(oper) {
    firstOperand = Number(firstOperand);
    secondOperand = Number(secondOperand);
    console.log(firstOperand);
    console.log(secondOperand);
    switch(true) {
        case (oper === '+'):
            operationResult = add(firstOperand, secondOperand);
            break;
        case (oper === '-'):
            operationResult = subtract(firstOperand, secondOperand);
            break;
        case (oper === '*'):
            operationResult = multiply(firstOperand, secondOperand);
            break;
        case (oper === '/'):
            if (secondOperand === 0) {
                operationResult = 'ERROR';
            } else {
                operationResult = divide(firstOperand, secondOperand);
            }
            break;
        default:
            return 'wrong';
    }
    operationResult = roundResult(operationResult);
    operationResult = operationResult.toString();
    displayResult();   
}

const numBtn = document.querySelectorAll('button[data-number]');
const opBtn = document.querySelectorAll('button[data-operator]');
const btn = document.querySelectorAll('button');
const display = document.querySelector('.screen-display');
const result = document.querySelector('.screen-result');
const clear = document.querySelector('#clear');
const equalsBtn = document.querySelector('#equal');
const decBtn = document.querySelector('#decimal');

let findOperator = '';
let firstOperand = '';
let secondOperand = '';
let previousDisplay = '';
let operationResult = '';

numBtn.forEach((numBtn) => {
    numBtn.addEventListener('click', () => populateNumbers(numBtn.textContent));
})

opBtn.forEach((opBtn) => {
    opBtn.addEventListener('click', () => populateOperators(opBtn.textContent));
})

decBtn.addEventListener('click', () => populateDecimal(decBtn.textContent));

equalsBtn.addEventListener('click', () => {
    if(firstOperand != '' && secondOperand != '') {
        operate(findOperator)
    }
});

clear.addEventListener('click', () => clearDisplay());

function populateNumbers(n) {
    if(firstOperand.length <= 12 && !display.textContent.includes('+') && 
    !display.textContent.includes('-') && !display.textContent.includes('*') && 
    !display.textContent.includes('/')) {
        firstOperand += n;
        display.textContent = firstOperand;
    } else {
        secondOperand += n;
        display.textContent = previousDisplay + ' ' + secondOperand;
    }
}

function populateOperators (o) {
    findOperator = o;
    previousDisplay = firstOperand + ' ' + findOperator;
    display.textContent = previousDisplay;
    console.log(firstOperand);        
    console.log(previousDisplay);
}

function populateDecimal(d) {
    if(!firstOperand.includes('.') && !previousDisplay.includes(' ')) {
        firstOperand += d;
        display.textContent = firstOperand;
    } else if(firstOperand != '') {
        secondOperand += d;
        display.textContent = previousDisplay + ' ' +secondOperand;
    } 
}
function clearDisplay() {
    display.textContent = '0';
    result.textContent = '';
    previousDisplay = '';
    firstOperand = '';
    secondOperand = '';
}

function roundResult(number) {
    return Math.round(number * 100000) / 100000;
}

function displayResult() {
    display.textContent = '';
    console.log(operationResult);
    if (operationResult.length <= 12) {
        result.textContent = operationResult;
    } else {
        result.textContent = operationResult.slice(0, 12) + '..';
    }
}