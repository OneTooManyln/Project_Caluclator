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
            return divide(a, b);
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
const equalsBtn = document.querySelector('#equal')

numBtn.forEach((numBtn) => {
    numBtn.addEventListener('click', () => populateNumbers(numBtn.getAttribute('data-number')))
})

opBtn.forEach((opBtn) => {
    opBtn.addEventListener('click', () => populateOperators(opBtn.textContent))
})

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

function operation(oper) {
    firstOperand = display.textContent;
    operation = oper;
    clear();
    evaluateOperation();
}

function evaluateOperation() {
    secondOperand = display.textContent;
    operate(operation, firstOperand, secondOperand);
    result.textContent = firstOperand(operation) +  + secondOperand;
}

clear.addEventListener('click', function clear() {
    display.textContent = '0';
});
