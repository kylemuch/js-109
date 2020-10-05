let readline = require('readline-sync');

console.log('Please enter an integer greater than 0:');
let int = Number(readline.prompt());

console.log('Enter "s" to compute the sum, or "p" to compute the product');
let operation = readline.prompt();

function printSum(int) {
  let sum = 0;

  for (let i = 0; i <= int; i += 1) {
    sum += i;
  }

  console.log(`The sum of the numbers between 1 and ${int} is ${sum}.`);
}

function printProduct(int) {
  let product = 1;

  for (i = 1; i <= int; i += 1) {
    product *= i;
  }

  console.log(`The product of the numbers between 1 and ${int} is ${product}.`);
}

function outputResult() {
  if (operation === 's') {
    printSum(int);
  } else {
    printProduct(int);
  }
}

outputResult();