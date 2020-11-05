// BUTTONS ON THE PAGE
const numberButtons = document.querySelectorAll('.number');
const operatorButtons = document.querySelectorAll('.operator');
const equalButton = document.querySelector('.equal');
const clearButton = document.querySelector('.clear');


const firstNum = document.querySelector('#first-number');
const secondNum = document.querySelector('#second-number');
const operator = document.querySelector('#operator');

// TODO make references to all the proper HTML elements you'll be using to display elements to the user

// TODO make variables to keep track of the 1st number, operator, 2nd number, and the result of the math.

let val1 = ""; 
let val2 = "";
let resultVal = "";
let mathOP = "";


for(let i = 0; i < numberButtons.length; i++) {
  numberButtons[i].addEventListener('click', clickNumber);
}
for(let i = 0; i < operatorButtons.length; i++) {
  operatorButtons[i].addEventListener('click', clickOperator);
}
equalButton.addEventListener('click', clickEqualButton);
clearButton.addEventListener('click', clickClearButton);

function clickNumber(event) {
 

}

function clickOperator(event) {
  

function clickEqualButton() {
  // CODE GOES HERE
}

function clickClearButton() {
  // CODE GOES HERE
  
}