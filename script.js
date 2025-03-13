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

let num1 = "0";
let operator = null;
let num2 = "0";

function operate(num1, operator, num2) {
  num1 = Number(num1);
  num2 = Number(num2);
  if (operator === "+") return add(num1, num2);
  if (operator === "-") return subtract(num1, num2);
  if (operator === "x") return multiply(num1, num2);
  if (operator === "/") return divide(num1, num2);
}

const display = document.querySelector("#display-num");

function populateDisplay(newDigit) {
  if (display.textContent === "0") {
    display.textContent = newDigit;
  } else {
    display.textContent += newDigit;
  }
}

const digitBtns = document.querySelectorAll(".digit-btn");

digitBtns.forEach((digitBtn) => {
  digitBtn.addEventListener("click", () =>
    populateDisplay(digitBtn.textContent)
  );
});
