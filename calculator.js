//need to make buttons display on the "screen" div
//need result to be converted to numOne for additional operations
//need to allow only one character in the display at a time
const screen = document.getElementById("screen");

const numButtons = document.querySelectorAll(".number");

numButtons.forEach(numButton => {
numButton.addEventListener('click', () => { 
    const numValue = numButton.getAttribute('value');       
    return screen.innerText = numValue;
});
});

const add = function(numOne, numTwo) {
	let currentNum = numOne + numTwo;
  return currentNum;
};

const subtract = function(numOne, numTwo) {
  let currentNum = numOne - numTwo;
  return currentNum;
	
};

const sum = function(array) {
  return array.reduce((total, current) => (total + current, 0));
	
};

const multiply = function(array) {
  return array.reduce((product, current) => (product * current))

};


function operate(numOne, operator, numTwo) {
    switch (operator) {
        case "+":
            return add(numOne, numTwo);
        case "-":
            return subtract(numOne, numTwo);
        case "*":
            return multiply(numOne, numTwo);
        case "-":
            return subtract(numOne, numTwo);
    }
};


let currentNum = "";
let operator = "";
let previousNum = "";

//const numberButtons = Array.from(document.querySelectorAll(".number"));
//numberButtons.addEventListener('click', () => {
//    screen.textContent = 'button.value';
//});

//const operatorButtons = Array.from(document.querySelectorAll(".operator"));
const equalButton = Array.from(document.querySelectorAll("equal"));
