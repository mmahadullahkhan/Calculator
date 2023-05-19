// Get references to the relevant HTML elements
const result = document.getElementById("result");
const buttons = document.querySelectorAll("button");

// Initialize the calculator's state
let num1 = "";
let operator = "";
let num2 = "";
let total = "";

// Add event listeners to each button
buttons.forEach(button => {
  button.addEventListener("click", () => {
    // Handle numeric input
    if (!isNaN(button.textContent)) {
      if (!operator) {
        num1 += button.textContent;
        result.value = num1;
      } else {
        num2 += button.textContent;
        result.value = num2;
      }
    }

    // Handle operator input
    if (button.textContent === "+" || button.textContent === "-" || button.textContent === "*" || button.textContent === "/") {
      operator = button.textContent;
    }

    // Handle decimal input
    if (button.textContent === ".") {
      if (!operator && !num1.includes(".")) {
        num1 += ".";
        result.value = num1;
      } else if (operator && !num2.includes(".")) {
        num2 += ".";
        result.value = num2;
      }
    }

    // Handle clear input
    if (button.textContent === "C") {
      num1 = "";
      operator = "";
      num2 = "";
      total = "";
      result.value = "";
    }

    // Handle calculation and output
    if (button.textContent === "=") {
      if (num1 && operator && num2) {
        switch (operator) {
          case "+":
            total = Number(num1) + Number(num2);
            break;
          case "-":
            total = num1 - num2;
            break;
          case "*":
            total = num1 * num2;
            break;
          case "/":
            total = num1 / num2;
            break;
          default:
            break;
        }
        result.value = total;
        num1 = total;
        operator = "";
        num2 = "";
      }
    }
  });
});
function deleteLastCharacter() {
    var result = document.getElementById("result");
    result.value = result.value.slice(0, -1);
  }


  