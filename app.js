// ===============================
// Calculator History Array
// ===============================
const history = [];

// ===============================
// Helper Function: Add to History
// ===============================
function addToHistory(num1, num2, operator, result) {
  history.push({
    operand1: num1,
    operand2: num2,
    operator: operator,
    result: result
  });
}

// ===============================
// Arithmetic Functions
// ===============================

// Addition
function add(a, b) {
  const result = a + b;
  addToHistory(a, b, "+", result);
  return result;
}

// Subtraction
function subtract(a, b) {
  const result = a - b;
  addToHistory(a, b, "-", result);
  return result;
}

// Multiplication
function multiply(a, b) {
  const result = a * b;
  addToHistory(a, b, "*", result);
  return result;
}

// Division
function divide(a, b) {
  if (b === 0) {
    console.log("Error: Cannot divide by zero");
    return null;
  }
  const result = a / b;
  addToHistory(a, b, "/", result);
  return result;
}

// ===============================
// Display History Function
// ===============================
function displayHistory() {
  if (history.length === 0) {
    console.log("No calculations yet.");
    return;
  }

  console.log("Calculation History:");
  history.forEach((entry, index) => {
    console.log(
      `${index + 1}: ${entry.operand1} ${entry.operator} ${entry.operand2} = ${entry.result}`
    );
  });
}

// ===============================
// Testing the Calculator
// ===============================

console.log(add(5, 3));        // 8
console.log(subtract(10, 4));  // 6
console.log(multiply(6, 7));   // 42
console.log(divide(20, 5));    // 4

displayHistory();