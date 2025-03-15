const display = document.querySelector("#display-num");
const digitBtns = document.querySelectorAll(".digit-btn");

function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 / num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  return num1 / num2;
}

function operate(num1, operator, num2) {
  num1 = Number(num1);
  num2 = Number(num2);
  if (operator === "+") return add(num1, num2);
  if (operator === "-") return subtract(num1, num2);
  if (operator === "x") return multiply(num1, num2);
  if (operator === "/") return divide(num1, num2);
}

function populateDisplay(newNum) {
  if (display.textContent === "0") display.textContent = newNum;
  else display.textContent += newNum;
}

digitBtns.forEach((digitBtn) => {
  digitBtn.addEventListener("click", () => {
    const digit = digitBtn.textContent;
    populateDisplay(digit);
  });
});
