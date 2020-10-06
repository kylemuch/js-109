let readlineSync = require("readline-sync");

console.log("What is your age?");
let age = readlineSync.prompt();
console.log("At what age would you like to retire?")
let retirementAge = readlineSync.prompt();

let dateObj = new Date();
let currentYear = dateObj.getFullYear();
let retirementYear = currentYear + (retirementAge - age);
let yearsToWork = retirementYear - currentYear;

console.log(`It's ${currentYear}. You will retire in ${retirementYear}.`);
console.log(`You have only ${yearsToWork} years to go!`);
