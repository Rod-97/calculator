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

const digitButtons = document.querySelectorAll(".digit-btn");
const displayNum = document.querySelector("#display-num");
const clearBtn = document.querySelectorAll(".clear-btn")[0];
const operatorButtons = document.querySelectorAll(".operator-btn");
const equalBtn = document.querySelectorAll(".equal-btn")[0];

const divideByZeroMsg = "Get better sleep.";

let num1 = 0;
let operator = null;
let num2 = 0;

function reset() {
  displayNum.textContent = "0";
  num1 = 0;
  operator = null;
  num2 = 0;
}

digitButtons.forEach((digitBtn) => {
  digitBtn.addEventListener("click", () => {
    const newDigit = digitBtn.textContent;

    if (displayNum.textContent === divideByZeroMsg) reset();

    if (
      displayNum.textContent === "0" ||
      (operator !== null && Number(displayNum.textContent) === num1)
    ) {
      displayNum.textContent = newDigit;
    } else {
      displayNum.textContent += digitBtn.textContent;
    }
  });
});

clearBtn.addEventListener("click", () => {
  reset();
});

operatorButtons.forEach((operatorBtn) => {
  operatorBtn.addEventListener("click", () => {
    if (operator !== null) {
      if (num2 === 0) return;
      num2 = Number(displayNum.textContent);
      const result = operate(num1, operator, num2);
      num1 = Number(result);
      displayNum.textContent = num1;
    } else {
      num1 = Number(displayNum.textContent);
    }
    operator = operatorBtn.textContent;
  });
});

equalBtn.addEventListener("click", () => {
  if (operator === null && num2 === 0) return;
  num2 = Number(displayNum.textContent);
  if (num2 === 0) {
    displayNum.textContent = divideByZeroMsg;
    return;
  }
  const result = operate(num1, operator, num2);
  displayNum.textContent = result;
  num1 = num2;
  operator = null;
  num2 = 0;
});
