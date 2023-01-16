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
        case (oper === 'plus'):
            return add(num1, num2);
        case (oper === 'sub'):
            return subtract(num1, num2);
        case (oper === 'mult'):
            return multiply(num1, num2);
        case (oper === 'div'):
            return divide(num1, num2);
        default:
            return 'wrong';
    }   
} console.log(operate('plus', 10, 10));

const btn = document.querySelectorAll('button[data-number');
const div = document.querySelector('.screen-display');



btn.forEach((btn) => {
    btn.addEventListener('click', () => {
        div.textContent = (btn.getAttribute('data-number'));

    })
    
});

