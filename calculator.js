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

function operate(oper, num1, num2) {
    switch(true) {
        case (oper === '+'):
            return add(num1, num2);
        case (oper === '-'):
            return subtract(num1, num2);
        case (oper === '*'):
            return multiply(num1, num2);
        case (oper === '/'):
            return divide(num1, num2);
        default:
            return 'wrong';
    }   
} console.log(operate('plus', 10, 10));

const btn = document.querySelectorAll('button[data-number]');
const div = document.querySelector('.screen-display');

btn.forEach((btn) => {
    btn.addEventListener('click', function populate(n) {
        if(div.textContent == '0') {
            div.textContent = '';
            div.textContent += (btn.getAttribute('data-number'));
            n = div.textContent;
            console.log(n);
        } else {
            div.textContent += (btn.getAttribute('data-number'));
            n = div.textContent;
            console.log(n);
        }
    })

});

const clear = document.querySelector('#clear');

clear.addEventListener('click', function clear() {
    div.textContent = '0';
});

const opBtn = document.querySelectorAll('button[data-operator]');

opBtn.forEach((opBtn) => {
    opBtn.addEventListener('click', () => {
        oper = opBtn.getAttribute('data-operator');
    })
});