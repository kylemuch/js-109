let readlineSync = require("readline-sync");
let numArr = [];

console.log("Enter the 1st number")
let first = readlineSync.prompt();
numArr.push(first);

console.log("Enter the 2nd number")
let second = readlineSync.prompt();
numArr.push(second);

console.log("Enter the 3rd number")
let third = readlineSync.prompt();
numArr.push(third);

console.log("Enter the 4th number")
let fourth = readlineSync.prompt();
numArr.push(fourth);

console.log("Enter the 5th number")
let fifth = readlineSync.prompt();
numArr.push(fifth);

console.log("Enter the last number")
let last = readlineSync.prompt();


let appearsIn = numArr.includes(last);

if (appearsIn) {
  console.log(`The number ${last} appears in ${String(numArr)}.`)
} else {
  console.log(`The number ${last} does not appear in ${String(numArr)}.`)
}


