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

let num1 = 0;
let operator = null;
let num2 = 0;

digitButtons.forEach((digitBtn) => {
  digitBtn.addEventListener("click", () => {
    const oldNum = Number(displayNum.textContent);
    const newDigit = digitBtn.textContent;

    if (oldNum === 0 || (operator !== null && oldNum === num1)) {
      displayNum.textContent = newDigit;
    } else {
      displayNum.textContent += digitBtn.textContent;
    }
  });
});

clearBtn.addEventListener("click", () => {
  displayNum.textContent = "0";
  num1 = 0;
  operator = null;
  num2 = 0;
});

operatorButtons.forEach((operatorBtn) => {
  operatorBtn.addEventListener("click", () => {
    if (operator !== null) {
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
  num2 = Number(displayNum.textContent);
  const result = operate(num1, operator, num2);
  displayNum.textContent = result;
});
