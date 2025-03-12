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
  if (operator === "+") return add(num1, num2);
  if (operator === "-") return subtract(num1, num2);
  if (operator === "*") return multiply(num1, num2);
  if (operator === "/") return divide(num1, num2);
}

const digitButtons = document.querySelectorAll(".digit-btn");
const displayNum = document.querySelector("#display-num");
const clearBtn = document.querySelectorAll(".clear-btn")[0];

digitButtons.forEach((digitBtn) => {
  digitBtn.addEventListener("click", () => {
    const displayedNum = displayNum.textContent;
    const newDigit = digitBtn.textContent;

    if (displayedNum === "0") {
      displayNum.textContent = newDigit;
    } else {
      displayNum.textContent += digitBtn.textContent;
    }
  });
});

clearBtn.addEventListener("click", () => {
  displayNum.textContent = "0";
});
