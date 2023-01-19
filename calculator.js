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
const div = document.querySelector('.screen-display');

numBtn.forEach((numBtn) => {
    numBtn.addEventListener('click', () => populate(numBtn.getAttribute('data-number')))
})

function populate(n) {
    if(div.textContent == '0') 
        div.textContent = '';
        div.textContent += n;    
}

const opBtn = document.querySelectorAll('button[data-operator]');

opBtn.forEach((opBtn) => {
    opBtn.addEventListener('click', () => {
        //oper = opBtn.getAttribute('data-operator');
                
        if(div.textContent == '0') {
            div.textContent = '';
            div.textContent += (' ' + (opBtn.getAttribute('data-operator')) + ' ');
        } else {
            div.textContent += (' ' + (opBtn.getAttribute('data-operator')) + ' ');
        }
    })
});

const clear = document.querySelector('#clear');

clear.addEventListener('click', function clear() {
    div.textContent = '0';
});
