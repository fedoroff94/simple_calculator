//variables
let display = document.getElementById('display');
let buttons = document.getElementsByClassName('number');
let result = document.getElementById('result');
let clear = document.getElementById('clear');
let back = document.getElementById('back');

//functions
let onNumberButtonClick = (e) => {
    Array.from(buttons).find(btn => {
        if (e.currentTarget.innerHTML === btn.innerHTML) {
            display.value = display.value + btn.innerHTML
        }
    });
};

let resFunc = () => {
    display.value = eval(display.value);
};

let clearFunc = () => {
    display.value = '';
};

let backFunc = () => {
    display.value = display.value.substring(0, display.value.length - 1);
};

//listeners
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', onNumberButtonClick)
}
result.addEventListener('click', resFunc);
clear.addEventListener('click', clearFunc);
back.addEventListener('click', backFunc);





