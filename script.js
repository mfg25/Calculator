const operation = document.getElementById("operation");
const result = document.getElementById("result");
let arrayDisplay = [];
let storedNumbers = [];
let storedValues = [];
let equalsPushed = false;
let disableOperators = false;
let disableDot = false;
function add(num1, num2) {
  return Number(num1) + Number(num2);
}
function subtract(num1, num2) {
  return Number(num1) - Number(num2);
}
function multiply(num1, num2) {
  return Number(num1) * Number(num2);
}
function divide(num1, num2) {
  return Number(num1) / Number(num2);
}

function operate(num1, num2, operator) {
  let equals;
  console.log(`${num1} ${num2}`);
  console.log(operator);
  if (operator == "+") {
    equals = add(num1, num2);
  } else if (operator == "-") {
    equals = subtract(num1, num2);
  } else if (operator == "x") {
    equals = multiply(num1, num2);
  } else if (operator == "/") {
    equals = divide(num1, num2);
  }

  result.innerText = equals;
  storedValues = [];
  storedValues[0] = equals;
  arrayDisplay = [];
  arrayDisplay[0] = equals;
}
let operator;
function displayValue(id) {
  let num;
  if (id == "+" && disableOperators == false) {
    if (equalsPushed) {
      operator = "+";
    }
    disableOperators = true;
    num = Number(storedNumbers.join(""));
    storedValues.push(num);
    disableDot = false;
    if (storedValues.length == 2) {
      operate(storedValues[0], storedValues[1], operator);
    }
    storedNumbers = [];
    arrayDisplay.push(" + ");
    operator = "+";
  } else if (id == "-" && disableOperators == false) {
    if (equalsPushed) {
      operator = "-";
    }
    disableOperators = true;
    num = Number(storedNumbers.join(""));
    storedValues.push(num);
    disableDot = false;
    if (storedValues.length == 2) {
      operate(storedValues[0], storedValues[1], operator);
    }
    storedNumbers = [];
    arrayDisplay.push(" - ");
    operator = "-";
  } else if (id == "/" && disableOperators == false) {
    if (equalsPushed) {
      operator = "/";
    }
    disableOperators = true;
    num = Number(storedNumbers.join(""));
    storedValues.push(num);
    disableDot = false;
    if (storedValues.length == 2 && equalsPushed == false) {
      operate(storedValues[0], storedValues[1], operator);
    } else if (storedValues.length == 2) {
      equalsPushed = false;
      operate(storedValues[0], 1, operator);
    }
    storedNumbers = [];
    arrayDisplay.push(` / `);
    operator = "/";
  } else if (id == "x" && disableOperators == false) {
    if (equalsPushed) {
      operator = "x";
    }
    disableOperators = true;
    num = Number(storedNumbers.join(""));
    storedValues.push(num);
    disableDot = false;
    if (storedValues.length == 2 && equalsPushed == false) {
      operate(storedValues[0], storedValues[1], operator);
    } else if (storedValues.length == 2) {
      equalsPushed = false;
      operate(storedValues[0], 1, operator);
    }
    storedNumbers = [];
    arrayDisplay.push(" x ");
    operator = "x";
  } else if (
    id == "=" &&
    equalsPushed == false &&
    disableOperators == false &&
    storedValues.length == 1
  ) {
    equalsPushed = true;
    num = Number(storedNumbers.join(""));
    storedValues.push(num);
    disableDot = false;
    operation.innerText = `${storedValues[0]} ${operator} ${storedValues[1]} =`;
    operate(storedValues[0], storedValues[1], operator);
    storedNumbers = [];
  } else if (
    id != "x" &&
    id != "/" &&
    id != "=" &&
    id != "-" &&
    id != "+" &&
    id != "."
  ) {
    disableOperators = false;
    equalsPushed = false;
    arrayDisplay.push(id);
    storedNumbers.push(id);
  } else if (id == "." && disableDot == false && disableOperators == false) {
    disableDot = true;
    arrayDisplay.push(".");
    storedNumbers.push(".");
  }
  if (id != "=") {
    operation.innerText = arrayDisplay.join("");
  }
}

function clear1() {
  storedValues = [];
  storedNumbers = [];
  arrayDisplay = [];
  operation.innerText = "";
  result.innerText = "";
}
