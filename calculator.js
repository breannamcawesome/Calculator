// variables for the calculator:
let isSecondNumber = false;
let justCalculated = false;
let error = false;
let firstNumber = "";
let secondNumber = "";
let operator = "";
let result = "";

// functions to perform calculations
function add(x, y) {
    return x + y;

};

function subtract(x, y) {
  return x - y;
    
};

function multiply(x, y) {
  return x * y;
    
};

function divide(x, y) {
  if (y === 0) {
    error = true;
    return "ERROR!"; // prevents dividing by zero
  }
  else {
    return x / y;
  }
};


// function that implements above calculation functions with variables from user input
function operate(x, operator, y) {
    if (operator === "+") {
      screen.innerText = add(x, y);
      return add(x, y);
    } else if (operator === "-") {
      screen.innerText = subtract(x, y);
      return subtract(x, y);
    } else if (operator === "*") {
      screen.innerText = multiply(x, y)
      return multiply(x, y);
    } else if (operator === "/") {
      screen.innerText = divide(x, y);
      return divide(x, y);
    }
    else {
        return "ERROR";
    }  
};

// variables for the different calculator elements
let numButtons = document.querySelectorAll(".number");
let opButtons = document.querySelectorAll(".operator");
let equalButton = document.querySelector(".equal");
let clearButton = document.querySelector(".clear");
let screen = document.querySelector(".screen");

// onClick event listeners for the buttons
numButtons.forEach(button => {
    button.addEventListener("click", updateScreen);
});

opButtons.forEach(button => {
    button.addEventListener("click", storeOperator);
});

equalButton.addEventListener("click", calculate);

clearButton.addEventListener("click", clearScreen);

// function to update screen with values from the buttons
function updateScreen(event) {
    let clickedButton = event.target;
    let clickedValue = clickedButton.getAttribute("value");

    if (error) {
        clearScreen();
        error = false;
    };

    // clears screen if current screen contents are result of a calculation
    if (justCalculated) {
        if (!operator) {
            firstNumber = "";
        }
        secondNumber = "";
        isSecondNumber = false;
        justCalculated = false;
        screen.innerText = "";
    }

    // enabling storage of numbers for calculation variables
    if(!isSecondNumber) {
        if(firstNumber.length >= 9) {
            return;
        }
        firstNumber += clickedValue;
    } else {
        if(secondNumber.length >= 9) {
            return;
        }
        secondNumber += clickedValue;
    } 
    screen.innerText += clickedValue;
};

// function to store selected operator for calculation variable
function storeOperator(event) {
    if (error) {
        return;
    }
    if (isSecondNumber) {
        calculate(); // only performs calculation when both numbers have been entered
    }
    if (firstNumber === "") { // prevents performing calculation unless both numbers have been entered
        return;
    }
    if (justCalculated) {
        screen.innerText = firstNumber; // replaces the result on screen with next pressed number
        justCalculated = false;
    }
    isSecondNumber = true;

    let clickedButton = event.target;

    operator = clickedButton.getAttribute("value");

    screen.innerText += ` ${operator} `;
};

// function to use the variables when entered and stored
function calculate() {
    let num1 = parseFloat(firstNumber);
    let num2 = parseFloat(secondNumber);

    if(error){
        return;
    }

    if (secondNumber === "") {
        result = firstNumber;
    }
    else {
        result = operate(num1, operator, num2);
    }

    if(firstNumber === "" && operator === "" && secondNumber === "") {
        screen.innerText = 0;
        return;
    }

    justCalculated = true;

    screen.innerText = result;

    firstNumber = result;
    secondNumber = "";
    operator = "";
    isSecondNumber = false;

};


// function to clear screen with AC button
function clearScreen() {
    firstNumber = "";
    secondNumber = "";
    operator = "";
    result = "";
    isSecondNumber = false;
    justCalculated = false;
    error = false;
    screen.innerText = "";
};




