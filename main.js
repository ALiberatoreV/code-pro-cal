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
 val1 = document.querySelector("#button-1")
 val1 = document.querySelector("#button-2")
 val1 = document.querySelector("#button-3")
 val1 = document.querySelector("#button-4")
 val1 = document.querySelector("#button-5")
 val1 = document.querySelector("#button-6")
 val1 = document.querySelector("#button-7")
 val1 = document.querySelector("#button-8")
 val1 = document.querySelector("#button-9")
 val1 = document.querySelector("#button-0")
 console.log(val1);

}

function clickOperator(event) {
  // if (val1 = true)
}
function clickEqualButton() {
  // CODE GOES HERE
  // if (val1 && val2 = true)
};

function clickClearButton() {

};