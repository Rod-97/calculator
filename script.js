const display = document.querySelector("#display-num");
const digitBtns = document.querySelectorAll(".digit-btn");
const operatorBtns = document.querySelectorAll(".operator-btn");
const equalBtn = document.querySelectorAll(".equal-btn")[0];

let operation = [];
const divisionByZeroErrorMsg = "Get better sleep.";

function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
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
  if (
    display.textContent === "0" ||
    display.textContent === divisionByZeroErrorMsg
  ) {
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
    const digit = digitBtn.textContent;

    if (operation.length === 0) {
      operation.push(digit);
    } else if (operation.length === 1) {
      operation[0] += digit;
    } else if (operation.length === 2) {
      clearDisplay();
      operation.push(digit);
    } else if (operation.length === 3) {
      operation[2] += digit;
    }

    populateDisplay(digit);
  });
});

operatorBtns.forEach((operatorBtn) => {
  operatorBtn.addEventListener("click", () => {
    const operator = operatorBtn.textContent;
    if (operation.length === 0) {
      return;
    } else if (operation.length === 1) {
      operation.push(operator);
    } else if (operation.length === 2) {
      operation[1] = operator;
    } else if (operation.length === 3) {
      if (operation[1] === "/" && operation[2] === "0") {
        populateDisplay(divisionByZeroErrorMsg);
        operation = [];
        return;
      }
      const result = String(operate(...operation));
      operation = [result, operator];
      clearDisplay();
      populateDisplay(result);
    }
  });
});

equalBtn.addEventListener("click", () => {
  if (operation.length !== 3) return;
  if (operation[1] === "/" && operation[2] === "0") {
    populateDisplay(divisionByZeroErrorMsg);
    operation = [];
    return;
  }
  const result = String(operate(...operation));
  operation = [result];
  clearDisplay();
  populateDisplay(result);
});
