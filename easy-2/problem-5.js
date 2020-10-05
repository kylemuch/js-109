let readlineSync = require("readline-sync");

console.log("==> Enter the first number:");
let firstNum = readlineSync.prompt();

console.log("==> Enter the second number:");
let secondNum = readlineSync.prompt();

console.log(`==> ${firstNum} + ${secondNum} = ${firstNum + secondNum}`);
console.log(`==> ${firstNum} - ${secondNum} = ${firstNum - secondNum}`);
console.log(`==> ${firstNum} * ${secondNum} = ${firstNum * secondNum}`);
console.log(`==> ${firstNum} / ${secondNum} = ${Math.floor(firstNum / secondNum)}`);
console.log(`==> ${firstNum} % ${secondNum} = ${firstNum % secondNum}`);
console.log(`==> ${firstNum} ** ${secondNum} = ${firstNum ** secondNum}`);

