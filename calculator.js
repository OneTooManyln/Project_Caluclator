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

function operate(oper, a, b) {
    switch(true) {
        case (oper === '+'):
            return add(a, b);
        case (oper === '-'):
            return subtract(a, b);
        case (oper === '*'):
            return multiply(a, b);
        case (oper === '/'):
            if (b === 0) {
                return 'ERROR'
            } else {
                return divide(a, b);
            }
        default:
            return 'wrong';
    }   
}

function chooseOperator(string) {
    switch(true) {
        case (string.includes('+')):
            findOperator = '+';
            break;
        case (string.includes('*')):
            findOperator = '*';
            break;
        case (string.includes('/')):
            findOperator = '/';
            break;
        case (string.includes('-')):
            findOperator = '-';
            break;
        default:
            return 'ERROR'    
    }
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
let splitDisplay = '';
let toNumber = '';

numBtn.forEach((numBtn) => {
    numBtn.addEventListener('click', () => populateNumbers(numBtn.textContent))
})

opBtn.forEach((opBtn) => {
    opBtn.addEventListener('click', () => populateOperators(opBtn.textContent))
})

decBtn.addEventListener('click', () => populateDecimal(decBtn.textContent));

//Instead of calling the function operation when a operator is clicked, it should instead be called when
//the equal's button is clicked.
//When clicked, a function will split the operation into three seperate value:
//  firstOperand, operator, and secondOperand
//the function evaluateOperation would then be called using the new values defined above.

function populateNumbers(n) {
    if(display.textContent == '0') 
        display.textContent = '';
        display.textContent += n;    
}

function populateOperators (o) {
    if(display.textContent == '0')
        display.textContent = ''
        display.textContent += ' ' + o + ' ';
}

//populateDecimal is not working ass intended. Code fore populate functions will be rewritten to
// no longer use .split to assisgn values to secondOperand, firstOperand, and findOperator

function populateDecimal(d) {
    if(display.textContent == '0')
    display.textContent = '';
    display.textContent += d;
}

equalsBtn.addEventListener('click', () => splitOperation())

function splitOperation() {
    findOperator = display.textContent;
    chooseOperator(findOperator);
    splitDisplay = display.textContent.split(/[+-/*]/);
    console.log(findOperator);
    console.table(splitDisplay);
    evaluateOperation();
}

function evaluateOperation() {
    toNumber = splitDisplay.map(Number);
    firstOperand = toNumber[0];
    secondOperand = toNumber[1];
    result.textContent = operate(findOperator, firstOperand, secondOperand);
}

clear.addEventListener('click', function clear() {
    display.textContent = '0';
    result.textContent = '';
});
