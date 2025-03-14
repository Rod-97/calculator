function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function operate(num1, operator, num2) {
  num1 = Number(num1);
  num2 = Number(num2);
  if (operator === "+") return add(num1, num2);
  if (operator === "-") return subtract(num1, num2);
  if (operator === "x") return multiply(num1, num2);
  if (operator === "/") return divide(num1, num2);
}

let num1 = "0";
let operator = null;
let num2 = "0";

let result = "0";

function reset() {
  num1 = "0";
  operator = null;
  num2 = "0";
  result = "0";
}

const display = document.querySelector("#display-num");
const digitBtns = document.querySelectorAll(".digit-btn");
const operatorBtns = document.querySelectorAll(".operator-btn");
const equalBtn = document.querySelectorAll(".equal-btn")[0];
const clearBtn = document.querySelectorAll(".clear-btn")[0];

const divisionByZeroErrorMsg = "Get better sleep.";

function populateDisplay(newNum) {
  if (display.textContent === "0" || newNum === divisionByZeroErrorMsg) {
    display.textContent = newNum;
  } else {
    display.textContent += newNum;
  }
}

function clearDisplay() {
  display.textContent = "0";
}

digitBtns.forEach((digitBtn) => {
  digitBtn.addEventListener("click", () => {
    if (
      (operator !== null && display.textContent === num1) ||
      display.textContent === result ||
      display.textContent === divisionByZeroErrorMsg
    ) {
      clearDisplay();
    }
    populateDisplay(digitBtn.textContent);
  });
});

operatorBtns.forEach((operatorBtn) => {
  operatorBtn.addEventListener("click", () => {
    if (operator !== null) {
      if (num1 === display.textContent) return;
      num2 = display.textContent;
      result = operate(num1, operator, num2);
      clearDisplay();
      populateDisplay(result);
      num2 = "0";
    }
    num1 = display.textContent;
    operator = operatorBtn.textContent;
  });
});

equalBtn.addEventListener("click", () => {
  if (num1 === "0" || operator === null) return;
  num2 = display.textContent;
  if (operator === "/" && num2 === "0") {
    populateDisplay(divisionByZeroErrorMsg);
    reset();
    return;
  }
  result = operate(num1, operator, num2);
  clearDisplay();
  populateDisplay(result);
  num1 = String(result);
  operator = null;
  num2 = "0";
});

clearBtn.addEventListener("click", () => {
  reset();
  clearDisplay();
});
