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
const btn = document.querySelectorAll('button');
const display = document.querySelector('.screen-display');
const result = document.querySelector('.screen-display');

numBtn.forEach((numBtn) => {
    numBtn.addEventListener('click', () => populate(numBtn.getAttribute('data-number')))
})

function populate(n) {
    if(display.textContent == '0') 
        display.textContent = '';
        display.textContent += n;    
}

const opBtn = document.querySelectorAll('button[data-operator]');

opBtn.forEach((opBtn) => {
    opBtn.addEventListener('click', () => operation(opBtn.getAttribute('data-operator')))
})
        //oper = opBtn.getAttribute('data-operator');
                
        //if(div.textContent == '0') {
        //    div.textContent = '';
        //    div.textContent += (' ' + (opBtn.getAttribute('data-operator')) + ' ');
        //} else {
        //    div.textContent += (' ' + (opBtn.getAttribute('data-operator')) + ' ');
        //}

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

const clear = document.querySelector('#clear');

clear.addEventListener('click', function clear() {
    display.textContent = '0';
});
