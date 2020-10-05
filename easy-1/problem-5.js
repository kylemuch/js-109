let readline = require('readline-sync');

console.log('What is the bill?');
let billTotal = Number.parseFloat(readline.prompt());

console.log('What percentage tip would you like to leave?');
let tipPercentage = Number.parseInt(readline.prompt());

let tip = billTotal * (tipPercentage / 100);
let total = billTotal + tip;

console.log(`To leave a ${tipPercentage}% tip on a ${billTotal} dollar bill, you would need to leave a total of ${total} dollars.`);
