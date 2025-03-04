function simpleCalculate(operand1, operand2, operation) {
 return operation(operand1, operand2);
}

function multiply(operand1, operand2) {
 return operand1 * operand2;
}

function division(operand1, operand2) {
 return operand1 / operand2;
}

function summation(operand1, operand2) {
 return operand1 + operand2;
}
function subtraction(operand1, operand2) {
 return operand1 - operand2;
}

const operations = {
 multiply: multiply,
 division: division,
 summation: summation,
 subtraction: subtraction,
};

let selectedOperation = 'multiply';

console.log(simpleCalculate(2, 6, operations[selectedOperation]));
