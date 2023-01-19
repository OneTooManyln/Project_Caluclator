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

const btn = document.querySelectorAll('button[data-number]');
const div = document.querySelector('.screen-display');

btn.forEach((btn) => {
    btn.addEventListener('click', function populate(n) {
        if(div.textContent == '0') {
            div.textContent = '';
            div.textContent += (btn.getAttribute('data-number'));
            n = div.textContent;
        } else {
            div.textContent += (btn.getAttribute('data-number'));
            n = div.textContent;
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
        //oper = opBtn.getAttribute('data-operator');
                
        if(div.textContent == '0') {
            div.textContent = '';
            div.textContent += (' ' + (opBtn.getAttribute('data-operator')) + ' ');
        } else {
            div.textContent += (' ' + (opBtn.getAttribute('data-operator')) + ' ');
        }
    })
});