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
            result.textContent = add(firstOperand, secondOperand);
            break;
        case (oper === '-'):
            result.textContent = subtract(firstOperand, secondOperand);
            break;
        case (oper === '*'):
            result.textContent = multiply(firstOperand, secondOperand);
            break;
        case (oper === '/'):
            if (b === 0) {
                result.textContent = 'ERROR';
            } else {
                result.textContent = divide(firstOperand, secondOperand);
            }
            break;
        default:
            return 'wrong';
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
let previousDisplay = '';

numBtn.forEach((numBtn) => {
    numBtn.addEventListener('click', () => populateNumbers(numBtn.textContent));
})

opBtn.forEach((opBtn) => {
    opBtn.addEventListener('click', () => populateOperators(opBtn.textContent));
})

decBtn.addEventListener('click', () => populateDecimal(decBtn.textContent));

equalsBtn.addEventListener('click', () => operate(findOperator));

clear.addEventListener('click', function clear() {
    display.textContent = '0';
    result.textContent = '';
});

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
}

function populateDecimal(d) {
    if(display.textContent == '0')
    display.textContent = '';
    display.textContent += d;
}