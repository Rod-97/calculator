const display = document.querySelector("#display-num");
const digitBtns = document.querySelectorAll(".digit-btn");
const operatorBtns = document.querySelectorAll(".operator-btn");
const equalBtn = document.querySelectorAll(".equal-btn")[0];
const clearBtn = document.querySelectorAll(".clear-btn")[0];
const dotBtn = document.querySelectorAll(".dot-btn")[0];
const backBtn = document.querySelectorAll(".back-btn")[0];

let operation = [];
const divisionByZeroErrorMsg = "Get better sleep.";
let equalPressed = false;

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
  let result = 0;
  num1 = Number(num1);
  num2 = Number(num2);
  if (operator === "+") result = add(num1, num2);
  if (operator === "-") result = subtract(num1, num2);
  if (operator === "x") result = multiply(num1, num2);
  if (operator === "/") result = divide(num1, num2);
  return +result.toFixed(10);
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

function depopulateDisplay() {
  display.textContent = display.textContent.slice(0, -1);
  if (display.textContent === "") display.textContent = "0";
}

function clearDisplay() {
  display.textContent = "0";
}

function displayResult(operation) {
  if (operation[1] === "/" && operation[2] === "0") {
    populateDisplay(divisionByZeroErrorMsg);
    return divisionByZeroErrorMsg;
  }
  const result = String(operate(...operation));
  clearDisplay();
  populateDisplay(result);
  return result;
}

digitBtns.forEach((digitBtn) => {
  digitBtn.addEventListener("click", () => {
    const digit = digitBtn.textContent;

    if (equalPressed && operation.length < 2) {
      clearDisplay();
      equalPressed = false;
      operation = [];
    }

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
      const result = displayResult(operation);
      if (result === divisionByZeroErrorMsg) operation = [];
      else operation = [result, operator];
    }
  });
});

equalBtn.addEventListener("click", () => {
  if (operation.length !== 3) return;
  const result = displayResult(operation);
  equalPressed = true;
  if (result === divisionByZeroErrorMsg) operation = [];
  else operation = [result];
});

clearBtn.addEventListener("click", () => {
  operation = [];
  clearDisplay();
});

dotBtn.addEventListener("click", () => {
  if (equalPressed) {
    clearDisplay();
    equalPressed = false;
    operation = [];
  }

  if (operation.length === 0) {
    operation.push("0.");
    populateDisplay("0.");
  } else if (operation.length === 1) {
    if (operation[0].includes(".")) return;
    operation[0] += ".";
    populateDisplay(".");
  } else if (operation.length === 2) {
    clearDisplay();
    operation.push("0.");
    populateDisplay("0.");
  } else if (operation.length === 3) {
    if (operation[2].includes(".")) return;
    operation[2] += ".";
    populateDisplay(".");
  }
});

backBtn.addEventListener("click", () => {
  if (operation.length === 0 || operation.length === 2) return;
  if (operation.length === 1) {
    operation[0] = operation[0].slice(0, -1);
    depopulateDisplay();
  } else if (operation.length === 3) {
    operation[2] = operation[2].slice(0, -1);
    depopulateDisplay();
  }
});
