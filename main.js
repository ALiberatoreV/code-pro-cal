// BUTTONS ON THE PAGE
const numberButtons = document.querySelectorAll('.number');
const operatorButtons = document.querySelectorAll('.operator');
const equalButton = document.querySelector('.equal');
const clearButton = document.querySelector('.clear');

let isOperator = false;
let isFirstNumber = false;
const firstNum = document.querySelector('#first-number');
const secondNum = document.querySelector('#second-number');
const operator = document.querySelector('#operator');
const result = document.querySelector('#result');
// references to all the proper HTML elements you'll be using to display elements to the user

// variables to keep track of the 1st number, operator, 2nd number, and the result of the math.

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
  if (!isOperator){
    val1 +=event.target.textContent;
    firstNum.textContent = val1;
    isFirstNumber = true;
    console.log(val1);
  }else{
    val2 +=event.target.textContent;
    secondNum.textContent = val2;
    isFirstNumber = false;
    console.log(val2);
  }

}

function clickOperator(event) {
  if(isFirstNumber){
    if(isOperator)
    {
      isOperator =false;
    }else{
        mathOP += event.target.textContent;
        operator.textContent = mathOP;
        console.log(mathOP);
        isOperator = true;    
    }
  }else{
    console.log("Enter a number first!");
  }
}
function clickEqualButton() {
  // CODE GOES HERE
  // if (val1 && val2 = true)
  let numResult;
  if(isOperator){
    if(mathOP ==="+"){

      numResult = parseInt(val1) + parseInt(val2);
    
    }else if(mathOP ==="-"){
      numResult = parseInt(val1) - parseInt(val2);
    
    }else if(mathOP ==="*"){
      numResult = parseInt(val1) * parseInt(val2);
    
    }else if(mathOP ==="/"){
      if(val2 === "0"){
        console.log("Can't divide by zero!");
      }else{
        numResult = parseInt(val1) / parseInt(val2);
      }
     
    }else if(mathOP ==="^"){
      
      numResult = Math.pow(parseInt(val1) , parseInt(val2)) ;
    
    }
  }
  result.textContent = numResult;
  console.log(numResult);
};

function clickClearButton() {
  val1 = ""; 
 val2 = "";
  resultVal = "";
  mathOP = "";
  operator.textContent = "";
  firstNum.textContent ="";
  secondNum.textContent = "";
  result.textContent = "";
  isOperator = false;
isFirstNumber = false;
};